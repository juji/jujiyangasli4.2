export const html = (
  name:string, 
  email: string, 
  message: string
) => `

<div style="padding:2rem">

<img src="https://jujiyangasli.com/images/email-header.png" 
  style="width:150px;height:auto;" /><br /><br />

<big>Hi, ${name}!!</big><br />
<br />
You just sent Juji a message.<br />
He will send you a message shortly.. <br />
<br />
That is.. if he's not busy playing his PlayStation.<br />
<br />
Thank you for your message..<br />
<br />

<div style="margin: 3rem 0; font-size: 5rem;font-style:bold;">
;)
</div>

<small>
- This is an automated message. Do not reply this email.
</small>

</div>

`


export const text = (
  name:string, 
  email: string, 
  message: string
) => `

Hi, ${name}!!

You just sent Juji a message.
He will send you a message shortly.. 

That is.. if he's not busy playing his PlayStation.

Thank you for your message.. ;)

- This is an automated message. Do not reply this email.

`