import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty, f as each, v as validate_component, g as subscribe } from "../../chunks/ssr.js";
import { o as onNavigate, I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
import { C as Container } from "../../chunks/container.js";
import { M as MenuList } from "../../chunks/menu.js";
import RiBusinessMailOpenFill from "svelte-icons-pack/ri/RiBusinessMailOpenFill.js";
import RiDesignPencilFill from "svelte-icons-pack/ri/RiDesignPencilFill.js";
import RiBuildingsHomeFill from "svelte-icons-pack/ri/RiBuildingsHomeFill.js";
import RiDeviceGamepadFill from "svelte-icons-pack/ri/RiDeviceGamepadFill.js";
const index$1 = "";
const loadingIndicator_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: '@keyframes svelte-27majc-gradient{0%{background-position:0 0}100%{background-position:-200% 0}}.loading-indicator.svelte-27majc{--loading-percent:0%;position:fixed;top:0;left:0;width:100%;z-index:1000;opacity:0;transition:opacity 200ms ease-out}.loading-indicator.svelte-27majc::before{content:" ";position:fixed;top:0;left:0;width:0%;height:0%;z-index:999;background-color:black;opacity:0;transition:opacity 200ms ease-out}.loading-indicator.svelte-27majc::after{content:" ";position:fixed;top:0;left:0;width:var(--loading-percent);height:2px;background:rgb(0, 97, 196);background:radial-gradient(circle, rgb(76, 181, 255) 0%, rgb(0, 97, 196) 37%);transition:width 250ms ease-out;z-index:1000;background-size:200% auto;background-position:0 100%}.loading-indicator.cover.svelte-27majc::before{width:100%;height:100%;opacity:0.64}.loading-indicator.loading.svelte-27majc{opacity:1}.loading-indicator.loading.svelte-27majc::after{animation:svelte-27majc-gradient 500ms infinite ease-out;animation-fill-mode:forwards;animation-timing-function:linear}',
  map: null
};
const Loading_indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading = false;
  let percent = "0%";
  let cover = false;
  let to;
  onNavigate((navigation) => {
    loading = true;
    percent = "72%";
    if (to)
      clearTimeout(to);
    to = setTimeout(
      () => {
        cover = true;
      },
      1e3
    );
    return new Promise(async (resolve) => {
      resolve();
      await navigation.complete;
      percent = "100%";
      clearTimeout(to);
      cover = false;
      setTimeout(
        () => {
          loading = false;
          setTimeout(
            () => {
              percent = "0%";
            },
            300
          );
        },
        500
      );
    });
  });
  $$result.css.add(css$8);
  return `<div class="${[
    "loading-indicator svelte-27majc",
    (loading ? "loading" : "") + " " + (cover ? "cover" : "")
  ].join(" ").trim()}"${add_attribute("style", `--loading-percent: ${percent}`, 0)}></div>`;
});
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const Pwa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webManifestLink;
  webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag.replace('href="./', 'href="/') : "";
  return `${$$result.head += `<!-- HEAD_svelte-9j5arz_START --><!-- HTML_TAG_START -->${webManifestLink}<!-- HTML_TAG_END --><!-- HEAD_svelte-9j5arz_END -->`, ""}`;
});
const button_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".menuButton.svelte-iq9v26.svelte-iq9v26{display:none;justify-content:center;align-items:center;width:34px;height:34px;background-color:transparent;border:none;cursor:pointer;position:absolute;transform-origin:center;z-index:1000;scale:1}.menuButton.js.svelte-iq9v26.svelte-iq9v26{display:flex}.menuButton.svelte-iq9v26.svelte-iq9v26:active{scale:0.9}.menuButton.svelte-iq9v26 span.svelte-iq9v26{position:absolute;transform-origin:center;background-color:var(--text);height:3px;width:100%;border-radius:3px;display:block;transition:all 300ms}.menuButton.svelte-iq9v26 span.svelte-iq9v26:nth-child(1){transform:translateY(-8px)}.menuButton.svelte-iq9v26 span.svelte-iq9v26:nth-child(2){scale:1;transform:translateY(0px)}.menuButton.svelte-iq9v26 span.svelte-iq9v26:nth-child(3){transform:translateY(8px)}.menuButton.isOn.svelte-iq9v26 span.svelte-iq9v26{background-color:red}.menuButton.isOn.svelte-iq9v26 span.svelte-iq9v26:nth-child(1){transform:translateY(0px) rotate(45deg)}.menuButton.isOn.svelte-iq9v26 span.svelte-iq9v26:nth-child(2){scale:0;transform:translateY(0px)}.menuButton.isOn.svelte-iq9v26 span.svelte-iq9v26:nth-child(3){transform:translateY(0px) rotate(-45deg)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOn = false } = $$props;
  let { jsEnabled = false } = $$props;
  if ($$props.isOn === void 0 && $$bindings.isOn && isOn !== void 0)
    $$bindings.isOn(isOn);
  if ($$props.jsEnabled === void 0 && $$bindings.jsEnabled && jsEnabled !== void 0)
    $$bindings.jsEnabled(jsEnabled);
  $$result.css.add(css$7);
  return `<button${add_attribute("title", isOn ? "close menu" : "open menu", 0)} class="${escape(null_to_empty(`menuButton ${isOn ? "isOn" : ""} ${jsEnabled ? "js" : ""}`), true) + " svelte-iq9v26"}"><span class="svelte-iq9v26"></span> <span class="svelte-iq9v26"></span> <span class="svelte-iq9v26"></span> </button>`;
});
const content_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '@keyframes svelte-h27v7j-gridShow{0%{opacity:0;grid-template-columns:0fr}50%{opacity:0;grid-template-columns:1fr}100%{opacity:1;grid-template-columns:1fr}}.menuContent.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j{--tdh:300ms;--tdg:100ms;position:fixed;top:0;width:100%;height:100vh;z-index:500;left:100%}.menuContent.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j:before{content:"";position:absolute;top:0;width:100%;height:100%;backdrop-filter:blur(10px);background-color:rgba(0, 0, 0, 0.8);opacity:0;transition:opacity 500ms}.menuContent.svelte-h27v7j>div.svelte-h27v7j.svelte-h27v7j{position:relative;z-index:502;height:100%;display:flex;align-items:center;justify-content:center}.menuContent.svelte-h27v7j>div.svelte-h27v7j>div.svelte-h27v7j{text-align:center}.menuContent.svelte-h27v7j>div>div h3.svelte-h27v7j.svelte-h27v7j{font-weight:200;margin-bottom:0.2rem;font-size:1.4rem;opacity:0;transform:translateY(-21px);transition:opacity 0ms, transform 0ms}.menuContent.svelte-h27v7j>div>div span.svelte-h27v7j.svelte-h27v7j{display:block;font-weight:100;margin-bottom:0.2rem;font-size:1.4rem;opacity:0;transform:translateY(21px);transition:opacity 0ms, transform 0ms}@media screen and (min-width: 768px){.menuContent.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j:before{backdrop-filter:blur(2px);background:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgb(0, 0, 0) 100%)}.menuContent.svelte-h27v7j>div.svelte-h27v7j.svelte-h27v7j{transform:translateX(calc(var(--max-width) / 8))}.menuContent.svelte-h27v7j>div.svelte-h27v7j>div.svelte-h27v7j{text-align:left}.menuContent.svelte-h27v7j>div>div h3.svelte-h27v7j.svelte-h27v7j{transform:translateX(21px)}.menuContent.svelte-h27v7j>div>div span.svelte-h27v7j.svelte-h27v7j{transform:translateX(21px)}}@media screen and (min-width: 1024px){.menuContent.svelte-h27v7j>div.svelte-h27v7j.svelte-h27v7j{transform:translateX(calc(var(--max-width) / 4))}}@media screen and (min-height: 400px){.menuContent.svelte-h27v7j>div>div h3.svelte-h27v7j.svelte-h27v7j{margin-bottom:2rem;font-size:3rem}.menuContent.svelte-h27v7j>div>div span.svelte-h27v7j.svelte-h27v7j{margin-bottom:1rem;font-size:2rem}}.menuContent.isOn.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j{left:0%}.menuContent.isOn.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j:before{opacity:1}.menuContent.isOn.svelte-h27v7j>div>div h3.svelte-h27v7j.svelte-h27v7j{transition:opacity 300ms, transform 300ms;opacity:1;transform:translateY(0px);transition-delay:var(--tdh)}.menuContent.isOn.svelte-h27v7j>div>div span.svelte-h27v7j.svelte-h27v7j{transition:opacity 300ms, transform 300ms;opacity:1;transform:translateY(0px)}.menuContent.isOn.svelte-h27v7j>div>div span[data-animation-id=home].svelte-h27v7j.svelte-h27v7j{transition-delay:calc(var(--tdh) + var(--tdg) * 1)}.menuContent.isOn.svelte-h27v7j>div>div span[data-animation-id=works].svelte-h27v7j.svelte-h27v7j{transition-delay:calc(var(--tdh) + var(--tdg) * 2)}.menuContent.isOn.svelte-h27v7j>div>div span[data-animation-id=techs].svelte-h27v7j.svelte-h27v7j{transition-delay:calc(var(--tdh) + var(--tdg) * 3)}.menuContent.isOn.svelte-h27v7j>div>div span[data-animation-id=contact].svelte-h27v7j.svelte-h27v7j{transition-delay:calc(var(--tdh) + var(--tdg) * 4)}@media screen and (min-width: 768px){.menuContent.isOn.svelte-h27v7j>div>div h3.svelte-h27v7j.svelte-h27v7j{transform:translateX(0px)}.menuContent.isOn.svelte-h27v7j>div>div span.svelte-h27v7j.svelte-h27v7j{transform:translateX(0px)}}.menuContent.nojs.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j{position:static;width:auto;height:auto}.menuContent.nojs.svelte-h27v7j.svelte-h27v7j.svelte-h27v7j:before{content:unset}.menuContent.nojs.svelte-h27v7j>div.svelte-h27v7j.svelte-h27v7j{padding:0;display:grid;animation-name:svelte-h27v7j-gridShow;animation-duration:500ms;animation-delay:500ms;animation-fill-mode:both;transform:translateX(0px)}.menuContent.nojs.svelte-h27v7j>div.svelte-h27v7j>div.svelte-h27v7j{overflow:hidden;text-align:right}.menuContent.nojs.svelte-h27v7j>div>div h3.svelte-h27v7j.svelte-h27v7j{display:none}.menuContent.nojs.svelte-h27v7j>div>div span.svelte-h27v7j.svelte-h27v7j{display:inline;margin-left:1rem;margin-bottom:0;font-size:1rem;opacity:1;transform:translateY(0px) translateX(0px)}',
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { jsEnabled = false } = $$props;
  let { isOn = false } = $$props;
  if ($$props.jsEnabled === void 0 && $$bindings.jsEnabled && jsEnabled !== void 0)
    $$bindings.jsEnabled(jsEnabled);
  if ($$props.isOn === void 0 && $$bindings.isOn && isOn !== void 0)
    $$bindings.isOn(isOn);
  $$result.css.add(css$6);
  return `<div class="${escape(null_to_empty(`menuContent ${!jsEnabled ? "nojs" : ""} ${isOn ? "isOn" : ""}`), true) + " svelte-h27v7j"}"><div class="svelte-h27v7j"><div class="svelte-h27v7j"><h3 class="svelte-h27v7j" data-svelte-h="svelte-1o7i1cv">Menu</h3> <span${add_attribute("data-animation-id", "home", 0)} class="svelte-h27v7j"><a${add_attribute("href", "/#home", 0)} data-svelte-h="svelte-wyqj1h">Home</a></span> ${each(MenuList, (menu) => {
    return `<span${add_attribute("data-animation-id", menu.id, 0)} class="svelte-h27v7j"><a${add_attribute("href", menu.href, 0)}>${escape(menu.text)}</a> </span>`;
  })}</div></div> </div>`;
});
const index_svelte_svelte_type_style_lang$3 = "";
const css$5 = {
  code: ".menu.svelte-hamno9{position:relative;display:inline-block;width:34px;height:34px}.menu.nojs.svelte-hamno9{width:auto;display:none;align-items:center}@media screen and (min-width: 420px){.menu.nojs.svelte-hamno9{display:flex}}",
  map: null
};
const Menu$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let js = false;
  let isOn = false;
  $$result.css.add(css$5);
  return `<nav class="${escape(null_to_empty(`menu ${"nojs"}`), true) + " svelte-hamno9"}">${validate_component(Button, "MenuButton").$$render($$result, { jsEnabled: js, isOn }, {}, {})} ${validate_component(Content, "MenuContent").$$render($$result, { jsEnabled: js, isOn }, {}, {})} </nav>`;
});
const index = "";
const index_svelte_svelte_type_style_lang$2 = "";
const css$4 = {
  code: '@keyframes svelte-wmq4h1-fadeIn{0%{opacity:0}100%{opacity:1}}.header.svelte-wmq4h1.svelte-wmq4h1{--scrollY:0;--transition:300ms;position:fixed;width:100%;top:0;left:0;padding:0 var(--pad-x);padding-top:calc(1rem * (4 - 3.5 * clamp(0, var(--scrollY) / 121, 1)));padding-bottom:calc(1rem * (4 - 3.5 * clamp(0, var(--scrollY) / 121, 1)));transition:padding-top var(--transition), padding-bottom var(--transition);z-index:10}.header.svelte-wmq4h1 .container{display:flex;justify-content:space-between;align-items:center;grid-column:content;width:100%}.header.svelte-wmq4h1.svelte-wmq4h1:before{content:"";position:absolute;width:100%;height:100%;top:0;left:0;transition:background-color 300ms, backdrop-filter 300ms;animation-fill-mode:both;border-bottom:1px solid var(--header-border-bottom);background-color:var(--header-bg-small);backdrop-filter:blur(3px);opacity:clamp(0, var(--scrollY) / 121, 1);transition:opacity var(--transition)}.header.svelte-wmq4h1 .logo.svelte-wmq4h1{font-family:"Source Serif Pro", sans-serif;font-weight:400;color:var(--text);text-decoration:none;font-size:2rem;line-height:calc(1rem * (6 - 2.8 * clamp(0, var(--scrollY) / 121, 1)));scale:calc(1 * (2 - 1 * clamp(0, var(--scrollY) / 121, 1)));translate:0% calc(1px * (-34 - -34 * clamp(0, var(--scrollY) / 121, 1)));transform-origin:0% 0%;transition:line-height var(--transition), scale var(--transition), translate var(--transition);animation-name:svelte-wmq4h1-fadeIn;animation-duration:300ms;animation-delay:100ms;animation-fill-mode:both}.header.small.svelte-wmq4h1.svelte-wmq4h1{padding-top:0.5rem;padding-bottom:0.5rem}.header.small.svelte-wmq4h1.svelte-wmq4h1:before{opacity:1;border-bottom:1px solid var(--header-border-bottom);background-color:var(--header-bg-small);backdrop-filter:blur(3px)}.header.small.svelte-wmq4h1 .logo.svelte-wmq4h1{scale:1;line-height:3.2rem;translate:0% 0%}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let scrollY = typeof window === "undefined" ? 0 : window.scrollY;
  let smallHeader = true;
  let scroll = 0;
  $$result.css.add(css$4);
  smallHeader = $page.url.pathname !== "/";
  {
    if (scrollY <= 163) {
      scroll = scrollY;
    } else {
      scroll = 163;
    }
  }
  $$unsubscribe_page();
  return ` <header${add_attribute("style", `--scrollY: ${scroll}`, 0)} class="${escape(null_to_empty(`header ${smallHeader ? "small" : ""}`), true) + " svelte-wmq4h1"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="${escape(null_to_empty(`logo noline`), true) + " svelte-wmq4h1"}" href="/" data-svelte-h="svelte-97jdfm">juji };</a> ${validate_component(Menu$1, "Menu").$$render($$result, {}, {}, {})}`;
    }
  })} </header>`;
});
const menu_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".menuBottomNoscript.svelte-1qekl7t.svelte-1qekl7t{border-top:1px solid #222222;background-color:black;left:0;bottom:0;display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.menuBottomNoscript.svelte-1qekl7t a.svelte-1qekl7t{text-align:center;padding:1rem 0}@media screen and (min-width: 420px){.menuBottomNoscript.svelte-1qekl7t.svelte-1qekl7t{display:none}}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const menuIcon = {
    works: RiDesignPencilFill,
    techs: RiDeviceGamepadFill,
    contact: RiBusinessMailOpenFill
  };
  $$result.css.add(css$3);
  return `<div class="menuBottomNoscript svelte-1qekl7t"><a href="/#home" class="svelte-1qekl7t">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: RiBuildingsHomeFill,
      size: "1.618rem"
    },
    {},
    {}
  )}</a> ${each(MenuList, (menu) => {
    return `${menuIcon[menu.id] ? `<a${add_attribute("href", menu.href, 0)} class="svelte-1qekl7t">${validate_component(Icon, "Icon").$$render($$result, { src: menuIcon[menu.id], size: "1.618rem" }, {}, {})} </a>` : ``}`;
  })} </div>`;
});
const index_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: ".noscript.svelte-wc5jy8.svelte-wc5jy8{position:sticky;bottom:0;left:0;z-index:100}.footer.svelte-wc5jy8.svelte-wc5jy8{background-color:rgba(0, 0, 0, 0.4);font-size:0.8rem;color:#7d7d7d;padding:1rem var(--pad-x)}.footer.svelte-wc5jy8 a.mailto.svelte-wc5jy8{color:inherit}.footer.svelte-wc5jy8 a.mailto.svelte-wc5jy8:hover{color:var(--blue)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="footer svelte-wc5jy8">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Tri Rahmat Gunadi -- <a class="mailto svelte-wc5jy8" target="_blank" href="mailto:him@jujiyangasli.com" data-svelte-h="svelte-8q594g">him@jujiyangasli.com</a>`;
    }
  })}</footer> <noscript class="noscript svelte-wc5jy8">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} </noscript>`;
});
const index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pendulum.svelte-19dxks5.svelte-19dxks5{--additional-height:140px;--pendulum-top:0px;height:calc(100vh + var(--additional-height));width:100%;margin:0 auto;z-index:0;overflow:hidden;position:fixed;top:0px;left:0px}@keyframes svelte-19dxks5-pendulumTop{to{translate:0 calc(var(--additional-height) * -1)}}.pendulum.svelte-19dxks5 .bg.svelte-19dxks5{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;opacity:0;transition:opacity 1000ms, background-color 1000ms;background:var(--transparent-bg)}.pendulum.svelte-19dxks5 .bg.on.svelte-19dxks5{opacity:1}.pendulum.svelte-19dxks5 .inside.svelte-19dxks5{position:fixed;top:0;left:0;width:100%;height:calc(100vh + var(--additional-height));animation-name:svelte-19dxks5-pendulumTop;animation-timeline:scroll()}.pendulum.svelte-19dxks5 img.svelte-19dxks5{object-fit:none;object-position:100% 100%}.pendulum.svelte-19dxks5 img.noscript.svelte-19dxks5{position:absolute;object-fit:cover;top:0;left:0;width:100%;height:100%;opacity:0.4;z-index:2}",
  map: null
};
const Pendulum = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let bgOn = true;
  let scrollY = 0;
  $$result.css.add(css$1);
  bgOn = $page.url.pathname !== "/" || scrollY > 42;
  $$unsubscribe_page();
  return ` <div class="${escape(null_to_empty(`${"pendulum"}`), true) + " svelte-19dxks5"}" id="pendulum"><div class="${escape(null_to_empty(`${"bg"} ${bgOn ? "on" : ""}`), true) + " svelte-19dxks5"}"></div> <noscript data-svelte-h="svelte-hlld24"><img class="${escape(null_to_empty("noscript"), true) + " svelte-19dxks5"}"${add_attribute("src", "/images/pendulum.png", 0)}${add_attribute("height", 1440, 0)}${add_attribute("width", 911, 0)} alt="pendulum"></noscript> <div class="${escape(null_to_empty("inside"), true) + " svelte-19dxks5"}">${`${``}`}</div> </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'sanitize.css';@import '$lib/styles/global.css';@import '$lib/styles/anim.css';",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-163vbjz_START --><link rel="icon"${add_attribute("href", `${$page.url.origin}/icons/favicon.ico`, 0)} sizes="any"><link rel="icon"${add_attribute("href", `${$page.url.origin}/icons/favicon-16x16.png`, 0)} type="image/png" sizes="16x16"><link rel="icon"${add_attribute("href", `${$page.url.origin}/icons/favicon-32x32.png`, 0)} type="image/png" sizes="32x32"><link rel="icon"${add_attribute("href", `${$page.url.origin}/icons/android-chrome-192x192.png`, 0)} type="image/png" sizes="192x192"><link rel="icon"${add_attribute("href", `${$page.url.origin}/icons/android-chrome-512x512.png`, 0)} type="image/png" sizes="512x512"><link rel="icon"${add_attribute("href", `${$page.url.origin}/icons/favicon.svg`, 0)} type="image/svg+xml"><link rel="apple-touch-icon"${add_attribute("href", `${$page.url.origin}/icons/apple-touch-icon.png`, 0)} sizes="180x180"><link rel="mask-icon"${add_attribute("href", `${$page.url.origin}/favicon.svg`, 0)} color="#000000"><meta name="theme-color" content="#000000">${$$result.title = `<title>Juji: Web Developer</title>`, ""}<meta name="description" content="Hello, my name is Tri Rahmat Gunadi, and i like to code stuff."><meta name="color-scheme" content="light dark"><meta property="og:url"${add_attribute("content", `${$page.url.origin}`, 0)}><meta property="og:type" content="website"><meta property="og:title" content="Juji: Web Developer"><meta property="og:description" content="Hello, my name is Tri Rahmat Gunadi, and i like to code stuff."><meta property="og:image"${add_attribute("content", `${$page.url.origin}/images/juji-1200-630.jpeg`, 0)}><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${add_attribute("content", `${$page.url.host}`, 0)}><meta property="twitter:url"${add_attribute("content", `${$page.url.origin}`, 0)}><meta name="twitter:title" content="Juji: Web Developer"><meta name="twitter:description" content="Hello, my name is Tri Rahmat Gunadi, and i like to code stuff."><meta name="twitter:image"${add_attribute("content", `${$page.url.origin}/images/juji-800-418.jpeg`, 0)}><!-- HEAD_svelte-163vbjz_END -->`, ""} ${validate_component(Pwa, "Pwa").$$render($$result, {}, {}, {})} ${validate_component(Pendulum, "Pendulum").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(Loading_indicator, "LoadingIndicator").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
