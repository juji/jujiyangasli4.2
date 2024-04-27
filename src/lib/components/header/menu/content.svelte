<script>
  import { MenuList } from '$lib/data/menu'
  export let jsEnabled = false
  export let isOn = false

</script>

<div class={`menuContent ${!jsEnabled?'nojs':''} ${isOn?'isOn':''}`}>
  <div>
    <div>
      <h3>Menu</h3>
        <span data-animation-id={'home'}>
          <a on:click href={'/#home'}>Home</a>
        </span>
      {#each MenuList as menu}
        <span data-animation-id={menu.id}>
          <a on:click 
            href={menu.href}
            target={menu.newTab?'_blank':''}
            rel="noreferer noopener"
          >{menu.text}</a>
        </span>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @keyframes gridShow {
    0%{
      opacity: 0;
      grid-template-columns: 0fr;
    }
    50%{
      opacity: 0;
      grid-template-columns: 1fr;
    }
    100%{
      opacity: 1;
      grid-template-columns: 1fr;
    }
  }


.menuContent{

  // --transition-delay-header
  --tdh: 300ms;
  // --transition-delay-gap
  --tdg: 100ms;

  position: fixed;
  top:0;
  width: 100%;
  height: 100vh;
  z-index: 500;
  left:100%;
  
  &:before{
    content: '';
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    /* backdrop-filter: blur(10px);
    background-color: rgba(0,0,0,0.8); */
    backdrop-filter: blur(2px);
    background: linear-gradient(
      90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.9) 30%, 
      rgba(0,0,0,1) 100%
    );
    opacity: 0;
    transition: opacity 500ms;
  }

  &>div{
    position: relative;
    z-index: 502;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 6rem;

    &>div{
      text-align: right;
      h3{
        font-weight: 200;
        margin-bottom: 0.2rem;
        font-size: 1.6rem;
        opacity: 0;
        transform: translateX(-21px);
        transition: opacity 0ms, transform 0ms;
      }
      span{
        display: block;
        font-weight: 100;
        margin-bottom: 0.2rem;
        font-size: 1.4rem;
        opacity: 0;
        transform: translateX(-21px);
        transition: opacity 0ms, transform 0ms;
      }
    }
  }

  @media screen and (min-width: 768px) {

    &:before{
      background: linear-gradient(
        90deg, 
        rgba(0,0,0,0) 0%, 
        rgba(0,0,0,0.9) 50%, 
        rgba(0,0,0,1) 100%
      );
    }

    &>div{
      justify-content: center;
      transform: translateX(
        calc((var(--max-width)/4))
      );
    }
  }

  @media screen and (min-width: 1024px) {
    &>div{
      transform: translateX(
        calc((var(--max-width)/4))
      );
    }
  }

  @media screen and (min-height: 400px) {
    &>div{
      &>div{
        h3{
          margin-bottom: 1rem;
          font-size: 2.3rem;
        }
        span{
          margin-bottom: 0.68rem;
          font-size: 1.6rem;
        }
      }
    }
  }

  // &:has(+ input:checked) {
  &.isOn {
    left:0%;
    &:before{
      opacity: 1;
    }

    &>div{
      &>div{

        h3{
          transition: opacity 300ms, transform 300ms;
          opacity: 1;
          transform: translateY(0px);
          transition-delay: var(--tdh);
        }

        span{
          transition: opacity 300ms, transform 300ms;
          opacity: 1;
          transform: translateY(0px);

          &[data-animation-id="home"]{
            transition-delay: calc(
              var(--tdh) + calc(var(--tdg) * 1)
            );
          }
  
          &[data-animation-id="works"]{
            transition-delay: calc(
              var(--tdh) + calc(var(--tdg) * 2)
            );
          }

          &[data-animation-id="play"]{
            transition-delay: calc(
              var(--tdh) + calc(var(--tdg) * 3)
            );
          }
    
          &[data-animation-id="techs"]{
            transition-delay: calc(
              var(--tdh) + calc(var(--tdg) * 4)
            );
          }
    
          &[data-animation-id="contact"]{
            transition-delay: calc(
              var(--tdh) + calc(var(--tdg) * 5)
            );
          }

          &[data-animation-id="blog"]{
            transition-delay: calc(
              var(--tdh) + calc(var(--tdg) * 6)
            );
          }
        }

        @media screen and (min-width: 768px) {
          h3{
            transform: translateX(0px);
          }
          span{
            transform: translateX(0px);
          }
        }
      }
    }
  }

  &.nojs{

    position: static;
    width: auto;
    height: auto;

    &:before{
      content: unset;
      /* border: 1px solid red; */
      /* opacity: 1; */
    }

    &>div{
      padding: 0;
      display: grid;
      margin-right: 0;
      animation-name: gridShow;
      animation-duration: 500ms;
      animation-delay: 500ms;
      animation-fill-mode: both;
      transform: translateX(0px);

      &>div{
        overflow: hidden;
        text-align: right;
        h3{
          display: none;
        }
        span{
          display: inline;
          margin-left: 1rem;
          margin-bottom: 0;
          font-size: 1rem;
          opacity: 1;
          transform: translateY(0px) translateX(0px);
        }
      }
    }

  }

}
</style>