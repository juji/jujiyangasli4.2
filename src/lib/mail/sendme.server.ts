

export const html = (
  name: string, 
  email: string, 
  message: string
) => `
${message}
====<br />
<br />
This message was sent by:<br />
Name: ${name}<br />
Email: <a href="mailto:${email}">${email}</a><br /><br />
`

export const text = (
  name:string, 
  email: string, 
  message: string
) => `

${message}
====

This message was sent by:

Name: ${name}
Email: ${email}
`