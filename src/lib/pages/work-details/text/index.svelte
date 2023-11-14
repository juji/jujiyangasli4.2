<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import type { WorkContent } from "$lib/data/works/types";
  // import Lorsum from "$lib/components/lorsum.svelte";
  import SvelteMarkdown from 'svelte-markdown'
  import Link from './link.svelte'
	import { onMount } from "svelte";

  export let work:WorkContent;
  let observed: HTMLDivElement;
  let fixed = false;

  const {
    content,
    url,
    year
  } = work

  const urlText = url.replace(/https?\:\/\/(www\.)?/,'')

  onMount(() => {
    
    if(typeof IntersectionObserver === 'undefined') {
      return () => {}
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === observed) {
          fixed = entry.isIntersecting
        }
      })
    },{
      rootMargin: '1000% 0px 0px 0px'
    });

    observer.observe(observed);

    return () => {
      observer.disconnect()
    }

  })

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
    <div class={`visible`} class:fixed>
      <p><a href={url} rel="noopener noreferrer" target="_blank">{urlText}</a></p>
      <p>Year: {year}</p>
      <br />
      <SvelteMarkdown source={content} 
        renderers={{ link: Link }} 
      />
      <!-- <Lorsum /> -->
    </div>
    <div bind:this={observed}></div>
  </Container>
</div>

<style lang="scss">
  @use './text';
</style>