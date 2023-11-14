
<script lang="ts">

  // @ts-ignore
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import IoClose from "svelte-icons-pack/io/IoClose";

  let nodeRef:HTMLDivElement;
  export let onRemove:null|(() => void) = null
  export let error = ''
  export let success = ''

  function remove(){
    onRemove && onRemove()
    nodeRef.parentNode && nodeRef.parentNode.removeChild(nodeRef)
  }
</script>
<div 
  bind:this={nodeRef}
  class:error={!!error} 
  class:success={!!success}>
  {error||success}
  <button 
    type="button"
    on:click={() => remove()}
  >
    <Icon src={IoClose} />
  </button>
</div>

<style lang="scss">

  div{

    padding: 0.5rem 1rem;
    border-radius: 5px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;

    &.error{
      background-color: #d53333;
      color: white;
    };

    &.success{
      background-color: #60c660;
      color: black;
    };

    button{
      margin: 0;
      padding: 0;
      margin-left: 1rem;
      background: transparent;
      border: 0;
      cursor: pointer;
      font-size: 2rem;
      opacity: 0.4;
      align-self: self-start;

      &:hover{
        opacity: 1;
      }

      &:active{
        opacity: 0.7;
      }
    }
  }

</style>

