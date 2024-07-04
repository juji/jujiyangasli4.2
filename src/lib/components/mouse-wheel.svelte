<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {

    let scrollNumber = 0
    window.addEventListener('wheel',( event ) => {
      event.preventDefault()

      console.log(event.deltaY, window.scrollY < window.innerHeight)
      const works = document.querySelector('#works') as HTMLDivElement

      if(window.scrollY <= window.innerHeight && event.deltaY > 0){
        window.scrollTo(0, works.offsetTop+1)
        return;
      }

      if(window.scrollY <= window.innerHeight && event.deltaY < 0){
        window.scrollTo(0, 0)
        return;
      }

      scrollNumber += event.deltaY
      if((window.scrollY + scrollNumber) <= (window.innerHeight/2)){
        window.scrollTo(0, 0)

      }else if((window.scrollY + scrollNumber) <= window.innerHeight){
        window.scrollTo(0, works.offsetTop+1)

      }else{
        window.scrollBy(0, scrollNumber)
        
      }

      setTimeout(() => {
        scrollNumber = 0
      },300)
    }, { passive: false })

  })

</script>