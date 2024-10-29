<script>
  import Hello from '$lib/pages/hello/index.svelte'
  import Works from '$lib/pages/works/index.svelte'
  import Play from '$lib/pages/play/index.svelte'
  import Techs from '$lib/pages/techs/index.svelte'
  import Contact from '$lib/pages/contact/index.svelte'

  export let data;
</script>

<svelte:head>
  <link rel="canonical" href="https://jujiyangasli.com/" />
</svelte:head>

<Hello />
<Works works={data.works} />
<Play data={data.play} />
<Techs />
<Contact />

