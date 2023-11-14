<script lang="ts">
  import { contactSchema } from './contact.schema'
  import { page } from '$app/stores';
  import Message from '$lib/components/message.svelte';
	import type { FormEventHandler } from 'svelte/elements';
  import { onMount } from 'svelte';
  
  export let anim = false
  export let visible = false

  let success = $page.url.searchParams.get('contactok');
  let error = $page.url.searchParams.get('contacterror');

  $: if(success){
    setTimeout(() => {
      success = ''
    },24000) // time limit from server
  }

  const action = '/api/contact'

  let formValid = false
  let form:HTMLFormElement;
  let sending = false
  let jsEnabled = false

  onMount(() => { jsEnabled = true })

  let touched: {[key:string]: boolean} = {}
  let invalid: {[key:string]: boolean|string} = {}

  const onSubmit = async (e:SubmitEvent) => {

    sending = true
    success = ''
    error = ''

    const formData = new FormData(form)
    const res = await fetch(
      action,
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      }
    )
    
    const resp = await res.json()
    setTimeout(() => {
      sending = false
      if(resp.success) {
        success = '1'
        form.reset()
      }
      else error = '1'
    },1000)
  }

  const formOnChange:FormEventHandler<
    HTMLInputElement |
    HTMLTextAreaElement
  > = (e) => {

    const name = (e.target as HTMLInputElement).name
    if(!touched[name]) touched[name] = true
    
    const data = Object.fromEntries( new FormData(form) );
    const res = contactSchema.safeParse(data)
    if(res.success) {
      formValid = true
      invalid = {
        name: false,
        email: false,
        message: false
      }
    }

    else {
      formValid = false
      invalid = res.error.errors.reduce((a,b) => {
        if(touched[b.path[0]])
          a[b.path[0] as string] = b.message
        return a
      },{} as {[key:string]:string})
    }

  }
  
</script>

<div class="contact-form" id="contact-form" 
  class:anim
  class:visible
  class:sending
>
  <h4>Send me a Hello!</h4>
  
  <div class="form">
    <form method="POST"
      bind:this={form}
      on:submit|preventDefault={onSubmit}
      action={action}
      class:js={jsEnabled}
      class:nojs={!jsEnabled}
      class:valid={formValid}
    >
      
      <label for="contact-name">Name</label>
      <input 
        on:input={formOnChange}
        disabled={sending}
        class:touched={touched.name}
        class:invalid={!!invalid.name}
        minlength={2}
        type="text" id="contact-name" name="name" required />
      <div class="message" class:invalid={!!invalid.name}>{invalid.name||'a'}</div>
      
      <label for="contact-email">Email</label>
      <input 
        on:input={formOnChange}
        disabled={sending}
        class:touched={touched.email}
        class:invalid={!!invalid.email}
        type="email" id="contact-email" name="email" required />
      <div class="message" class:invalid={!!invalid.email}>{invalid.email||'a'}</div>
      
      <label for="contact-message" data-error={invalid.message||''}>Message</label>
      <textarea 
        on:input={formOnChange}
        disabled={sending}
        minlength={5}
        class:touched={touched.message}
        class:invalid={!!invalid.message}
        rows="6" id="contact-message" name="message" required />
      <div class="message" class:invalid={!!invalid.message}>{invalid.message||'a'}</div>
  
      <div class="submit-button">
        {#if success}
          <div class="server-message">
            <Message success={'Thank you for reaching out!!'} />
          </div>
        {:else if error}
          <div class="server-message">
            <Message error="Something bad is happening :(" />
          </div>
          <button 
            type="submit" 
            name="submit">Submit</button>
        {:else}
          <button 
            disabled={sending}
            type="submit" 
            name="submit">{sending ? 'Sending...' : 'Submit'}</button>
        {/if}
      </div>
    </form>
  </div>
</div>


<style lang="scss">
  @use './form.scss';
</style>