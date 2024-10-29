<script lang="ts">
  import WorkDetails from '$lib/pages/work-details/index.svelte'
  import type { WorkContent } from '$lib/data/works/types';
  export let data: WorkContent;
</script>

<svelte:head>
  <link rel="canonical" href={`https://jujiyangasli.com/works/${data.id}`} />
</svelte:head>

<WorkDetails work={data} />

