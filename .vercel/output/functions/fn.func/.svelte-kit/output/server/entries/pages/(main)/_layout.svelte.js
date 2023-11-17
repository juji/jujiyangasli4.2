import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container } from "../../../chunks/container.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-x3qv3m{flex:1 1 auto;padding-left:var(--pad-x);padding-right:var(--pad-x)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-x3qv3m">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} </main>`;
});
export {
  Layout as default
};
