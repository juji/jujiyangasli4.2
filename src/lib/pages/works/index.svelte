<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  import Thumbnail from "./thumbnail.svelte";
  import { animEnabled } from '$lib/stores/anim-enabled';
  import { onNavigate } from '$app/navigation';
  import type { WorkSingle } from "$lib/data/works/types";

  export let works: WorkSingle[];
  let innerHeight = typeof window !== 'undefined' ? window.innerHeight : null;
  let scrollY = 0
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

  $: if(scrollY > 42 && $animEnabled.anim && !visible){
    visible = true
  }

  $: if(scrollY < 42 && $animEnabled.anim && visible){
    visible = false
  }

</script>

<svelte:window bind:innerHeight bind:scrollY />

<div id="works"></div>
<div 
  class={`works`}
  class:anim={$animEnabled.anim}
  class:visible
  style={`--window-height: ${innerHeight}; --scroll-top: ${scrollY}`}>

  <h1 class={`h1`}>
    Works
    <TitleLink href="/#works" />
  </h1>
  <p class={`par`}>Things i did</p>

  <div class={`workThumbnails`}>
    {#each works as work, i }
    <Thumbnail
      paused={$animEnabled.anim}
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

    --window-height: 0;
    --scroll-top: 0;
    --translate-top: min(
      calc( 
        
        /* paralax thing */
        (
          1 - (
            min(
              var(--scroll-top) / var(--window-height),
              1
            )
          )
        ) *


        /* initial position */
        ( -1px * (
          var(--window-height) - (
            /* multiple element height of homepage */
            /* + 65 (pad-top-page) */
            (56 + 123 + 21.5 + 24 + 67.5 + 225 ) 
          )
        )) + var(--pad-top-page)
      ), 0px
    );

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
      translate: 0 var(--translate-top);

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