<script>
  import { animEnabled } from "$lib/stores/anim-enabled";
  import MenuButton from "./button.svelte";
  import MenuContent from "./content.svelte";

  let isOn = false
  const onClickMenu = () => {
    isOn = !isOn
    changeHtml()
  }

  const onClickItem = () => {
    isOn = false
    changeHtml()
  }

  function changeHtml(){
    const html = document.querySelector('html')
    if(!html) return;
    if(isOn) html.classList.add('noScroll')
    else html.classList.remove('noScroll')
  }

</script>

<nav class={`menu ${!$animEnabled.js?'nojs':''}`}>
  <MenuButton 
    jsEnabled={$animEnabled.js}
    isOn={isOn} 
    on:click={onClickMenu} />
  <MenuContent 
    jsEnabled={$animEnabled.js}
    isOn={isOn} 
    on:click={onClickItem} 
  />
</nav>

<style lang="scss">
  .menu{
    position: relative;
    display: inline-block;
    width: 34px;
    height: 34px;
    // border: 1px solid red;
  
    &.nojs{
      width: auto;
      display: none;
      align-items: center;
      @media screen and (min-width: 420px) {
        display: flex;
      }
    }

  }
</style>