<script lang="ts">
  import { MenuList } from '$lib/data/menu'
  export let noScroll = false
</script>


<div class={'menu'} class:noScroll >
  {#each MenuList as menu}
    <a data-animation-id={menu.id} href={menu.href}>{menu.text}</a>
  {/each}
</div>


<style lang="scss">
  @use '$lib/sass/slideLeft';
  @use '$lib/sass/fadeIn';

  .menu{

    @keyframes pScroll {
      0%{
        translate: 0 0;
      }
      100%{
        translate: 0 calc(var(--scroll-ratio) * var(--padding-bottom))
      }
    }

    --scroll-ratio: 1px;
    margin-top: 3rem;
    animation-name: pScroll;
    animation-timeline: scroll();
    animation-range: 0px var(--window-height);
    /* translate: 0 calc( 1px * var(--scroll-y) * var(--padding-bottom)); */

    &.noScroll{
      translate: 0 calc( var(--scroll-ratio) * var(--scroll-y) * var(--padding-bottom));
    }


    a{
      animation-name: slideLeft, fadeIn;
      animation-duration: 500ms;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(.41,1.59,.71,1.11);
      /* animation-timing-function: cubic-bezier(.71,.46,.35,1.62); */
      margin-right: 1rem;
      margin-bottom: 1rem;
      display: inline-block;

      &[data-animation-id="works"]{
        animation-delay: calc(var(--base-anim-delay) + 500ms);
      }

      &[data-animation-id="play"]{
        animation-delay: calc(var(--base-anim-delay) + 600ms);
      }

      &[data-animation-id="techs"]{
        animation-delay: calc(var(--base-anim-delay) + 700ms);
      }

      &[data-animation-id="contact"]{
        animation-delay: calc(var(--base-anim-delay) + 800ms);
      }
    }

  }
</style>