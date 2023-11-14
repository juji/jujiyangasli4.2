<script>
  import Container from '$lib/components/container.svelte'
  import Menu from './menu.svelte'
</script>


<footer class="footer">
  <Container>
    &copy; {new Date().getFullYear()} Tri Rahmat Gunadi -- <a 
    class="mailto"
    target="_blank" href="mailto:him@jujiyangasli.com">him@jujiyangasli.com</a>
  </Container>
</footer>
<noscript class="noscript">
<Menu />
</noscript>

<style lang="scss">
  .noscript{
    position: sticky;
    bottom: 0;
    left:0;
    z-index: 100;
  }
  .footer{

    background-color: rgba(0,0,0,0.4);
    font-size: 0.8rem;
    color: #7d7d7d;
    padding: 1rem var(--pad-x);

    a.mailto{
      color: inherit;  

      &:hover{
        color: var(--blue);
      }
    }

}
</style>