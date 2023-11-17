import { e as error, j as json, r as redirect } from "../../../../chunks/index.js";
import nodemailer from "nodemailer";
import { C as COOKIE_NAME } from "../../../../chunks/vars.server.js";
import Redis from "ioredis";
import { c as contactSchema } from "../../../../chunks/contact.schema.js";
const MAIL_SERVER = "smtp-relay.brevo.com";
const MAIL_PORT = "587";
const MAIL_LOGIN = "jujiyangasli@gmail.com";
const MAIL_PASSWORD = "xsmtpsib-925734870f389f8ee69184356787fdf4fd46f8646ce98b9c703ccc8fd4eb6c21-PSyxbhXc9s41dODV";
const MAIL_SENDER = "noreply@jujiyangasli.com";
const MAIL_ME = "jujiyangasli@gmail.com";
const REDIS = "rediss://default:AVNS_VCbNUu5cTeqVvktpA4W@redis-1e371b15-jujiyangasli-14f3.aivencloud.com:11543";
const html$1 = (name, email, message) => `
<br />
Yo, this person have just sent you a message:<br />
Name: ${name}<br />
Email: <a href="mailto:${email}">${email}</a><br /><br />

====<br />
Message:<br /><br />
${message}
`;
const text$1 = (name, email, message) => `

Yo, this person have just sent you a message:

Name: ${name}
Email: ${email}

====
Message:

${message}

`;
const html = (name, email, message) => `

<div style="padding:2rem">

<img src="https://jujiyangasli.com/images/email-header.png" 
  style="width:150px;height:auto;" /><br /><br />

<big>Hi, ${name}!!</big><br />
<br />
You just sent Juji a message.<br />
He will send you a message shortly.. <br />
<br />
That is.. if he's not busy saving the world (aka sleeping).<br />
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

`;
const text = (name, email, message) => `

Hi, ${name}!!

You just sent Juji a message.
He will send you a message shortly.. 

That is.. if he's not busy saving the world (aka sleeping).

Thank you for your message.. ;)

- This is an automated message. Do not reply this email.

`;
let transporter = nodemailer.createTransport({
  // @ts-ignore
  pool: true,
  host: MAIL_SERVER,
  port: MAIL_PORT,
  // secure: true, // use TLS
  auth: {
    user: MAIL_LOGIN,
    pass: MAIL_PASSWORD
  }
});
async function send({
  name,
  email,
  message
}) {
  return await Promise.all([
    transporter.sendMail({
      from: MAIL_SENDER,
      to: MAIL_ME,
      subject: `Message from ${name} | jujiyangasli.com`,
      text: text$1(name, email, message),
      html: html$1(name, email, message)
    }),
    transporter.sendMail({
      from: MAIL_SENDER,
      to: email,
      subject: `Hello from jujiyangasli.com`,
      text: text(name),
      html: html(name)
    })
  ]);
}
const redis = new Redis(REDIS);
const LIMIT = 24e3;
const wait = (n) => new Promise((r) => {
  setTimeout(r, n);
});
async function rateLimit(key) {
  await wait(1e3 + Math.round(Math.random() * 1e3));
  const val = await redis.get(key);
  await redis.set(key, (/* @__PURE__ */ new Date()).toISOString());
  if (!val)
    return true;
  return (/* @__PURE__ */ new Date()).valueOf() - new Date(val).valueOf() > LIMIT;
}
function stripBom(txt) {
  return txt.charCodeAt(0) === 65279 ? txt.slice(1).trim() : txt.trim();
}
async function POST({ cookies, request, setHeaders }) {
  const accept = request.headers.get("Accept");
  const cookie = cookies.get(COOKIE_NAME);
  if (!cookie)
    throw error(400, { message: "Nope" });
  const r = await rateLimit(cookie);
  if (!r) {
    setHeaders({
      "retry-after": LIMIT / 1e3 + ""
    });
    throw error(429, { message: "Too many request" });
  }
  const data = await request.formData();
  const name = stripBom(data.get("name"));
  const email = stripBom(data.get("email"));
  const message = stripBom(data.get("message"));
  const check = contactSchema.safeParse({
    name,
    email,
    message
  });
  if (!check.success)
    throw error(400, { message: "Bad Request" });
  try {
    await send({
      name,
      email,
      message
    });
    if (accept === "application/json")
      return json({ success: true });
    else
      throw redirect(303, "/?contactok=1#contact");
  } catch (e) {
    if (accept === "application/json")
      return json({ success: false });
    else
      throw redirect(303, "/?contacterror=1#contact");
  }
}
export {
  POST
};
