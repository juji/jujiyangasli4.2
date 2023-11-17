

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a8b6dc2b.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/index.3393fb81.js","_app/immutable/chunks/container.d2d30216.js"];
export const stylesheets = ["_app/immutable/assets/2.9e5fd2bc.css","_app/immutable/assets/container.683e5c3c.css"];
export const fonts = [];
