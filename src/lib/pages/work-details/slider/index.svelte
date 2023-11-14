<script lang="ts">
  import ImageView from '../image-view/index.svelte'
  import type { SliderImage } from './slider-image'
  import { onMount } from 'svelte';
  import Image from '@urami/svelte';
  import { page } from '$app/stores'
  
  export let images: SliderImage[];
  let activeImage:SliderImage|null = null

  let slide = 0;
  let slider:HTMLDivElement;
  let sliderContent:HTMLDivElement;
  let inter: ReturnType<typeof setInterval>|null = null;

  const startSlider = () => {
    if(inter) clearInterval(inter)
    inter = setInterval(() => {
      if(slide === images.length-1) slide = 0
      else slide += 1
    },5000)
  }

  // auto start
  $: {
    slider ? slider.scrollTo({
      top: 0,
      left: slide * window.innerWidth,
      behavior: 'auto'
    }) : null
  }

  let startTimeout:ReturnType<typeof setTimeout>;
  function stopSlider(){
    inter && clearInterval(inter)
    startTimeout && clearTimeout(startTimeout)
  }

  function resumeSlider(timeout = true){
    if(startTimeout) clearTimeout(startTimeout)
    slide = Math.round(
      slider.scrollLeft / (
        sliderContent.clientWidth / images.length
      )
    )

    if(timeout){
      startTimeout = setTimeout(() => {
        startSlider()
      },10000)
    } else startSlider()
  }

  const setZoom = (image:SliderImage) => () => {
    activeImage = image
    stopSlider()
  }

  const closeImageView = () => {
    activeImage = null
    resumeSlider( false )
  }

  onMount(() => {
    startSlider()
    return () => {
      inter && clearInterval(inter)
      startTimeout && clearTimeout(startTimeout)
    }
  })

</script>

<div bind:this={slider} 
  on:touchmove={stopSlider} 
  on:touchend={() => resumeSlider()} class="slider">
  <div class="slide">
    <div bind:this={sliderContent} class="slide-content" style={`width: ${images.length*100}%`}>
      {#each images as image,i}  
        <a 
          on:click|preventDefault={setZoom(image)} 
          href={image.original.url} target="_blank">
          <Image 
            draggable={false} 
            src={$page.url.origin + image.thumbnail.url}
            style={i?`animation-delay: ${i*500}ms`:`view-transition-name: ${image.id}`}
            alt={image.title}
            width={image.thumbnail.width}
            height={image.thumbnail.height} />
        </a>
      {/each}
    </div>
  </div>
</div>

{#if activeImage}
  
<ImageView 
  image={activeImage.original.url}
  onClose={closeImageView}
/>
{/if}

<style lang="scss">
  @use './slider';
</style>