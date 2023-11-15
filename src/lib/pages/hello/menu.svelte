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
    translate: 0 calc( 0.3px * var(--scroll-y));
    @media screen and (max-height: 723px) {
      translate: 0 calc( 0.26px * var(--scroll-y));
    }

    @media screen and (max-height: 684px) {
      translate: 0 calc( 0.22px * var(--scroll-y));
    }

    @media screen and (max-height: 651px) {
      translate: 0 calc( 0.18px * var(--scroll-y));
    }

    @media screen and (max-height: 619px) {
      translate: 0 calc( 0.14px * var(--scroll-y));
    }

    a{
      animation-name: slideLeft, fadeIn;
      animation-duration: 450ms;
      animation-fill-mode: both;
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