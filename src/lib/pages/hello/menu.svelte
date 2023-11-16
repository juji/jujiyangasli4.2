<script lang="ts">
  import { MenuList } from '$lib/data/menu'
</script>


<div class={'menu'}>
  {#each MenuList as menu}
    <a data-animation-id={menu.id} href={menu.href}>{menu.text}</a>
  {/each}
</div>


<style lang="scss">
  @use '$lib/sass/slideLeft';
  @use '$lib/sass/fadeIn';

  .menu{

    margin-top: 3rem;
    translate: 0 calc( 1px * var(--scroll-y) * var(--padding-bottom));

    a{
      animation-name: slideLeft, fadeIn;
      animation-duration: 500ms;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(.41,1.59,.71,1.11);
      /* animation-timing-function: cubic-bezier(.71,.46,.35,1.62); */
      margin-right: 1.5rem;
      display: inline-block;

      &[data-animation-id="works"]{
        animation-delay: calc(var(--base-anim-delay) + 500ms);
      }

      &[data-animation-id="techs"]{
        animation-delay: calc(var(--base-anim-delay) + 600ms);
      }

      &[data-animation-id="contact"]{
        animation-delay: calc(var(--base-anim-delay) + 700ms);
      }
    }

  }
</style>