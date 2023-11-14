<script lang="ts">
  
  import type { WorkContent } from "$lib/data/works/types";
  import Container from "$lib/components/container.svelte";
  import Text from './text/index.svelte'
  import FiX from "svelte-icons-pack/fi/FiX";
  import { onNavigate } from '$app/navigation';

  import Slider from './slider/index.svelte'
  import type { SliderImage } from './slider/slider-image'

  // @ts-ignore
  import Icon from "svelte-icons-pack/Icon.svelte"
	import { onMount } from "svelte";

  // prevent smooth scroll while navigating to /
  onNavigate((navigation) => {
    if(!navigation || !navigation.to) return;
    if(navigation.to.url.pathname === '/'){
      const html = document.querySelector('html')
      html && html.classList.add('noSmooth')
      navigation.complete.then(() => {
        html && html.classList.remove('noSmooth')  
      })
    }
  })

  export let work:WorkContent;

  const { 
    id,
    title,
    images,
    gradientColor
  } = work || {}

  const href = `/#works/${id}`;

  let sliderImages: SliderImage[];
  $: sliderImages = (images||[]).map(v => ({
    id,
    title: v.title,
    original: {
      url: v.url,
      width: v.dimension.image.width,
      height: v.dimension.image.height,
    },
    thumbnail: {
      url: v.thumbnail,
      width: v.dimension.thumb.width,
      height: v.dimension.thumb.height,
    }
  }))

  const back = () => {
    history.back()
  }

  onMount(() => {
    //
    const root = document.querySelector(':root') as HTMLElement;
    const rs = getComputedStyle(root)
    const init = rs.getPropertyValue('--transparent-bg')
    root.style.setProperty('--transparent-bg', 
      `radial-gradient(farthest-corner at -54px 0px, ${gradientColor} 0%, ${init} 35%)`,
    );

    return () => {
      root.style.setProperty('--transparent-bg', init);
    }
  })

</script>

<div class={'details'}>
  <div class="title">
    <Container>
      <h2>{title}</h2>
      <a on:click|preventDefault={back} href={href}>
        <Icon src={FiX} />
      </a>
    </Container>
  </div>
  <div class="content">
    <Slider images={sliderImages} />
    <Text work={work} />
  </div>
</div>

<style lang="scss">
  @use './work-details';
</style>