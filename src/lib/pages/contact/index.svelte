<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  // @ts-ignore
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import IoLogoGithub from "svelte-icons-pack/io/IoLogoGithub";
  import IoLogoNpm from "svelte-icons-pack/io/IoLogoNpm";
  import IoLogoLinkedin from "svelte-icons-pack/io/IoLogoLinkedin";
  import IoLogoSkype from "svelte-icons-pack/io/IoLogoSkype";
  import ContactForm from './contact-form/index.svelte'
	import { onMount } from "svelte";

  let visible = false
  let observed: HTMLDivElement

  onMount(() => {
    
    if(typeof IntersectionObserver === 'undefined') {
      return () => {}
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === observed) {
          visible = entry.isIntersecting
        }
      })
    },{
      rootMargin: '1000% 0px -25% 0px'
    });

    observer.observe(observed);

    return () => {
      observer.disconnect()
    }

  })

</script>


<div 
  class={`contact`}
  class:anim={true}
  class:visible={visible}
  bind:this={observed}
  id="contact">
  
  <h2 class={`h1`}>
    Contact
    <TitleLink href="/#contact" label="Contact" />
  </h2>
  <p class={`email`}>
    <a target="_blank" 
      rel="noopener noreferrer" 
      href="mailto:him@jujiyangasli.com">
      him@jujiyangasli.com
    </a>
  </p>
  <p class={`city`}>
    Tangerang, Indonesia
  </p>

  <div class={`links`}>
    <a target="_blank" rel="noopener noreferrer" 
      title="Github page"
      aria-label="Go to juji's github page"
      id={`github`} href="https://github.com/juji"><Icon src={IoLogoGithub} size="2.618rem" /></a>
    <a target="_blank" rel="noopener noreferrer" 
      title="NPM page"
      aria-label="Go to juji's npm page"
      id={`npm`} href="https://npmjs.com/~jujiyangasli"><Icon src={IoLogoNpm} size="2.618rem" /></a>
    <a target="_blank" rel="noopener noreferrer" 
      title="LinkedIn page"
      aria-label="Go to juji's linkedin page"
      id={`linkedin`} href="https://www.linkedin.com/in/jujiyangasli/"><Icon src={IoLogoLinkedin} size="2.618rem" /></a>
    <a target="_blank" rel="noopener noreferrer" 
      title="Skype Chat"
      aria-label="chat with juji on skype"
      id={`skype`} href="skype://juji.gunadi?chat"><Icon src={IoLogoSkype} size="2.618rem" /></a>
  </div>

  <ContactForm 
    anim={true}
    visible={visible}
  />
</div>

<style lang="scss">
  @use './contact';
</style>