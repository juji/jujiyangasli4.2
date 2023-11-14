<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import type { WorkContent } from "$lib/data/works/types";
  // import Lorsum from "$lib/components/lorsum.svelte";
  import SvelteMarkdown from 'svelte-markdown'
  import Link from './link.svelte'

  export let work:WorkContent;

  const {
    content,
    url,
    year
  } = work

  const urlText = url.replace(/https?\:\/\/(www\.)?/,'')

</script>

<div class={`text`}>
  <Container>
    <div class='content'>
      <p><a href={url} rel="noopener noreferrer" target="_blank">{urlText}</a></p>
      <p>Year: {year}</p>
      <br />
      <SvelteMarkdown source={work.content} />
      <!-- <Lorsum /> -->
    </div>
    <div class={`visible`}>
      <p><a href={url} rel="noopener noreferrer" target="_blank">{urlText}</a></p>
      <p>Year: {year}</p>
      <br />
      <SvelteMarkdown source={content} 
        renderers={{ link: Link }} 
      />
      <!-- <Lorsum /> -->
    </div>
  </Container>
</div>

<style lang="scss">
  @use './text';
</style>