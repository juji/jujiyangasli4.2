<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  import Thumbnail from "./thumbnail.svelte";
  import { onNavigate } from '$app/navigation';
  import type { WorkSingle } from "$lib/data/works/types";
	import { onMount } from "svelte";
  import { homePaddingBottom } from '$lib/stores/home-padding';

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

  // rebuild
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

  let innerHeight: number;
  let scrollY: number;
  let scroll: number;

  $: scroll = Math.min(scrollY/innerHeight, 1)??0


</script>

<svelte:window bind:innerHeight bind:scrollY={scrollY} />

<div id="works" bind:this={observed}></div>
<div
  style={`--home-padding-bottom: ${$homePaddingBottom??0}; --scroll-y:${scroll??0}`}
  class={`works`}
  class:anim={true}
  class:visible>

  <h2 class={`h1`}>
    Works
    <TitleLink href="/#works" label="Works" />
  </h2>
  <p class={`par`}>Things i did</p>

  <div class={`workThumbnails`}>
    {#each works as work, i }
    <Thumbnail
      paused={lastWork !== work.id}
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

    --home-padding-bottom: 0;
    --scroll-y: 0;

    /* translate: 0 calc( 1px * (1 - var(--scroll-y)) * var(--home-padding-bottom) ); */
    /* transition: translate 200ms; */

    padding-top: var(--pad-top-page);

    h2{
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

      h2{
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
        h2{
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