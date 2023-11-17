<script lang="ts">
	import { onNavigate } from "$app/navigation";


  let loading = false;
  let percent = '0%';
  let cover = false;

  let to: ReturnType<typeof setTimeout>;

  onNavigate((navigation) => {
    
    loading = true
    percent = '72%'

    return new Promise(async (resolve) => {
      resolve()

      if(to) clearTimeout(to)
      to = setTimeout(() => {
        cover = true
      }, 1000)

      await navigation.complete;

      percent = '100%'
      clearTimeout(to)
      cover = false
      loading = false
      setTimeout(() => {
        percent = '0%'
      },500)
    })
  });

</script>


<div 
  class="loading-indicator"
  class:loading
  class:cover
  style={`--loading-percent: ${percent}`}
></div>

<style lang="scss">

  @keyframes gradient { 
    0%   { background-position: 0 0; }
    100% { background-position: -200% 0; }
  }

  .loading-indicator{

    --loading-percent: 0%;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 1000;
    opacity: 0;
    transition: opacity 200ms ease-out;

    &::before{
      content: ' ';
      position: fixed;
      top:0;
      left:0;
      width: 0%;
      height: 0%;
      z-index: 999;
      background-color: black;
      opacity: 0;
      transition: opacity 200ms ease-out;
    }

    &::after{
      content: ' ';
      position: fixed;
      top:0;
      left:0;
      width: var(--loading-percent);
      height: 2px;
      background: rgb(0,97,196);
      background: radial-gradient(circle, rgba(76,181,255,1) 0%, rgba(0,97,196,1) 37%);
      transition: width 250ms ease-out;
      z-index: 1000;
      background-size: 200% auto;
      background-position: 0 100%;
    }

    &.cover{
      &::before{
        width: 100%;
        height: 100%;
        opacity: 0.64;
      }
    }

    &.loading{
      opacity: 1;
      &::after{
        animation: gradient 500ms infinite ease-out;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
      }
    }

  }
</style>