<script lang="ts">
  // @ts-ignore
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import RiBusinessMailOpenFill from "svelte-icons-pack/ri/RiBusinessMailOpenFill";
  import RiDesignPencilFill from "svelte-icons-pack/ri/RiDesignPencilFill";
  import RiBuildingsHomeFill from "svelte-icons-pack/ri/RiBuildingsHomeFill";
  import RiDevelopmentTerminalBoxFill from "svelte-icons-pack/ri/RiDevelopmentTerminalBoxFill";
  import RiDeviceGamepadFill from "svelte-icons-pack/ri/RiDeviceGamepadFill";
  import { MenuList } from "$lib/data/menu";

  const menuIcon:{[key: string]: any} = {
    works: RiDesignPencilFill,
    play: RiDeviceGamepadFill,
    techs: RiDevelopmentTerminalBoxFill,
    contact: RiBusinessMailOpenFill
  }
</script>

<div class="menuBottomNoscript">
  <a href="/#home">
    <Icon src={RiBuildingsHomeFill} size="1.618rem" />
  </a>
  {#each MenuList as menu}
    {#if menuIcon[menu.id]}
      <a 
        href={menu.href}
        target={menu.newTab?'_blank':''}
        rel="noreferer noopener"
      >
        <Icon src={menuIcon[menu.id]} size="1.618rem" />
      </a>
    {/if}
  {/each}
</div>

<style lang="scss">
.menuBottomNoscript{
  border-top: 1px solid #222222;
  background-color: black;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  a{
    text-align: center;
    padding: 1rem 0;
  }

  @media screen and (min-width: 512px) {
    display: none;
  }
}
</style>