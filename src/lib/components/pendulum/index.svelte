<script lang="ts">
  import Canvas from './canvas.svelte'
  import { page } from '$app/stores';
  import type { PendulumImage } from './double-pendulum'
	import { onMount } from 'svelte';


  let img:PendulumImage|null = null
  let started:string|null = null
  let isTouch = false

  let bgOn = true
  let scrollY = 0
  let windowWidth = 0
  let windowHeight = 0
  let timeout:ReturnType<typeof setTimeout>|null = null

  function setImage(pendulumImg:PendulumImage){
    img = pendulumImg
  }

  onMount(() => {
    isTouch = (
      window.matchMedia(`(hover: none)`) &&
      window.matchMedia(`(hover: none)`).matches === true
    )

    // started = new Date().toISOString()
    // timeout = setTimeout(() => {
    // },500)
  })

  $: bgOn = $page.url.pathname !== '/' || scrollY > 42


  $: if(
    windowWidth > 0 || (
      !isTouch && windowHeight > 0
    )
  ){
    img = null
    started = null
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      started = new Date().toISOString()
    },500)
  }

  // $: if(additionalHeight){
  //   // @ts-ignore
  //   if(typeof ScrollTimeline === 'undefined'){

  //     pendulumInside.style.setProperty(
  //       'translate', '0 var(--pendulum-top)'
  //     )

  //     document.addEventListener('scroll', () => {
  
  //       const pendulumTop = additionalHeight * (
  //         window.scrollY / (
  //           document.documentElement.scrollHeight - 
  //           document.documentElement.offsetHeight
  //         )
  //       ) * -1;
  
  //       pendulumElm.style.setProperty(
  //         '--pendulum-top', 
  //         pendulumTop + 'px'
  //       )
  //     })
  //   }
  // }

  // onMount(() => {
    
  // })


</script>

<svelte:window 
  bind:scrollY={scrollY} 
  bind:innerHeight={windowHeight}
  bind:innerWidth={windowWidth}
/>

<div
  class={`${'pendulum'}`} 
  id="pendulum">
        
  <div class={`${'bg'} ${bgOn?'on':''}`}></div>
  <noscript>
    <img class={'noscript'} 
      src={'/images/pendulum.png'} 
      height={1440}
      width={911}
      alt="pendulum"
    />
  </noscript>

  
  <div class={'inside'}>
    {#if img}
      <img 
      src={img.src} 
      height={img.height} 
      width={img.width} 
      alt="pendulum" />
    {:else if started}
      <Canvas started={started} setImage={setImage} />
    {/if}
  </div>

  
</div>

<style lang="scss">
  @use './pendulum';
</style>