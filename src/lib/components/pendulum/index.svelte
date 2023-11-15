<script lang="ts">
  import { animEnabled } from '$lib/stores/anim-enabled';
  import PendulumFn, { type PendulumImage } from './double-pendulum'
  import { page } from '$app/stores';
	import { onMount } from 'svelte';


  let scrollY = 0
  let img:PendulumImage|null = null
  let started:string|null = null
  let bgOn = true
  let windowWidth = 0
  let windowHeight = 0
  let canvas: HTMLCanvasElement|null = null
  let pendulum:any|null = null
  let pendulumElm:HTMLDivElement
  let pendulumInside:HTMLDivElement
  let additionalHeight:number = 140
  let isTouch = false

  onMount(() => {
    isTouch = (
      window.matchMedia(`(hover: none)`) &&
      window.matchMedia(`(hover: none)`).matches === true
    )
  })

  
  $: bgOn = $page.url.pathname !== '/' || scrollY > 42
  // console.log($page.url.pathname, bgOn)

  let timeout:ReturnType<typeof setTimeout>|null = null

  $: if(
    windowWidth > 0 || (
      !isTouch && windowHeight > 0
    )
  ){
    img = null
    started = null
    canvas = null
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      started = new Date().toISOString()
    },500)
  }

  $: if(canvas){

    // additionalHeight = 140
    // additionalHeight = Number(
    //   getComputedStyle(pendulumElm)
    //   .getPropertyValue('--additional-height').replace(/px/,'')
    // )

    pendulum = PendulumFn({
      additionalHeight,
      canvas,
      started: started as string,
      callback: (image: PendulumImage, ts: string) => {
        if(ts === started) img = image
      }
    })
  }

  $: if(!canvas && pendulum){
    pendulum.stop && pendulum.stop()
  }

  $: if(additionalHeight){
    // @ts-ignore
    if(typeof ScrollTimeline === 'undefined'){

      pendulumInside.style.setProperty(
        'translate', '0 var(--pendulum-top)'
      )

      document.addEventListener('scroll', () => {
  
        const pendulumTop = additionalHeight * (
          window.scrollY / (
            document.documentElement.scrollHeight - 
            document.documentElement.offsetHeight
          )
        ) * -1;
  
        pendulumElm.style.setProperty(
          '--pendulum-top', 
          pendulumTop + 'px'
        )
      })
    }
  }

  // onMount(() => {
    
  // })


</script>

<svelte:window 
  bind:scrollY={scrollY} 
  bind:innerWidth={windowWidth} 
  bind:innerHeight={windowHeight} 
/>
<div bind:this={pendulumElm}
  class={`${'pendulum'} ${!$animEnabled?'nojs':''}`} 
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

  
  <div class={'inside'} bind:this={pendulumInside}>
    {#if img}
      <img 
      src={img.src} 
      height={img.height} 
      width={img.width} 
      alt="pendulum" />
    {:else if started}
      <canvas bind:this={canvas} id="pendulumCanvas"></canvas>
    {/if}
  </div>

  
</div>

<style lang="scss">
  @use './pendulum';
</style>