<script lang="ts">
	// import { onMount } from 'svelte';
  import Menu from './menu.svelte'
  import '@fontsource-variable/source-code-pro';

  // let scrollY:number;
  let innerHeight: number;
  // let scroll = 0;
  let last: HTMLDivElement;
  let paddingBottom:number;

  $: if(innerHeight){
    const lastRect = last.getBoundingClientRect()

    paddingBottom = Math.max(
      0,
      lastRect.height
    )
    
  }

  // $: scroll = Math.min(scrollY/innerHeight, 1) ?? 0

  // onMount(() => {
  //   console.log('onmount')
  // })

</script>

<svelte:window bind:innerHeight />

<div 
  class={'hello'}
  style={`--window-height: ${innerHeight??0}px; --padding-bottom: ${paddingBottom??0}`}
  id="home">
  <!-- <img 
    src="https://1.gravatar.com/avatar/afb41904b6697862a2efc69237ebba4823dd73b5e07108b774656ddc667fb4ea?size=512"
    alt="juji"
    width="512"
    height="512"
    class="my-image"
    title="the supposedly required face image"
  /> -->
  <div class="hello-content">
    <p class={`hellobig`}>Hello,</p>
    <h1>
      <span class={'p1'}><span>My name is Tri Rahmat Gunadi,</span></span>
      <span class={'p2'}><span>but people call me <a 
        title="Github Link"
        rel='noreferrer noopener'
        target="_blank"
        href='https://github.com/juji'
        class={'juji'}>juji</a>.</span></span>
        <span class={'p3'}><span>I am a web developer.</span></span>
      </h1>
      <br />
      <div id="smiley" class={'smiley'}><span>;)</span></div>
      <Menu />
  </div>
  <div class="hello-gap" bind:this={last}>
  </div>
</div>

<style lang="scss">
  @use "./index.scss";
</style>