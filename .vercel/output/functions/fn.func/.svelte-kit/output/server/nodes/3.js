

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(nopad)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.596b7468.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/index.3393fb81.js"];
export const stylesheets = ["_app/immutable/assets/3.27614228.css"];
export const fonts = [];
