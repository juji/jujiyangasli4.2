import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-y8ukxb{flex:1 1 auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <main class="svelte-y8ukxb">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
