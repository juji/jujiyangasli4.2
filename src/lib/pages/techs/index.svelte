<script>
  import TitleLink from "$lib/components/title-link.svelte";
  import TechCell from "./tech-cell.svelte";
  import { techs } from "$lib/data/techs";
</script>

<div 
  class={`tech`} 
  id="techs">

  <h1 class={`h1`} >
    Technologies
    <TitleLink href="/#techs" />
  </h1>
  <p class={`par`}>Things I play with</p>

  {#each techs as group}
    <div class={'techRow'}>
      {#each group as tech, i}
        <TechCell
          item={tech}
          animationDelay={300 + (i * 100)}
        />
      {/each}
    </div> 
  {/each}

</div>

<style lang="scss">
@use '$lib/sass/fadeIn';
@use '$lib/sass/fadeOut';
@use '$lib/sass/slideUp';

.tech{

  padding-top: var(--pad-top-page);
  /* padding-bottom: 5rem; */
  
  h1{
    padding-top: 3rem;
  }

  .par{
    margin-bottom: 4rem;
  }


  .techRow{
    margin-bottom: 1rem;

    &:last-child{
      margin-bottom: 0rem;
    }
  }

  &.anim{
    h1{
      animation-name: slideUpBackward, fadeOut;
      animation-duration: 400ms;
      animation-fill-mode: both;
      animation-delay: 500ms;
    }
    .par{
      animation-name: slideUpBackward, fadeOut;
      animation-duration: 400ms;
      animation-delay: 700ms;
      animation-fill-mode: both;
    }

    &.visible{
      h1{
        animation-name: slideUp, fadeIn;
      }
      .par{
        animation-name: slideUp, fadeIn;
      }
    }
  }
}
</style>