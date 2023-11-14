<script lang="ts">
  // import { panzoom, type Options, type Point } from 'svelte-pan-zoom'
  // import Panzoom from '@panzoom/panzoom'
  // @ts-ignore
  import Zoom from 'svelte-zoom'
  import Portal from "svelte-portal";
  import Loader from './loader.svelte'
  import Container from '$lib/components/container.svelte';
  import { onMount } from "svelte";

  // @ts-ignore
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BsPlusSquare from "svelte-icons-pack/bs/BsPlusSquare";
  import BsDashSquare from "svelte-icons-pack/bs/BsDashSquare";
  import BsDice1 from "svelte-icons-pack/bs/BsDice1";
  import BsXLg from "svelte-icons-pack/bs/BsXLg";

  onMount(() => {
    const html = document.querySelector('html')
    html && html.classList.add('noScroll')
    return () => html && html.classList.remove('noScroll')
  })

  export let image: string
  export let onClose = () => {}

  const promise = new Promise<boolean>(resolve => {
    const img = new Image()
		img.onload = () => resolve(true)
    img.src = image
	})

  let zoom:any;
  let onZoomIn = () => {
    zoom && zoom.zoomIn()
  }
  let onZoomOut = () => {
    zoom && zoom.zoomOut()
  }
  let onZoomInit = () => { 
    for(let i=0;i<10;i++) // it's an estimate
      zoom && zoom.zoomOut()
  }

  let outro = false
  const onCloseLocal = () => {
    outro = true
    setTimeout(() => {
      onClose()
    },900)
  }

</script>

<Portal target="body">
<div class={`image-view-container`} class:outro>
  <div class="image">
    {#await promise}
      <Loader />
    {:then}
      <div class="image-content">
        <Zoom draggable={false} src={image} data-name="j-zoomable" alt="zoomable" bind:this={zoom} />
      </div>
    {/await}
  </div>
  <div class="controls">
    <Container>
      <div class="zoom">
        <button on:click={onZoomIn}><Icon src={BsPlusSquare} /></button>
        <button on:click={onZoomOut}><Icon src={BsDashSquare} /></button>
        <button on:click={onZoomInit}><Icon src={BsDice1} /></button>
      </div>
      <div>
        <button class="close" on:click={onCloseLocal}><Icon src={BsXLg} /></button>
      </div>
    </Container>
  </div>
</div>
</Portal>

<style lang="scss">

  @use '$lib/sass/fadeIn';
  @use '$lib/sass/fadeOut';
  @use '$lib/sass/slideUp';
  @use '$lib/sass/slideDown';

  div.image-view-container{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    z-index: 100;
    background: var(--image-view-bg);

    animation-name: fadeIn;
    animation-duration: 300ms;
    animation-fill-mode: both;

    .image{
      user-select: none;
      touch-action: none;
      overscroll-behavior: none; 
      -webkit-user-select: none; 
      -webkit-touch-callout: none; 
      box-sizing: border-box;

      animation-name: slideDown, fadeIn;
      animation-duration: 500ms;
      animation-delay: 600ms;
      animation-fill-mode: both;

      .image-content{
        width: 100%;
        height: 100%;
        position: relative;
        
        animation-name: slideDown, fadeIn;
        animation-duration: 500ms;
        animation-delay: 800ms;
        animation-fill-mode: both;

        :global(img) {
          cursor: grab;
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
          display: block;
          z-index: 1000;
          &:active{
            cursor: grabbing;
          }
        }
      }

    }

    .controls{
      position: relative;
      z-index: 1001;
      background-color: var(--bg);
      padding: 1rem 2rem;
      animation-name: slideUp, fadeIn;
      animation-duration: 300ms;
      animation-delay: 300ms;
      animation-fill-mode: both;

      &>:global(.container){
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button{
        color: var(--blue);
        display: block;
        margin: 0;
        padding:0;
        border: 0;
        background: transparent;
        font-size: 1.6rem;
        cursor: pointer;
        &:active{
          scale:0.8;
        }
      }

      button.close{
        color: red;
      }

      .zoom{
        display: flex;
        button{
          margin-right: 1rem;
        }
      }
    }


    &.outro{
      animation-name: fadeOut;
      animation-duration: 300ms;
      animation-delay: 600ms;
      animation-fill-mode: both;
      

      .image{
        animation-name: slideDownBackward, fadeOut;
        animation-duration: 300ms;
        animation-delay: 0ms;
        animation-fill-mode: both;
      }

      .controls{
        animation-name: slideUpBackward, fadeOut;
        animation-duration: 300ms;
        animation-delay: 300ms;
        animation-fill-mode: both;
      }
    }
  }
</style>