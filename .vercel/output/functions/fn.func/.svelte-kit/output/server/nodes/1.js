

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bf74cc9e.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/index.3393fb81.js","_app/immutable/chunks/stores.a8d238c9.js","_app/immutable/chunks/singletons.9f96aed5.js"];
export const stylesheets = [];
export const fonts = [];
