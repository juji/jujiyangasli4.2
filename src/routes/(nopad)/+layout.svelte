<!-- <script lang="ts">
	import Container from '$lib/components/container.svelte';
</script> -->

<main>
  <slot/>
</main>

<style>
  main{
    flex: 1 1 auto;

    /* display: grid;
    grid-template-columns: 
      [full-width-start] 
      var(--pad-x) 
      [content-start] 1fr [content-end]
      var(--pad-x)
      [full-width-end]; */

    
  }
</style>
