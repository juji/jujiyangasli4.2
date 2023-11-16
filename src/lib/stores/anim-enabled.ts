import { writable } from 'svelte/store';
export const animEnabled = writable({
  js: true,
  anim: true
});