<script lang="ts">

  import TitleLink from "$lib/components/title-link.svelte";
  import type { Play } from "$lib/data/play/types";
  import { onMount } from "svelte";

  export let data:Play[];
  let anim = false
  let visible = false
  let observed: HTMLDivElement

  onMount(() => {
    
    anim = true

    if(typeof IntersectionObserver === 'undefined') {
      return () => {}
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === observed) {
          visible = entry.isIntersecting
        }
      })
    },{
      rootMargin: '1000% 0px -10% 0px'
    });

    observer.observe(observed);

    return () => {
      observer.disconnect()
    }

  })

/**
bind:this={observed}
class:anim
class:visible
*/
</script>
<div 
  id="play" class={`play`}
  bind:this={observed}
  class:anim
  class:visible
>

  <div class="title">
    <h2>Play <TitleLink href="/#play" label="Play" /></h2>
    <p>On my leisure time: <a 
      target="_blank" rel="noopener noreferrer"
      href="https://jujiplay.com">jujiplay.com</a></p>
  </div>

  <div class="play-thumbnails">
    {#each data as play, i }
      <a href={play.url} 
        class={`play${play.id}`}
        target="_blank" rel="noopener noreferrer">
        <img src={play.image} alt={play.title} />
        <p>{play.title}</p>
      </a>
    {/each}
  </div>
</div>

<style>

.play{

  --transition-delay: 100ms;
  padding-top: var(--pad-top-page);

  & > .title{
    padding-top: 3rem;
    margin-bottom: 3rem;

    & h2, & p{
      transition: translate 200ms, opacity 200ms;
    }

    & h2{
      transition-delay: var(--transition-delay);
    }

    & p{
      transition-delay: calc(var(--transition-delay) * 2);
    }
  }

  & .play-thumbnails{
    display: grid;
    grid-template-columns: 1fr;
    gap: 21px;

    & a{
      transition: translate 200ms, opacity 200ms;
      display: block;
      overflow: hidden;
      border: 1px solid rgb(53, 53, 53);
      border-radius: 5px;
      position: relative;
      background-color: black;

      &.playBoid{
        transition-delay: calc(var(--transition-delay) * 3);
      }

      &.playCliffordDejong{
        transition-delay: calc(var(--transition-delay) * 4);
      }

      &.playCircularOrbit{
        transition-delay: calc(var(--transition-delay) * 5);
      }

      & > p {
        position:absolute;
        bottom: 0px;
        right: 0px;
        padding: 0.5rem 1rem;
        border-top-left-radius: 0.5rem;
        background: rgba(0,0,0,0.3);
        color: #00ccc9;
        border-left: 1px solid rgb(53, 53, 53);
        border-top: 1px solid rgb(53, 53, 53);
      }

      & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
        transition: scale 2000ms;
      }

      &:hover{
        outline: 2px solid #00ccc9;
        & > img {
          scale: 2;
        }
      }

      &:active{
        outline: 2px solid #009d9a;
        & > img {
          scale: 1;
        }
      }

    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &.anim{

    & .title{
      & h2{
        translate: 0px 21px;
        opacity: 0;
      }

      & p{
        translate: 0px 21px;
        opacity: 0;
      }
    }

    & .play-thumbnails{
      & a{
        translate: 0px 21px;
        opacity: 0;
      }
    }

    &.visible{
      & .title{
        & h2{
          translate: 0px 0px;
          opacity: 1;
        }

        & p{
          translate: 0px 0px;
          opacity: 1;
        }
      }

      & .play-thumbnails{
        & a{
          translate: 0px 0px;
          opacity: 1;
        }
      }
    }

  }

}
</style>