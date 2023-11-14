import nodemailer from 'nodemailer'
import {
  MAIL_SERVER,
  MAIL_PORT,
  MAIL_LOGIN,
  MAIL_PASSWORD,
  MAIL_SENDER,
  MAIL_ME
} from '$env/static/private'

import { 
  html as sendMeHtml, 
  text as sendMeText
} from './sendme.server'

import { 
  html as sendPeopleHtml, 
  text as sendPeopleText
} from './sendpeople.server'

let transporter = nodemailer.createTransport({

  // @ts-ignore
  pool: true,
  host: MAIL_SERVER,
  port: MAIL_PORT,
  // secure: true, // use TLS
  auth: {
    user: MAIL_LOGIN,
    pass: MAIL_PASSWORD,
  },

})

export async function send({
  name, 
  email, 
  message
}:{
  name: string
  email: string
  message: string
}){

  // send to me
  return await Promise.all([

    transporter.sendMail({
      from: MAIL_SENDER,
      to: MAIL_ME,
      subject: `Message from ${name} | jujiyangasli.com`,
      text: sendMeText(name, email, message),
      html: sendMeHtml(name, email, message),
    }),

    transporter.sendMail({
      from: MAIL_SENDER,
      to: email,
      subject: `Hello from jujiyangasli.com`,
      text: sendPeopleText(name, email, message),
      html: sendPeopleHtml(name, email, message),
    })

  ])

  

}
