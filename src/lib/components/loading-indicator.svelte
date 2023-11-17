<script lang="ts">
	import { onNavigate } from "$app/navigation";


  let loading = false;
  let percent = '0%';

  onNavigate((navigation) => {
    
    loading = true
    percent = '60%'

    return new Promise(async (resolve) => {
      resolve()
      await navigation.complete;
      percent = '100%'
      setTimeout(() => {
        loading = false
        percent = '0%'
      },500)
    })
  });

</script>


<div 
  class="loading-indicator"
  class:loading
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
    width: var(--loading-percent);
    height: 2px;
    background: rgb(0,97,196);
    background: radial-gradient(circle, rgba(47,170,255,1) 0%, rgba(0,97,196,1) 50%);
    opacity: 0;
    transition: width 200ms ease-out, opacity 100ms ease-out;
    z-index: 1000;
    background-size: 200% auto;
    background-position: 0 100%;
    animation: gradient 500ms infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;

    &.loading{
      opacity: 1;
    }
  }
</style>