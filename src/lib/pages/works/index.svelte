<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  import Thumbnail from "./thumbnail.svelte";
  import { animEnabled } from '$lib/stores/anim-enabled';
  import { onNavigate } from '$app/navigation';
  import type { WorkSingle } from "$lib/data/works/types";
	import { onMount } from "svelte";

  export let works: WorkSingle[];
  let visible = false
  
  // prevent smooth scroll while navigating to work
  onNavigate((navigation) => {
    if(!navigation || !navigation.to) return;
    if(navigation.to.url.pathname.match(/\/works/)){
      const html = document.querySelector('html')
      if(!html) return;
      html.classList.add('noSmooth')
      navigation.complete.then(() => {
        html.classList.remove('noSmooth')  
      })
    }
  })

  let lastWork:string|null = null
  let observed: HTMLDivElement
  onMount(() => {
    
    lastWork = sessionStorage.getItem('last-work') || null
    sessionStorage.removeItem('last-work')

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
  id="works" bind:this={observed}
  class={`works`}
  class:anim={$animEnabled.anim}
  class:visible
  style={`--window-height: ${innerHeight}; --scroll-top: ${scroll}`}>

  <h1 class={`h1`}>
    Works
    <TitleLink href="/#works" />
  </h1>
  <p class={`par`}>Things i did</p>

  <div class={`workThumbnails`}>
    {#each works as work, i }
    <Thumbnail
      paused={lastWork === work.id ? false : $animEnabled.anim}
      animationDelay={500 + (i * 100)}
      visible={visible}
      work={work} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use 'src/lib/sass/slideLeft';
  @use 'src/lib/sass/fadeIn';
  @use 'src/lib/sass/fadeOut';

  .works{

    padding-top: var(--pad-top-page);

    h1{
      padding-top: 3rem;
    }

    .par{
      margin-bottom: 4rem;
    }

    .workThumbnails{

      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;

      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    &.anim{

      h1{
        animation-name: slideLeftBackward, fadeOut;
        animation-fill-mode: both;
        animation-duration: 200ms;
        animation-delay: 0ms;
      }
      .par{
        animation-name: slideLeftBackward, fadeOut;
        animation-fill-mode: both;
        animation-duration: 200ms;
        animation-delay: 100ms;
      }

      &.visible{
        h1{
          animation-name: slideLeft, fadeIn;
          animation-duration: 200ms;
          animation-delay: 0ms;
        }
        .par{
          animation-name: slideLeft, fadeIn;
          animation-duration: 200ms;
          animation-delay: 100ms;
        }
      }
    }


  }
</style>