<script lang="ts">
  import Image from '@urami/svelte'
  import { page } from '$app/stores'
  import type { TechItem } from '$lib/data/techs'

  export let item:TechItem
  export let animEnabled = false
  export let animRange = '5% 30%;'
  const { id, title, image, url, width, height } = item||{}

</script>


<a href={url}
  data-id={id}
  class={`cell ${animEnabled?'anim':''} noline`}
  style={`animation-range: ${animRange}`}
  title={title}
  aria-label={title} 
  target="_blank" rel="noopener noreferrer">
  <Image 
    src={$page.url.origin + image} 
    alt={title} 
    width={width}
    height={height}
    decoding="async"
    loading="lazy"
  />
</a>

<style lang="scss">
  @use './tech-cell';
</style>