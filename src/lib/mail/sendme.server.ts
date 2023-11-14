

export const html = (
  name: string, 
  email: string, 
  message: string
) => `
<br />
Yo, this person have just sent you a message:<br />
Name: ${name}<br />
Email: <a href="mailto:${email}">${email}</a><br /><br />

====<br />
Message:<br /><br />
${message}
`

export const text = (
  name:string, 
  email: string, 
  message: string
) => `

Yo, this person have just sent you a message:

Name: ${name}
Email: ${email}

====
Message:

${message}

`