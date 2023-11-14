<script lang="ts">
  import WorkDetails from '$lib/pages/work-details/index.svelte'
  import type { WorkContent } from '$lib/data/works/types';
  export let data: WorkContent;
</script>


<WorkDetails work={data} />

