<script lang="ts">
	import Container from '$lib/components/container.svelte';
</script>



<main>
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
