<script lang="ts">
  import TitleLink from "$lib/components/title-link.svelte";
  import TechCell from "./tech-cell.svelte";
  import { techs } from "$lib/data/techs";

  // redeploy
</script>

<div 
  class={`tech`} 
  class:anim={true}
  id="techs">

  <h2 class={`h1`} >
    Technologies
    <TitleLink href="/#techs" label="Techs" />
  </h2>
  <p class={`par`}>Things I play with</p>

  {#each techs as group}
    <div class={'techRow'}>
      {#each group as tech, i}
        <TechCell
          item={tech}
          animEnabled={true}
          animRange={`${5+(i*4)}% ${20+(i*4)}%`}
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
  
  h2{
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
    h2{
      animation-name: slideUp, fadeIn;
      animation-timeline: view();
      animation-range: 18% 33%;
      animation-fill-mode: both;
    }
    .par{
      animation-name: slideUp, fadeIn;
      animation-timeline: view();
      animation-range: 20% 35%;
      animation-fill-mode: both;
    }
  }
}
</style>