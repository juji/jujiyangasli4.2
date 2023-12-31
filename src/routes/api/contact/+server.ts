import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { send } from '$lib/mail/send.server';
import { COOKIE_NAME } from '$lib/vars.server';
import { rateLimit, LIMIT } from '$lib/rate-limit.server';
import { error } from '@sveltejs/kit';
import { contactSchema } from '$lib/pages/contact/contact-form/contact.schema'


function stripBom(txt: string): string{
  return txt.charCodeAt(0) === 0xFEFF ? 
    txt.slice(1).trim() : txt.trim()
}

export async function POST({ cookies, request, setHeaders }){
  
  // return json({ success: true })

  const accept = request.headers.get('Accept')

  const cookie = cookies.get(COOKIE_NAME)
  if(!cookie) throw error(400,{ message: 'Nope' })

  const r = await rateLimit(cookie as string)
  if(!r) {
    setHeaders({
      'retry-after': (LIMIT / 1000) + ''
    })
    throw error(429,{ message: 'Too many request'})
  }

  const data = await request.formData();
  const name = stripBom(data.get('name') as string);
  const email = stripBom(data.get('email') as string);
  const message = stripBom(data.get('message') as string);
  const check = contactSchema.safeParse({
    name,
    email,
    message
  })

  if(!check.success) throw error(400,{ message: 'Bad Request' })

  // send mail to me
  // send mail to sender
  try{

    await send({ 
      name, 
      email, 
      message
    })
  
    if(accept === 'application/json')
      return json({ success: true })
    else 
      throw redirect(303,'/?contactok=1#contact')

  }catch(e){

    if(accept === 'application/json')
      return json({ success: false })
    else 
      throw redirect(303,'/?contacterror=1#contact')

  }

}

