<script lang="ts">
  export let isOn: boolean = false
  export let jsEnabled: boolean = false
</script>


<button
  title={isOn?"close menu":"open menu"}
  on:click
  class={`menuButton ${isOn?'isOn':''} ${jsEnabled?'js':''}`}>
    <span></span>
    <span></span>
    <span></span>
</button>

<style lang="scss">

  .menuButton{

    display: none;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    transform-origin: center;
    z-index: 1000;
    scale: 1;

    &.js{
      display: flex;
    }


    &:active{
      scale: 0.9;
    }

    span{
      position: absolute;
      transform-origin: center;
      background-color: var(--text);

      height: 3px;
      width: 100%;
      border-radius: 3px;
      display: block;
      transition: all 300ms;
    }

    span:nth-child(1){
      transform: translateY(-8px);
    }

    span:nth-child(2){
      scale: 1;
      transform: translateY(0px);
    }

    span:nth-child(3){
      transform: translateY(8px);
    }

    // &:has(+ * + input:checked) {
    &.isOn {
      span{
        background-color: red;
      }

      span:nth-child(1){
        transform: translateY(0px) rotate(45deg);
      }

      span:nth-child(2){
        scale: 0;
        transform: translateY(0px);
      }

      span:nth-child(3){
        transform: translateY(0px) rotate(-45deg);
      }
    }
  }
</style>