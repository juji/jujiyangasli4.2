<script lang="ts">
  import MouseWheel from '$lib/components/mouse-wheel-pages.svelte';
</script>

<MouseWheel />
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
