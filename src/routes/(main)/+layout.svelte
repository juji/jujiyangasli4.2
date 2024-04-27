<script lang="ts">
	import Container from '$lib/components/container.svelte';
</script>



<!-- How to comment out attributes -->
<main
  {...{/* this is a cpmment for attributes */}}
  {...{/* 
    you can have multi line comment
  */}}
>
  <Container>
    <slot/>
  </Container>
</main>


<style>
  main{
    flex: 1 1 auto;
    padding-left: var(--pad-x);
    padding-right: var(--pad-x);
  }
</style>
