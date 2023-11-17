<script>
  import { onMount } from 'svelte'
  import { pwaInfo } from 'virtual:pwa-info'; 

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        // onRegistered(r) {
        //   // uncomment following code if you want check for updates
        //   // r && setInterval(() => {
        //   //    console.log('Checking for sw update')
        //   //    r.update()
        //   // }, 20000 /* 20s for testing purposes */)
        //   console.log(`SW Registered: ${r}`)
        // },
        // onRegisterError(error) {
        //   console.log('SW registration error', error)
        // }
      })
    }
  })

  $: console.log('pwaInfo', pwaInfo)
  $: webManifestLink = pwaInfo ? 
    pwaInfo.webManifest.linkTag.replace('href=\"./','href=\"/') : '' 
</script> 
  
<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>