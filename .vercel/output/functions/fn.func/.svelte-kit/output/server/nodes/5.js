import * as server from '../entries/pages/(nopad)/works/_id_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(nopad)/works/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(nopad)/works/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.827634cd.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/index.3393fb81.js","_app/immutable/chunks/container.d2d30216.js","_app/immutable/chunks/navigation.eac5772f.js","_app/immutable/chunks/singletons.9f96aed5.js","_app/immutable/chunks/Image.82ee8f30.js","_app/immutable/chunks/stores.a8d238c9.js"];
export const stylesheets = ["_app/immutable/assets/5.1cfb8d76.css","_app/immutable/assets/container.683e5c3c.css"];
export const fonts = [];
