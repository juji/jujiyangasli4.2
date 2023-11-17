import * as server from '../entries/pages/(main)/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.37f1ec5a.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/index.3393fb81.js","_app/immutable/chunks/navigation.eac5772f.js","_app/immutable/chunks/singletons.9f96aed5.js","_app/immutable/chunks/menu.6ae0b654.js","_app/immutable/chunks/Image.82ee8f30.js","_app/immutable/chunks/stores.a8d238c9.js"];
export const stylesheets = ["_app/immutable/assets/4.aee3bf8e.css"];
export const fonts = ["_app/immutable/assets/source-code-pro-cyrillic-ext-wght-normal.0bc153e8.woff2","_app/immutable/assets/source-code-pro-cyrillic-wght-normal.a9204ea7.woff2","_app/immutable/assets/source-code-pro-greek-wght-normal.62e15bcc.woff2","_app/immutable/assets/source-code-pro-vietnamese-wght-normal.ecf0d6bf.woff2","_app/immutable/assets/source-code-pro-latin-ext-wght-normal.c6489cfa.woff2","_app/immutable/assets/source-code-pro-latin-wght-normal.539bdb4b.woff2"];
