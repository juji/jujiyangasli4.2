import { c as create_ssr_component, e as escape, d as null_to_empty } from "./ssr.js";
const container_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-buvxul{max-width:var(--max-width);margin:0 auto}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`container`), true) + " svelte-buvxul"}">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Container as C
};
