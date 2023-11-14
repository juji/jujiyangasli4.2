<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  import Thumbnail from "./thumbnail.svelte";
  import { animEnabled } from '$lib/stores/anim-enabled';
  import { onNavigate } from '$app/navigation';
  import type { WorkSingle } from "$lib/data/works/types";
	import { onMount } from "svelte";

  export let works: WorkSingle[];
  
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

</script>
<div 
  class={`works`}
  id="works">

  <h1 class={`h1`}>
    Works
    <TitleLink href="/#works" />
  </h1>
  <p class={`par`}>Things i did</p>

  <div class={`workThumbnails`}>
    {#each works as work,i }
    <Thumbnail 
      work={work} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use 'src/lib/sass/slideUp';
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

    &.paused{
      h1{
        animation-name: slideUpBackward, fadeOut;
        animation-fill-mode: both;
        animation-duration: 200ms;
        animation-delay: 0ms;
      }
      .par{
        animation-name: slideUpBackward, fadeOut;
        animation-fill-mode: both;
        animation-duration: 200ms;
        animation-delay: 0ms;
      }

      &.visible{
        h1{
          animation-name: slideUp, fadeIn;
          animation-duration: 400ms;
          animation-delay: 400ms;
        }
        .par{
          animation-name: slideUp, fadeIn;
          animation-duration: 400ms;
          animation-delay: 600ms;
        }
      }
    }


  }
</style>