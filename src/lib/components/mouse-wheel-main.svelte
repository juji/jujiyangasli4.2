<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {

    let scrollNumber = 0
    let disabled = false

    const works = document.querySelector('#works') as HTMLDivElement
    const play = document.querySelector('#play') as HTMLDivElement
    const techs = document.querySelector('#techs') as HTMLDivElement
    const contact = document.querySelector('#contact') as HTMLDivElement

    function onMouseWheel( event: WheelEvent ){
      if(!event.deltaY) return;

      event.preventDefault()

      if(event.deltaY > 0){

        if(window.scrollY < works.offsetTop){
          window.scrollTo(0, works.offsetTop)
          return;
        }

        if(
          (window.scrollY + window.innerHeight) > 
          (works.offsetHeight + works.offsetTop) &&
          (works.offsetHeight + works.offsetTop) > window.scrollY
        ){
          window.scrollTo(0, play.offsetTop)
          return;
        }

      }else{

        if(window.scrollY <= works.offsetTop){
          event.preventDefault()
          window.scrollTo(0, 0)
          return;
        }

      }



      if(disabled) return;

      // 
      // prevent when smooth scroll is enabled
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
      
      if(window.scrollY === (works.offsetTop+1) && event.deltaY < 0 ){
        window.scrollTo(0, 0)

      }else if((window.scrollY + scrollNumber) <= window.innerHeight){
        window.scrollTo(0, works.offsetTop+1)

      }else{
        window.scrollBy(0, scrollNumber)
      }

      setTimeout(() => {
        scrollNumber = 0
      },300)  
    }

    window.addEventListener('wheel', onMouseWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', onMouseWheel)
    }

  })

</script>