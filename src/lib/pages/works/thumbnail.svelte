<script lang="ts">
  import type { WorkSingle } from "$lib/data/works/types";
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";
  import Image from '@urami/svelte'
  import { page } from '$app/stores'

  export let work:WorkSingle;
  export let paused = false
  export let visible = false
  export let animationDelay = 0
  
  const { 
    id,
    title,
    logo,
    image
  } = work

  const options = {
    reverse: false,
    scale: 1.08,
    speed: 700,
    max: 5,
    glare: true,
    "max-glare": 0.6,

    gyroscope: false, // just to be sure
    // gyroscopeMinAngleX: -36000,
    // gyroscopeMaxAngleX: 36000,
    // gyroscopeMinAngleY: -36000,
    // gyroscopeMaxAngleY: 36000
  };
  
  const elementId = `works/${id}`
  const href = `/${elementId}`
  let anchor:HTMLAnchorElement;
  let isTouch = false;

  onMount(() => {
    isTouch = (
      window.matchMedia(`(hover: none)`) &&
      window.matchMedia(`(hover: none)`).matches === true
    )

    if(isTouch) return () => {}

    VanillaTilt.init(anchor, options);
    return () => {
      // @ts-ignore
      anchor.vanillaTilt && anchor.vanillaTilt.destroy()
    }
  })

  const thumbnailClick = () => {
    sessionStorage.setItem('last-work', id)
  }

</script>
<div 
  class={`container`}
  class:paused
  class:visible
  style={`animation-delay: ${visible ? animationDelay : 0}ms`}
  >
    <a href={href}
      bind:this={anchor} 
      on:click={thumbnailClick}
      class={`workThumbnail`} 
      title={title} 
      data-id={id}
      id={elementId}
    >
      <div class="image">
        <Image 
          decoding="async"
          loading="lazy"
          style={`view-transition-name: ${id}`}
          src={$page.url.origin + image.thumbnail}
          alt={title}
          width={image.dimension.thumb.width}
          height={image.dimension.thumb.height} />
      </div>
      <span class={'shadow'}>
        <img src={logo.url}
          decoding="async"
          loading="lazy"
          alt={title}
          width={logo.width}
          height={logo.height} />
      </span>
      <span class={'label'}>
        <img src={logo.url}
          alt={title}
          decoding="async"
          loading="lazy"
          width={logo.width}
          height={logo.height} />
      </span>
    </a>
  </div>

<style lang="scss">
  @use './thumbnail';
</style>