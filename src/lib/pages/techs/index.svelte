<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  import TechCell from "./tech-cell.svelte";
  import { techs } from "$lib/data/techs";
	import { onMount } from "svelte";

  let observed: HTMLDivElement;
  let visible = false
  let js = false

  onMount(() => {

    js = true
    
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
      rootMargin: '1000% 0px -10% 0px'
    });

    observer.observe(observed);

    return () => {
      observer.disconnect()
    }

  })

</script>

<div 
  bind:this={observed}
  class={`tech`} 
  class:anim={js}
  class:visible
  id="techs">

  <h2 >
    Technologies
    <TitleLink href="/#techs" label="Techs" />
  </h2>
  <p class={`par`}>Things I play with</p>

  {#each techs as group}
    <div class={'techRow'}>
      {#each group as tech, i}
        <TechCell
          item={tech}
          animEnabled={js}
          parentVisible={visible}
          animationDelay={300 + (i * 100)}
        />
      {/each}
    </div> 
  {/each}

  <p class="last">
    and probaly some more..
  </p>

</div>

<style lang="scss">
@use '$lib/sass/fadeIn';
@use '$lib/sass/fadeOut';
@use '$lib/sass/slideUp';

.tech{

  padding-top: var(--pad-top-page);
  /* padding-bottom: 5rem; */
  
  h2{
    padding-top: 3rem;
  }

  .par{
    margin-bottom: 4rem;
  }

  .last{
    color: #828282;
    margin-left: 1rem;
  }


  .techRow{
    margin-bottom: 1rem;

    &:last-child{
      margin-bottom: 0rem;
    }
  }

  &.anim{
    h2{
      animation-name: slideUpBackward, fadeOut;
      animation-duration: 400ms;
      animation-fill-mode: both;
      animation-delay: 0ms;
    }
    .par{
      animation-name: slideUpBackward, fadeOut;
      animation-duration: 400ms;
      animation-delay: 0ms;
      animation-fill-mode: both;
    }

    &.visible{
      h2{
        animation-name: slideUp, fadeIn;
        animation-delay: 0ms;
      }
      .par{
        animation-name: slideUp, fadeIn;
        animation-delay: 100ms;
      }
    }
  }
}
</style>