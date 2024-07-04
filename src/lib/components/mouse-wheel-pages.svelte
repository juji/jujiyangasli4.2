<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {

    let scrollNumber = 0
    let disabled = false

    function onMouseWheel(event: WheelEvent){

      // scalling horizontally
      // event target is not window
      // smooth scroll detected
      if(!event.deltaY) return;
      if(event.currentTarget !== window) return;
      if(disabled) return;

      // if user is already using smooth scroll
      if(Math.abs(event.deltaY) < 2){
        disabled = true
        return;    
      }

      event.preventDefault()

      if(
        scrollNumber && (
        scrollNumber < 0 && event.deltaY > 0 || 
        scrollNumber > 0 && event.deltaY < 0 )
      ) scrollNumber = event.deltaY
      else scrollNumber += event.deltaY

      window.scrollBy(0, scrollNumber)
      setTimeout(() => {
        scrollNumber = 0
      },500)
    }

    window.addEventListener('wheel', onMouseWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', onMouseWheel)
    }

  })

</script>