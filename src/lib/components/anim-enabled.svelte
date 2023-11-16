<script lang="ts">
  // detect if js is enabled
  import { onMount } from 'svelte';
  import { animEnabled } from '$lib/stores/anim-enabled';

  onMount(() => {

    const anim = (!(
      // reduced motion
      window.matchMedia(`(prefers-reduced-motion: reduce)`) &&
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
    ))

    // only if different from default
    if($animEnabled.anim !== anim)
      animEnabled.set({
        js: true,
        anim
      })
  })
</script>