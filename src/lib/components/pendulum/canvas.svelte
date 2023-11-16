<script lang="ts">
	import { onMount } from 'svelte';
  import PendulumFn, { type PendulumImage } from './double-pendulum'

  export let setImage = (src: PendulumImage) => {}
  export let started:string

  let canvas: HTMLCanvasElement
  let additionalHeight:number = 140
  let pendulum:any|null = null

  onMount(() => {

    pendulum = PendulumFn({
      additionalHeight,
      canvas,
      started,
      callback: (image: PendulumImage, ts: string) => {
        if(ts === started) setImage(image)
      }
    })

    return () => {
      pendulum.stop && pendulum.stop()
    }
  })

</script>

<canvas bind:this={canvas} id="pendulumCanvas"></canvas>
