<script>
  import Container from '$lib/components/container.svelte'
  import Menu from './menu/index.svelte';
  import '@fontsource/source-serif-pro';
  import { page } from '$app/stores';

  let scrollY = 0
  let bigHeader = false

  // header height depends on:
  // scroll
  $: bigHeader = !!($page.url.pathname === '/' && scrollY < 42)

</script>

<svelte:window bind:scrollY={scrollY} />

<header class={`header ${bigHeader?'':'small'}`}> 
  <Container>
    <a class={`logo`} href="/#home">juji&nbsp;};</a>
    <Menu />
  </Container>
</header>

<style lang="scss">

  @use '$lib/sass/header';

  .header{
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    padding: var(--pad-y) var(--pad-x);
    padding-top: 4rem;
    padding-bottom: 4rem;
    z-index: 10;
    transition: padding-top 300ms, padding-bottom 300ms;
    
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      background-color: var(--header-bg);
      transition: background-color 300ms, backdrop-filter 300ms;
      backdrop-filter: blur(0px);
      animation: header;
      animation-duration: 1000ms;
      animation-fill-mode: both;
      border-bottom: 1px solid transparent;

      /* animation-name: slideUp;
      animation-duration: 300ms;
      animation-fill-mode: both;
      animation-delay: var(--base-anim-delay); */
    }
  
    
    :global(.container){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo{
      font-family: 'Source Serif Pro', sans-serif;
      font-weight: 400;
      transition: font-size 300ms;
      color: var(--text);
      text-decoration: none;
      font-size: 4rem;
    }
  
    &.small {
  
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      
      &:before{
        border-bottom: 1px solid var(--header-border-bottom);
        background-color: var(--header-bg-small);
        backdrop-filter: blur(3px);
      }
  
      .logo {
        font-size: 2rem;
      }
  
    }
  }
</style>