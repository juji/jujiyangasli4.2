<script lang="ts">
  import Container from '$lib/components/container.svelte'
  import Menu from './menu/index.svelte';
  import '@fontsource/source-serif-pro';
  import { page } from '$app/stores';

  // let scrollY = typeof window === 'undefined' ? 0 : window.scrollY
  let smallHeader = true
  $: smallHeader = $page.url.pathname !== '/'

  // magic number, that's okay bro... just let it be
  // let scroll = 0
  // $: if(scrollY <= 163){
  //   scroll = scrollY
  // } else {
  //   scroll = 163
  // }
  
</script>

<!-- <svelte:window bind:scrollY={scrollY} /> -->

<!-- style={`--scrollY: ${scroll}`} -->
<header
  class={`header ${smallHeader?'small':''}`}> 
  <Container>
    <a class={`logo noline`} href="/#home">juji&nbsp;};</a>
    <Menu />
  </Container>
</header>

<style lang="scss">

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  
  .header{
    --scrollY: 0;
    --transition: 300ms;

    position: fixed;
    width: 100%;
    top:0;
    left:0;
    padding: 0 var(--pad-x);
    padding-top: calc(1rem * (4 - ((4 - 0.5) * clamp(0, var(--scrollY) / (163 - 42), 1))));
    padding-bottom: calc(1rem * (4 - ((4 - 0.5) * clamp(0, var(--scrollY) / (163 - 42), 1))));
    transition: padding-top var(--transition), padding-bottom var(--transition);

    /* @media not all and (min-resolution: 0.001dpcm) {
      transition: ;
    } */

    :global(.container){
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-column: content;
      width: 100%;
    }
   
    z-index: 10;
    
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      transition: background-color 300ms, backdrop-filter 300ms;
      animation-fill-mode: both;
      border-bottom: 1px solid var(--header-border-bottom);
      background-color: var(--header-bg-small);
      backdrop-filter: blur(3px);
      opacity: calc(clamp(0, var(--scrollY) / (163 - 42), 1));
      transition: opacity var(--transition);
    }
  
    .logo{
      font-family: 'Source Serif Pro', sans-serif;
      font-weight: 400;
      color: var(--text);
      text-decoration: none;
      font-size: 2rem;
      line-height: calc(1rem * (6 - ((6 - 3.2) * clamp(0, var(--scrollY) / (163 - 42), 1))));
      scale: calc(1 * (2 - ((2 - 1) * clamp(0, var(--scrollY) / (163 - 42), 1))));
      translate: 0% calc(1px * (-34 - ((-34 - 0) * clamp(0, var(--scrollY) / (163 - 42), 1))));
      transform-origin: 0% 0%;
      transition: 
          line-height var(--transition), 
          scale var(--transition), 
          translate var(--transition);
      animation-name: fadeIn;
      animation-duration: 300ms;
      animation-delay: 100ms;
      animation-fill-mode: both;
    }
  
    &.small {
  
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      
      &:before{
        opacity: 1;
        border-bottom: 1px solid var(--header-border-bottom);
        background-color: var(--header-bg-small);
        backdrop-filter: blur(3px);
      }
  
      .logo {
        scale: 1;
        line-height: 3.2rem;
        translate: 0% 0%;
      }
  
    }
  }
</style>