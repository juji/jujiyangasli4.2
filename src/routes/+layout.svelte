
<script lang="ts">
  import '@fontsource-variable/open-sans';
  import AnimEnabled from '$lib/components/anim-enabled.svelte';
  import Pwa from '$lib/components/pwa.svelte';
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  
  // import Header from '$lib/components/header/index.svelte'
  import Footer from '$lib/components/footer/index.svelte'
  // import Pendulum from '$lib/components/pendulum/index.svelte';
  //
  // view transition
  onNavigate((navigation) => {
    // '@types/dom-view-transitions';
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

</script>

<style global>
  @import 'sanitize.css';
  @import '$lib/styles/global.css';
  @import '$lib/styles/anim.css';
</style>

<svelte:head>
  <link rel="icon" href={`${$page.url.origin}/icons/favicon.ico`} sizes="any" />
  <link rel="icon" href={`${$page.url.origin}/icons/favicon-16x16.png`} type="image/png" sizes="16x16" />
  <link rel="icon" href={`${$page.url.origin}/icons/favicon-32x32.png`} type="image/png" sizes="32x32" />
  <link rel="icon" href={`${$page.url.origin}/icons/android-chrome-192x192.png`} type="image/png" sizes="192x192" />
  <link rel="icon" href={`${$page.url.origin}/icons/android-chrome-512x512.png`} type="image/png" sizes="512x512" />
  <link rel="icon" href={`${$page.url.origin}/icons/favicon.svg`} type="image/svg+xml" />
  <link rel="apple-touch-icon" href={`${$page.url.origin}/icons/apple-touch-icon.png`} sizes="180x180" />
  <link rel="mask-icon" href={`${$page.url.origin}/favicon.svg`} color="#000000" />
  <meta name="theme-color" content="#000000" />

  <title>Juji: Web Developer</title>
  <meta name="description" content="Hello, my name is Tri Rahmat Gunadi, and i like to code stuff." />

  <meta property="og:url" content={`${$page.url.origin}`} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Juji: Web Developer" />
  <meta property="og:description" content="Hello, my name is Tri Rahmat Gunadi, and i like to code stuff." />
  <meta property="og:image" content={`${$page.url.origin}/images/juji-1200-630.jpeg`} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={`${$page.url.host}`} />
  <meta property="twitter:url" content={`${$page.url.origin}`} />
  <meta name="twitter:title" content="Juji: Web Developer" />
  <meta name="twitter:description" content="Hello, my name is Tri Rahmat Gunadi, and i like to code stuff." />
  <meta name="twitter:image" content={`${$page.url.origin}/images/juji-800-418.jpeg`} />

</svelte:head>

<Pwa />
<AnimEnabled />
<!-- <Pendulum /> -->
<!-- <Header /> -->
<slot/>
<Footer />
