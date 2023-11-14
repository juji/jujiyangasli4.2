<script>
  import Menu from './menu.svelte'
  import '@fontsource-variable/source-code-pro';
</script>

<div class={'hello'} id="home">
  <!-- <img 
    src="https://1.gravatar.com/avatar/afb41904b6697862a2efc69237ebba4823dd73b5e07108b774656ddc667fb4ea?size=512"
    alt="juji"
    width="512"
    height="512"
    class="my-image"
    title="the supposedly required face image"
  /> -->
  <p class={`hellobig`}>Hello,</p>
  <h1>
    <span class={'p1'}>My name is Tri Rahmat Gunadi,</span>
    <span class={'p2'}>but people call me <a 
        title="Github Link"
        rel='noreferrer noopener'
        target="_blank"
        href='https://github.com/juji'
        class={'juji'}>juji</a>.</span>
    <span class={'p3'}>I am a web developer.</span>
  </h1>
  <br />
  <div id="smiley" class={'smiley'}>;)</div>
  <Menu />
</div>

<style lang="scss">
  @use "./index.scss";
</style>