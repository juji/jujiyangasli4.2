<script lang="ts">
  import Container from '$lib/components/container.svelte'
  import Menu from './menu/index.svelte';
  import '@fontsource/source-serif-pro';
  import { page } from '$app/stores';
	import { onMount } from 'svelte';

  let scrollY = typeof window === 'undefined' ? 0 : window.scrollY
  let smallHeader = true
  $: smallHeader = $page.url.pathname !== '/'
  
</script>

<svelte:window bind:scrollY={scrollY} />

<header
  style={`--scrollY: ${scrollY}`}
  class={`header ${smallHeader?'small':''}`}> 
  <Container>
    <a class={`logo`} href="/#home">juji&nbsp;};</a>
    <Menu />
  </Container>
</header>

<style lang="scss">
  
  .header{
    --scrollY: 0;
    --transition: 300ms;

    position: fixed;
    width: 100%;
    top:0;
    left:0;
    padding: var(--pad-y) var(--pad-x);
    padding-top: calc(1rem * (4 - ((4 - 0.5) * clamp(0, var(--scrollY) / (163 - 42), 1))));
    padding-bottom: calc(1rem * (4 - ((4 - 0.5) * clamp(0, var(--scrollY) / (163 - 42), 1))));
    /* transition: padding-top var(--transition), padding-bottom var(--transition); */
   
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
      /* transition: opacity var(--transition); */
    }
  
    
    :global(.container){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo{
      font-family: 'Source Serif Pro', sans-serif;
      font-weight: 400;
      color: var(--text);
      text-decoration: none;
      font-size: calc(1rem * (4 - ((4 - 2) * clamp(0, var(--scrollY) / (163 - 42), 1))));
      /* transition: font-size var(--transition); */
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