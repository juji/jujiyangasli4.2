<script lang="ts">
  // detect if js is enabled
  import { beforeUpdate } from 'svelte';
  import { animEnabled } from '$lib/stores/anim-enabled';

  beforeUpdate(() => animEnabled.set({

    js: true,
    anim: (

      (!(
        // reduced motion
        window.matchMedia(`(prefers-reduced-motion: reduce)`) &&
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
      ))

      // true
    )
  }))
</script>