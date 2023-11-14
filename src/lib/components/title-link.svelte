<script>
  // @ts-ignore
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import ImLink from "svelte-icons-pack/im/ImLink";
  export let href = '/#';
</script>

<a href={href}><Icon src={ImLink} /></a>

<style lang="scss">
  a{
    font-size: 1.3rem;
    margin-left: 0.8rem;
    /* margin-bottom: 3px; */
    position: relative;
    top: -3px;
    :global(svg), :global(svg path){
      fill: var(--blue);
    }
  }
</style>