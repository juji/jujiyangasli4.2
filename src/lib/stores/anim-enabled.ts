import { writable } from 'svelte/store';
export const animEnabled = writable({
  js: false,
  anim: true
});