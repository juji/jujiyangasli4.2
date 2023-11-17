import { c as create_ssr_component, e as escape, d as null_to_empty, f as each, b as add_attribute, v as validate_component, g as subscribe, h as add_classes } from "../../../chunks/ssr.js";
import { M as MenuList } from "../../../chunks/menu.js";
import { I as Icon, o as onNavigate } from "../../../chunks/Icon.js";
import ImLink from "svelte-icons-pack/im/ImLink.js";
import IoLogoGithub from "svelte-icons-pack/io/IoLogoGithub.js";
import IoLogoNpm from "svelte-icons-pack/io/IoLogoNpm.js";
import IoLogoLinkedin from "svelte-icons-pack/io/IoLogoLinkedin.js";
import IoLogoSkype from "svelte-icons-pack/io/IoLogoSkype.js";
import "../../../chunks/contact.schema.js";
import { p as page } from "../../../chunks/stores.js";
import IoClose from "svelte-icons-pack/io/IoClose.js";
import { I as Image } from "../../../chunks/Image.js";
import "vanilla-tilt";
const menu_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "@keyframes svelte-1kmqovz-slideLeft{0%{transform:translate(1rem, 0rem)}100%{transform:translate(0rem, 0rem)}}@keyframes svelte-1kmqovz-slideLeftBackward{0%{transform:translate(0rem, 0rem)}100%{transform:translate(1rem, 0rem)}}@keyframes svelte-1kmqovz-fadeIn{0%{opacity:0}100%{opacity:1}}.menu.svelte-1kmqovz.svelte-1kmqovz{--scroll-ratio:1px;margin-top:3rem;animation-name:svelte-1kmqovz-pScroll;animation-timeline:scroll();animation-range:0px var(--window-height)}@keyframes svelte-1kmqovz-pScroll{0%{translate:0 0}100%{translate:0 calc(var(--scroll-ratio) * var(--padding-bottom))}}.menu.noScroll.svelte-1kmqovz.svelte-1kmqovz{translate:0 calc(var(--scroll-ratio) * var(--scroll-y) * var(--padding-bottom))}.menu.svelte-1kmqovz a.svelte-1kmqovz{animation-name:svelte-1kmqovz-slideLeft, svelte-1kmqovz-fadeIn;animation-duration:500ms;animation-fill-mode:both;animation-timing-function:cubic-bezier(0.41, 1.59, 0.71, 1.11);margin-right:1.5rem;display:inline-block}.menu.svelte-1kmqovz a[data-animation-id=works].svelte-1kmqovz{animation-delay:calc(var(--base-anim-delay) + 500ms)}.menu.svelte-1kmqovz a[data-animation-id=techs].svelte-1kmqovz{animation-delay:calc(var(--base-anim-delay) + 600ms)}.menu.svelte-1kmqovz a[data-animation-id=contact].svelte-1kmqovz{animation-delay:calc(var(--base-anim-delay) + 700ms)}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { noScroll = false } = $$props;
  if ($$props.noScroll === void 0 && $$bindings.noScroll && noScroll !== void 0)
    $$bindings.noScroll(noScroll);
  $$result.css.add(css$9);
  return `<div class="${[
    escape(null_to_empty("menu"), true) + " svelte-1kmqovz",
    noScroll ? "noScroll" : ""
  ].join(" ").trim()}">${each(MenuList, (menu) => {
    return `<a${add_attribute("data-animation-id", menu.id, 0)}${add_attribute("href", menu.href, 0)} class="svelte-1kmqovz">${escape(menu.text)}</a>`;
  })} </div>`;
});
const index = "";
const index_svelte_svelte_type_style_lang$4 = "";
const css$8 = {
  code: '@keyframes svelte-1y8s0k7-rubbery{0%{transform:scale3d(1, 0, 1)}0.1%{transform:scale3d(1, 0.0071253062, 1)}0.2%{transform:scale3d(1, 0.0146323892, 1)}0.3%{transform:scale3d(1, 0.0225123646, 1)}0.4%{transform:scale3d(1, 0.0307562904, 1)}0.5%{transform:scale3d(1, 0.0393551714, 1)}0.6%{transform:scale3d(1, 0.0482999648, 1)}0.7%{transform:scale3d(1, 0.0575815852, 1)}0.8%{transform:scale3d(1, 0.0671909095, 1)}0.9%{transform:scale3d(1, 0.0771187817, 1)}1%{transform:scale3d(1, 0.0873560179, 1)}1.1%{transform:scale3d(1, 0.0978934113, 1)}1.2%{transform:scale3d(1, 0.1087217365, 1)}1.3%{transform:scale3d(1, 0.1198317548, 1)}1.4%{transform:scale3d(1, 0.1312142182, 1)}1.5%{transform:scale3d(1, 0.1428598747, 1)}1.6%{transform:scale3d(1, 0.1547594722, 1)}1.7%{transform:scale3d(1, 0.1669037635, 1)}1.8%{transform:scale3d(1, 0.17928351, 1)}1.9%{transform:scale3d(1, 0.191889487, 1)}2%{transform:scale3d(1, 0.2047124873, 1)}2.1%{transform:scale3d(1, 0.2177433252, 1)}2.2%{transform:scale3d(1, 0.2309728416, 1)}2.3%{transform:scale3d(1, 0.2443919071, 1)}2.4%{transform:scale3d(1, 0.2579914265, 1)}2.5%{transform:scale3d(1, 0.2717623424, 1)}2.6%{transform:scale3d(1, 0.2856956396, 1)}2.7%{transform:scale3d(1, 0.2997823483, 1)}2.8%{transform:scale3d(1, 0.3140135481, 1)}2.9%{transform:scale3d(1, 0.3283803715, 1)}3%{transform:scale3d(1, 0.3428740076, 1)}3.1%{transform:scale3d(1, 0.3574857057, 1)}3.2%{transform:scale3d(1, 0.3722067781, 1)}3.3%{transform:scale3d(1, 0.3870286042, 1)}3.4%{transform:scale3d(1, 0.4019426332, 1)}3.5%{transform:scale3d(1, 0.4169403875, 1)}3.6%{transform:scale3d(1, 0.4320134658, 1)}3.7%{transform:scale3d(1, 0.4471535461, 1)}3.8%{transform:scale3d(1, 0.4623523884, 1)}3.9%{transform:scale3d(1, 0.4776018378, 1)}4%{transform:scale3d(1, 0.4928938274, 1)}4.1%{transform:scale3d(1, 0.5082203806, 1)}4.2%{transform:scale3d(1, 0.5235736139, 1)}4.3%{transform:scale3d(1, 0.5389457397, 1)}4.4%{transform:scale3d(1, 0.5543290681, 1)}4.5%{transform:scale3d(1, 0.5697160099, 1)}4.6%{transform:scale3d(1, 0.5850990787, 1)}4.7%{transform:scale3d(1, 0.6004708927, 1)}4.8%{transform:scale3d(1, 0.6158241777, 1)}4.9%{transform:scale3d(1, 0.631151768, 1)}5%{transform:scale3d(1, 0.6464466094, 1)}5.1%{transform:scale3d(1, 0.6617017605, 1)}5.2%{transform:scale3d(1, 0.6769103947, 1)}5.3%{transform:scale3d(1, 0.6920658017, 1)}5.4%{transform:scale3d(1, 0.7071613896, 1)}5.5%{transform:scale3d(1, 0.7221906858, 1)}5.6%{transform:scale3d(1, 0.7371473392, 1)}5.7%{transform:scale3d(1, 0.7520251211, 1)}5.8%{transform:scale3d(1, 0.7668179265, 1)}5.9%{transform:scale3d(1, 0.7815197759, 1)}6%{transform:scale3d(1, 0.7961248157, 1)}6.1%{transform:scale3d(1, 0.8106273199, 1)}6.2%{transform:scale3d(1, 0.8250216908, 1)}6.3%{transform:scale3d(1, 0.8393024602, 1)}6.4%{transform:scale3d(1, 0.8534642898, 1)}6.5%{transform:scale3d(1, 0.8675019725, 1)}6.6%{transform:scale3d(1, 0.8814104327, 1)}6.7%{transform:scale3d(1, 0.8951847275, 1)}6.8%{transform:scale3d(1, 0.9088200464, 1)}6.9%{transform:scale3d(1, 0.9223117126, 1)}7%{transform:scale3d(1, 0.9356551832, 1)}7.1%{transform:scale3d(1, 0.9488460492, 1)}7.2%{transform:scale3d(1, 0.9618800362, 1)}7.3%{transform:scale3d(1, 0.9747530045, 1)}7.4%{transform:scale3d(1, 0.9874609491, 1)}7.5%{transform:scale3d(1, 1, 1)}7.6%{transform:scale3d(1, 1.0123664221, 1)}7.7%{transform:scale3d(1, 1.0245566151, 1)}7.8%{transform:scale3d(1, 1.0365671135, 1)}7.9%{transform:scale3d(1, 1.0483945863, 1)}8%{transform:scale3d(1, 1.0600358369, 1)}8.1%{transform:scale3d(1, 1.0714878026, 1)}8.2%{transform:scale3d(1, 1.0827475545, 1)}8.3%{transform:scale3d(1, 1.0938122967, 1)}8.4%{transform:scale3d(1, 1.1046793664, 1)}8.5%{transform:scale3d(1, 1.1153462325, 1)}8.6%{transform:scale3d(1, 1.125810496, 1)}8.7%{transform:scale3d(1, 1.1360698885, 1)}8.8%{transform:scale3d(1, 1.1461222721, 1)}8.9%{transform:scale3d(1, 1.1559656383, 1)}9%{transform:scale3d(1, 1.165598107, 1)}9.1%{transform:scale3d(1, 1.1750179264, 1)}9.2%{transform:scale3d(1, 1.1842234712, 1)}9.3%{transform:scale3d(1, 1.1932132423, 1)}9.4%{transform:scale3d(1, 1.2019858653, 1)}9.5%{transform:scale3d(1, 1.2105400899, 1)}9.6%{transform:scale3d(1, 1.2188747884, 1)}9.7%{transform:scale3d(1, 1.2269889547, 1)}9.8%{transform:scale3d(1, 1.2348817034, 1)}9.9%{transform:scale3d(1, 1.2425522679, 1)}10%{transform:scale3d(1, 1.25, 1)}10.1%{transform:scale3d(1, 1.2572243677, 1)}10.2%{transform:scale3d(1, 1.2642249546, 1)}10.3%{transform:scale3d(1, 1.2710014579, 1)}10.4%{transform:scale3d(1, 1.2775536876, 1)}10.5%{transform:scale3d(1, 1.2838815644, 1)}10.6%{transform:scale3d(1, 1.2899851187, 1)}10.7%{transform:scale3d(1, 1.2958644889, 1)}10.8%{transform:scale3d(1, 1.3015199199, 1)}10.9%{transform:scale3d(1, 1.3069517611, 1)}11%{transform:scale3d(1, 1.3121604657, 1)}11.1%{transform:scale3d(1, 1.3171465881, 1)}11.2%{transform:scale3d(1, 1.3219107828, 1)}11.3%{transform:scale3d(1, 1.3264538025, 1)}11.4%{transform:scale3d(1, 1.3307764965, 1)}11.5%{transform:scale3d(1, 1.3348798089, 1)}11.6%{transform:scale3d(1, 1.3387647767, 1)}11.7%{transform:scale3d(1, 1.3424325283, 1)}11.8%{transform:scale3d(1, 1.3458842815, 1)}11.9%{transform:scale3d(1, 1.3491213417, 1)}12%{transform:scale3d(1, 1.3521451001, 1)}12.1%{transform:scale3d(1, 1.3549570319, 1)}12.2%{transform:scale3d(1, 1.3575586943, 1)}12.3%{transform:scale3d(1, 1.3599517247, 1)}12.4%{transform:scale3d(1, 1.3621378388, 1)}12.5%{transform:scale3d(1, 1.3641188288, 1)}12.6%{transform:scale3d(1, 1.3658965611, 1)}12.7%{transform:scale3d(1, 1.3674729749, 1)}12.8%{transform:scale3d(1, 1.3688500799, 1)}12.9%{transform:scale3d(1, 1.3700299544, 1)}13%{transform:scale3d(1, 1.3710147436, 1)}13.1%{transform:scale3d(1, 1.3718066572, 1)}13.2%{transform:scale3d(1, 1.3724079679, 1)}13.3%{transform:scale3d(1, 1.3728210091, 1)}13.4%{transform:scale3d(1, 1.3730481732, 1)}13.5%{transform:scale3d(1, 1.3730919094, 1)}13.6%{transform:scale3d(1, 1.3729547219, 1)}13.7%{transform:scale3d(1, 1.3726391679, 1)}13.8%{transform:scale3d(1, 1.3721478553, 1)}13.9%{transform:scale3d(1, 1.3714834415, 1)}14%{transform:scale3d(1, 1.3706486307, 1)}14.1%{transform:scale3d(1, 1.3696461723, 1)}14.2%{transform:scale3d(1, 1.3684788588, 1)}14.3%{transform:scale3d(1, 1.367149524, 1)}14.4%{transform:scale3d(1, 1.365661041, 1)}14.5%{transform:scale3d(1, 1.3640163203, 1)}14.6%{transform:scale3d(1, 1.3622183078, 1)}14.7%{transform:scale3d(1, 1.3602699828, 1)}14.8%{transform:scale3d(1, 1.3581743564, 1)}14.9%{transform:scale3d(1, 1.3559344695, 1)}15%{transform:scale3d(1, 1.3535533906, 1)}15.1%{transform:scale3d(1, 1.3510342144, 1)}15.2%{transform:scale3d(1, 1.3483800598, 1)}15.3%{transform:scale3d(1, 1.3455940677, 1)}15.4%{transform:scale3d(1, 1.3426793998, 1)}15.5%{transform:scale3d(1, 1.3396392363, 1)}15.6%{transform:scale3d(1, 1.3364767743, 1)}15.7%{transform:scale3d(1, 1.3331952259, 1)}15.8%{transform:scale3d(1, 1.3297978167, 1)}15.9%{transform:scale3d(1, 1.3262877839, 1)}16%{transform:scale3d(1, 1.3226683743, 1)}16.1%{transform:scale3d(1, 1.3189428431, 1)}16.2%{transform:scale3d(1, 1.315114452, 1)}16.3%{transform:scale3d(1, 1.3111864674, 1)}16.4%{transform:scale3d(1, 1.3071621588, 1)}16.5%{transform:scale3d(1, 1.3030447975, 1)}16.6%{transform:scale3d(1, 1.2988376545, 1)}16.7%{transform:scale3d(1, 1.2945439991, 1)}16.8%{transform:scale3d(1, 1.2901670977, 1)}16.9%{transform:scale3d(1, 1.2857102118, 1)}17%{transform:scale3d(1, 1.2811765966, 1)}17.1%{transform:scale3d(1, 1.2765694997, 1)}17.2%{transform:scale3d(1, 1.2718921593, 1)}17.3%{transform:scale3d(1, 1.2671478032, 1)}17.4%{transform:scale3d(1, 1.262339647, 1)}17.5%{transform:scale3d(1, 1.257470893, 1)}17.6%{transform:scale3d(1, 1.2525447285, 1)}17.7%{transform:scale3d(1, 1.2475643249, 1)}17.8%{transform:scale3d(1, 1.242532836, 1)}17.9%{transform:scale3d(1, 1.2374533969, 1)}18%{transform:scale3d(1, 1.2323291227, 1)}18.1%{transform:scale3d(1, 1.2271631073, 1)}18.2%{transform:scale3d(1, 1.2219584222, 1)}18.3%{transform:scale3d(1, 1.2167181153, 1)}18.4%{transform:scale3d(1, 1.2114452098, 1)}18.5%{transform:scale3d(1, 1.2061427029, 1)}18.6%{transform:scale3d(1, 1.200813565, 1)}18.7%{transform:scale3d(1, 1.1954607383, 1)}18.8%{transform:scale3d(1, 1.190087136, 1)}18.9%{transform:scale3d(1, 1.1846956415, 1)}19%{transform:scale3d(1, 1.1792891067, 1)}19.1%{transform:scale3d(1, 1.1738703519, 1)}19.2%{transform:scale3d(1, 1.1684421642, 1)}19.3%{transform:scale3d(1, 1.163007297, 1)}19.4%{transform:scale3d(1, 1.1575684691, 1)}19.5%{transform:scale3d(1, 1.1521283636, 1)}19.6%{transform:scale3d(1, 1.1466896275, 1)}19.7%{transform:scale3d(1, 1.1412548705, 1)}19.8%{transform:scale3d(1, 1.1358266646, 1)}19.9%{transform:scale3d(1, 1.130407543, 1)}20%{transform:scale3d(1, 1.125, 1)}20.1%{transform:scale3d(1, 1.1196064896, 1)}20.2%{transform:scale3d(1, 1.1142294254, 1)}20.3%{transform:scale3d(1, 1.1088711799, 1)}20.4%{transform:scale3d(1, 1.1035340836, 1)}20.5%{transform:scale3d(1, 1.098220425, 1)}20.6%{transform:scale3d(1, 1.0929324494, 1)}20.7%{transform:scale3d(1, 1.0876723592, 1)}20.8%{transform:scale3d(1, 1.0824423127, 1)}20.9%{transform:scale3d(1, 1.077244424, 1)}21%{transform:scale3d(1, 1.0720807627, 1)}21.1%{transform:scale3d(1, 1.0669533531, 1)}21.2%{transform:scale3d(1, 1.0618641745, 1)}21.3%{transform:scale3d(1, 1.0568151601, 1)}21.4%{transform:scale3d(1, 1.0518081972, 1)}21.5%{transform:scale3d(1, 1.0468451269, 1)}21.6%{transform:scale3d(1, 1.0419277436, 1)}21.7%{transform:scale3d(1, 1.037057795, 1)}21.8%{transform:scale3d(1, 1.0322369818, 1)}21.9%{transform:scale3d(1, 1.0274669574, 1)}22%{transform:scale3d(1, 1.0227493281, 1)}22.1%{transform:scale3d(1, 1.0180856527, 1)}22.2%{transform:scale3d(1, 1.0134774425, 1)}22.3%{transform:scale3d(1, 1.0089261609, 1)}22.4%{transform:scale3d(1, 1.004433224, 1)}22.5%{transform:scale3d(1, 1, 1)}22.6%{transform:scale3d(1, 0.9956278095, 1)}22.7%{transform:scale3d(1, 0.9913179255, 1)}22.8%{transform:scale3d(1, 0.987071573, 1)}22.9%{transform:scale3d(1, 0.9828899299, 1)}23%{transform:scale3d(1, 0.9787741263, 1)}23.1%{transform:scale3d(1, 0.974725245, 1)}23.2%{transform:scale3d(1, 0.9707443215, 1)}23.3%{transform:scale3d(1, 0.9668323444, 1)}23.4%{transform:scale3d(1, 0.9629902551, 1)}23.5%{transform:scale3d(1, 0.9592189484, 1)}23.6%{transform:scale3d(1, 0.9555192726, 1)}23.7%{transform:scale3d(1, 0.9518920295, 1)}23.8%{transform:scale3d(1, 0.9483379752, 1)}23.9%{transform:scale3d(1, 0.9448578198, 1)}24%{transform:scale3d(1, 0.9414522278, 1)}24.1%{transform:scale3d(1, 0.9381218187, 1)}24.2%{transform:scale3d(1, 0.9348671671, 1)}24.3%{transform:scale3d(1, 0.9316888031, 1)}24.4%{transform:scale3d(1, 0.9285872125, 1)}24.5%{transform:scale3d(1, 0.9255628374, 1)}24.6%{transform:scale3d(1, 0.9226160765, 1)}24.7%{transform:scale3d(1, 0.9197472854, 1)}24.8%{transform:scale3d(1, 0.9169567774, 1)}24.9%{transform:scale3d(1, 0.9142448233, 1)}25%{transform:scale3d(1, 0.9116116524, 1)}25.1%{transform:scale3d(1, 0.9090574526, 1)}25.2%{transform:scale3d(1, 0.9065823714, 1)}25.3%{transform:scale3d(1, 0.9041865157, 1)}25.4%{transform:scale3d(1, 0.9018699527, 1)}25.5%{transform:scale3d(1, 0.8996327104, 1)}25.6%{transform:scale3d(1, 0.8974747781, 1)}25.7%{transform:scale3d(1, 0.8953961068, 1)}25.8%{transform:scale3d(1, 0.89339661, 1)}25.9%{transform:scale3d(1, 0.8914761641, 1)}26%{transform:scale3d(1, 0.8896346089, 1)}26.1%{transform:scale3d(1, 0.8878717485, 1)}26.2%{transform:scale3d(1, 0.8861873513, 1)}26.3%{transform:scale3d(1, 0.8845811513, 1)}26.4%{transform:scale3d(1, 0.8830528481, 1)}26.5%{transform:scale3d(1, 0.8816021081, 1)}26.6%{transform:scale3d(1, 0.8802285646, 1)}26.7%{transform:scale3d(1, 0.8789318186, 1)}26.8%{transform:scale3d(1, 0.8777114395, 1)}26.9%{transform:scale3d(1, 0.8765669659, 1)}27%{transform:scale3d(1, 0.8754979059, 1)}27.1%{transform:scale3d(1, 0.8745037379, 1)}27.2%{transform:scale3d(1, 0.8735839113, 1)}27.3%{transform:scale3d(1, 0.8727378473, 1)}27.4%{transform:scale3d(1, 0.8719649392, 1)}27.5%{transform:scale3d(1, 0.8712645535, 1)}27.6%{transform:scale3d(1, 0.8706360302, 1)}27.7%{transform:scale3d(1, 0.8700786838, 1)}27.8%{transform:scale3d(1, 0.8695918036, 1)}27.9%{transform:scale3d(1, 0.869174655, 1)}28%{transform:scale3d(1, 0.8688264794, 1)}28.1%{transform:scale3d(1, 0.8685464957, 1)}28.2%{transform:scale3d(1, 0.8683339003, 1)}28.3%{transform:scale3d(1, 0.8681878681, 1)}28.4%{transform:scale3d(1, 0.8681075535, 1)}28.5%{transform:scale3d(1, 0.8680920904, 1)}28.6%{transform:scale3d(1, 0.8681405935, 1)}28.7%{transform:scale3d(1, 0.8682521587, 1)}28.8%{transform:scale3d(1, 0.8684258639, 1)}28.9%{transform:scale3d(1, 0.8686607697, 1)}29%{transform:scale3d(1, 0.8689559199, 1)}29.1%{transform:scale3d(1, 0.8693103425, 1)}29.2%{transform:scale3d(1, 0.8697230501, 1)}29.3%{transform:scale3d(1, 0.8701930409, 1)}29.4%{transform:scale3d(1, 0.8707192991, 1)}29.5%{transform:scale3d(1, 0.8713007957, 1)}29.6%{transform:scale3d(1, 0.8719364892, 1)}29.7%{transform:scale3d(1, 0.8726253261, 1)}29.8%{transform:scale3d(1, 0.8733662419, 1)}29.9%{transform:scale3d(1, 0.8741581615, 1)}30%{transform:scale3d(1, 0.875, 1)}30.1%{transform:scale3d(1, 0.8758906633, 1)}30.2%{transform:scale3d(1, 0.8768290486, 1)}30.3%{transform:scale3d(1, 0.8778140456, 1)}30.4%{transform:scale3d(1, 0.8788445363, 1)}30.5%{transform:scale3d(1, 0.8799193964, 1)}30.6%{transform:scale3d(1, 0.8810374956, 1)}30.7%{transform:scale3d(1, 0.8821976982, 1)}30.8%{transform:scale3d(1, 0.8833988637, 1)}30.9%{transform:scale3d(1, 0.8846398477, 1)}31%{transform:scale3d(1, 0.8859195022, 1)}31.1%{transform:scale3d(1, 0.8872366764, 1)}31.2%{transform:scale3d(1, 0.8885902171, 1)}31.3%{transform:scale3d(1, 0.8899789693, 1)}31.4%{transform:scale3d(1, 0.8914017773, 1)}31.5%{transform:scale3d(1, 0.8928574843, 1)}31.6%{transform:scale3d(1, 0.894344934, 1)}31.7%{transform:scale3d(1, 0.8958629704, 1)}31.8%{transform:scale3d(1, 0.8974104388, 1)}31.9%{transform:scale3d(1, 0.8989861859, 1)}32%{transform:scale3d(1, 0.9005890609, 1)}32.1%{transform:scale3d(1, 0.9022179157, 1)}32.2%{transform:scale3d(1, 0.9038716052, 1)}32.3%{transform:scale3d(1, 0.9055489884, 1)}32.4%{transform:scale3d(1, 0.9072489283, 1)}32.5%{transform:scale3d(1, 0.9089702928, 1)}32.6%{transform:scale3d(1, 0.910711955, 1)}32.7%{transform:scale3d(1, 0.9124727935, 1)}32.8%{transform:scale3d(1, 0.9142516935, 1)}32.9%{transform:scale3d(1, 0.9160475464, 1)}33%{transform:scale3d(1, 0.917859251, 1)}33.1%{transform:scale3d(1, 0.9196857132, 1)}33.2%{transform:scale3d(1, 0.9215258473, 1)}33.3%{transform:scale3d(1, 0.9233785755, 1)}33.4%{transform:scale3d(1, 0.9252428291, 1)}33.5%{transform:scale3d(1, 0.9271175484, 1)}33.6%{transform:scale3d(1, 0.9290016832, 1)}33.7%{transform:scale3d(1, 0.9308941933, 1)}33.8%{transform:scale3d(1, 0.9327940485, 1)}33.9%{transform:scale3d(1, 0.9347002297, 1)}34%{transform:scale3d(1, 0.9366117284, 1)}34.1%{transform:scale3d(1, 0.9385275476, 1)}34.2%{transform:scale3d(1, 0.9404467017, 1)}34.3%{transform:scale3d(1, 0.9423682175, 1)}34.4%{transform:scale3d(1, 0.9442911335, 1)}34.5%{transform:scale3d(1, 0.9462145012, 1)}34.6%{transform:scale3d(1, 0.9481373848, 1)}34.7%{transform:scale3d(1, 0.9500588616, 1)}34.8%{transform:scale3d(1, 0.9519780222, 1)}34.9%{transform:scale3d(1, 0.953893971, 1)}35%{transform:scale3d(1, 0.9558058262, 1)}35.1%{transform:scale3d(1, 0.9577127201, 1)}35.2%{transform:scale3d(1, 0.9596137993, 1)}35.3%{transform:scale3d(1, 0.9615082252, 1)}35.4%{transform:scale3d(1, 0.9633951737, 1)}35.5%{transform:scale3d(1, 0.9652738357, 1)}35.6%{transform:scale3d(1, 0.9671434174, 1)}35.7%{transform:scale3d(1, 0.9690031401, 1)}35.8%{transform:scale3d(1, 0.9708522408, 1)}35.9%{transform:scale3d(1, 0.972689972, 1)}36%{transform:scale3d(1, 0.974515602, 1)}36.1%{transform:scale3d(1, 0.976328415, 1)}36.2%{transform:scale3d(1, 0.9781277114, 1)}36.3%{transform:scale3d(1, 0.9799128075, 1)}36.4%{transform:scale3d(1, 0.9816830362, 1)}36.5%{transform:scale3d(1, 0.9834377466, 1)}36.6%{transform:scale3d(1, 0.9851763041, 1)}36.7%{transform:scale3d(1, 0.9868980909, 1)}36.8%{transform:scale3d(1, 0.9886025058, 1)}36.9%{transform:scale3d(1, 0.9902889641, 1)}37%{transform:scale3d(1, 0.9919568979, 1)}37.1%{transform:scale3d(1, 0.9936057561, 1)}37.2%{transform:scale3d(1, 0.9952350045, 1)}37.3%{transform:scale3d(1, 0.9968441256, 1)}37.4%{transform:scale3d(1, 0.9984326186, 1)}37.5%{transform:scale3d(1, 1, 1)}37.6%{transform:scale3d(1, 1.0015458028, 1)}37.7%{transform:scale3d(1, 1.0030695769, 1)}37.8%{transform:scale3d(1, 1.0045708892, 1)}37.9%{transform:scale3d(1, 1.0060493233, 1)}38%{transform:scale3d(1, 1.0075044796, 1)}38.1%{transform:scale3d(1, 1.0089359753, 1)}38.2%{transform:scale3d(1, 1.0103434443, 1)}38.3%{transform:scale3d(1, 1.0117265371, 1)}38.4%{transform:scale3d(1, 1.0130849208, 1)}38.5%{transform:scale3d(1, 1.0144182791, 1)}38.6%{transform:scale3d(1, 1.015726312, 1)}38.7%{transform:scale3d(1, 1.0170087361, 1)}38.8%{transform:scale3d(1, 1.018265284, 1)}38.9%{transform:scale3d(1, 1.0194957048, 1)}39%{transform:scale3d(1, 1.0206997634, 1)}39.1%{transform:scale3d(1, 1.0218772408, 1)}39.2%{transform:scale3d(1, 1.0230279339, 1)}39.3%{transform:scale3d(1, 1.0241516553, 1)}39.4%{transform:scale3d(1, 1.0252482332, 1)}39.5%{transform:scale3d(1, 1.0263175112, 1)}39.6%{transform:scale3d(1, 1.0273593485, 1)}39.7%{transform:scale3d(1, 1.0283736193, 1)}39.8%{transform:scale3d(1, 1.0293602129, 1)}39.9%{transform:scale3d(1, 1.0303190335, 1)}40%{transform:scale3d(1, 1.03125, 1)}40.1%{transform:scale3d(1, 1.032153046, 1)}40.2%{transform:scale3d(1, 1.0330281193, 1)}40.3%{transform:scale3d(1, 1.0338751822, 1)}40.4%{transform:scale3d(1, 1.0346942109, 1)}40.5%{transform:scale3d(1, 1.0354851955, 1)}40.6%{transform:scale3d(1, 1.0362481398, 1)}40.7%{transform:scale3d(1, 1.0369830611, 1)}40.8%{transform:scale3d(1, 1.03768999, 1)}40.9%{transform:scale3d(1, 1.0383689701, 1)}41%{transform:scale3d(1, 1.0390200582, 1)}41.1%{transform:scale3d(1, 1.0396433235, 1)}41.2%{transform:scale3d(1, 1.0402388478, 1)}41.3%{transform:scale3d(1, 1.0408067253, 1)}41.4%{transform:scale3d(1, 1.0413470621, 1)}41.5%{transform:scale3d(1, 1.0418599761, 1)}41.6%{transform:scale3d(1, 1.0423455971, 1)}41.7%{transform:scale3d(1, 1.042804066, 1)}41.8%{transform:scale3d(1, 1.0432355352, 1)}41.9%{transform:scale3d(1, 1.0436401677, 1)}42%{transform:scale3d(1, 1.0440181375, 1)}42.1%{transform:scale3d(1, 1.044369629, 1)}42.2%{transform:scale3d(1, 1.0446948368, 1)}42.3%{transform:scale3d(1, 1.0449939656, 1)}42.4%{transform:scale3d(1, 1.0452672299, 1)}42.5%{transform:scale3d(1, 1.0455148536, 1)}42.6%{transform:scale3d(1, 1.0457370701, 1)}42.7%{transform:scale3d(1, 1.0459341219, 1)}42.8%{transform:scale3d(1, 1.04610626, 1)}42.9%{transform:scale3d(1, 1.0462537443, 1)}43%{transform:scale3d(1, 1.0463768429, 1)}43.1%{transform:scale3d(1, 1.0464758321, 1)}43.2%{transform:scale3d(1, 1.046550996, 1)}43.3%{transform:scale3d(1, 1.0466026261, 1)}43.4%{transform:scale3d(1, 1.0466310217, 1)}43.5%{transform:scale3d(1, 1.0466364887, 1)}43.6%{transform:scale3d(1, 1.0466193402, 1)}43.7%{transform:scale3d(1, 1.046579896, 1)}43.8%{transform:scale3d(1, 1.0465184819, 1)}43.9%{transform:scale3d(1, 1.0464354302, 1)}44%{transform:scale3d(1, 1.0463310788, 1)}44.1%{transform:scale3d(1, 1.0462057715, 1)}44.2%{transform:scale3d(1, 1.0460598573, 1)}44.3%{transform:scale3d(1, 1.0458936905, 1)}44.4%{transform:scale3d(1, 1.0457076301, 1)}44.5%{transform:scale3d(1, 1.04550204, 1)}44.6%{transform:scale3d(1, 1.0452772885, 1)}44.7%{transform:scale3d(1, 1.0450337478, 1)}44.8%{transform:scale3d(1, 1.0447717946, 1)}44.9%{transform:scale3d(1, 1.0444918087, 1)}45%{transform:scale3d(1, 1.0441941738, 1)}45.1%{transform:scale3d(1, 1.0438792768, 1)}45.2%{transform:scale3d(1, 1.0435475075, 1)}45.3%{transform:scale3d(1, 1.0431992585, 1)}45.4%{transform:scale3d(1, 1.042834925, 1)}45.5%{transform:scale3d(1, 1.0424549045, 1)}45.6%{transform:scale3d(1, 1.0420595968, 1)}45.7%{transform:scale3d(1, 1.0416494032, 1)}45.8%{transform:scale3d(1, 1.0412247271, 1)}45.9%{transform:scale3d(1, 1.040785973, 1)}46%{transform:scale3d(1, 1.0403335468, 1)}46.1%{transform:scale3d(1, 1.0398678554, 1)}46.2%{transform:scale3d(1, 1.0393893065, 1)}46.3%{transform:scale3d(1, 1.0388983084, 1)}46.4%{transform:scale3d(1, 1.0383952699, 1)}46.5%{transform:scale3d(1, 1.0378805997, 1)}46.6%{transform:scale3d(1, 1.0373547068, 1)}46.7%{transform:scale3d(1, 1.0368179999, 1)}46.8%{transform:scale3d(1, 1.0362708872, 1)}46.9%{transform:scale3d(1, 1.0357137765, 1)}47%{transform:scale3d(1, 1.0351470746, 1)}47.1%{transform:scale3d(1, 1.0345711875, 1)}47.2%{transform:scale3d(1, 1.0339865199, 1)}47.3%{transform:scale3d(1, 1.0333934754, 1)}47.4%{transform:scale3d(1, 1.0327924559, 1)}47.5%{transform:scale3d(1, 1.0321838616, 1)}47.6%{transform:scale3d(1, 1.0315680911, 1)}47.7%{transform:scale3d(1, 1.0309455406, 1)}47.8%{transform:scale3d(1, 1.0303166045, 1)}47.9%{transform:scale3d(1, 1.0296816746, 1)}48%{transform:scale3d(1, 1.0290411403, 1)}48.1%{transform:scale3d(1, 1.0283953884, 1)}48.2%{transform:scale3d(1, 1.0277448028, 1)}48.3%{transform:scale3d(1, 1.0270897644, 1)}48.4%{transform:scale3d(1, 1.0264306512, 1)}48.5%{transform:scale3d(1, 1.0257678379, 1)}48.6%{transform:scale3d(1, 1.0251016956, 1)}48.7%{transform:scale3d(1, 1.0244325923, 1)}48.8%{transform:scale3d(1, 1.023760892, 1)}48.9%{transform:scale3d(1, 1.0230869552, 1)}49%{transform:scale3d(1, 1.0224111383, 1)}49.1%{transform:scale3d(1, 1.021733794, 1)}49.2%{transform:scale3d(1, 1.0210552705, 1)}49.3%{transform:scale3d(1, 1.0203759121, 1)}49.4%{transform:scale3d(1, 1.0196960586, 1)}49.5%{transform:scale3d(1, 1.0190160455, 1)}49.6%{transform:scale3d(1, 1.0183362034, 1)}49.7%{transform:scale3d(1, 1.0176568588, 1)}49.8%{transform:scale3d(1, 1.0169783331, 1)}49.9%{transform:scale3d(1, 1.0163009429, 1)}50%{transform:scale3d(1, 1.015625, 1)}50.1%{transform:scale3d(1, 1.0149508112, 1)}50.2%{transform:scale3d(1, 1.0142786782, 1)}50.3%{transform:scale3d(1, 1.0136088975, 1)}50.4%{transform:scale3d(1, 1.0129417605, 1)}50.5%{transform:scale3d(1, 1.0122775531, 1)}50.6%{transform:scale3d(1, 1.0116165562, 1)}50.7%{transform:scale3d(1, 1.0109590449, 1)}50.8%{transform:scale3d(1, 1.0103052891, 1)}50.9%{transform:scale3d(1, 1.009655553, 1)}51%{transform:scale3d(1, 1.0090100953, 1)}51.1%{transform:scale3d(1, 1.0083691691, 1)}51.2%{transform:scale3d(1, 1.0077330218, 1)}51.3%{transform:scale3d(1, 1.007101895, 1)}51.4%{transform:scale3d(1, 1.0064760246, 1)}51.5%{transform:scale3d(1, 1.0058556409, 1)}51.6%{transform:scale3d(1, 1.0052409679, 1)}51.7%{transform:scale3d(1, 1.0046322244, 1)}51.8%{transform:scale3d(1, 1.0040296227, 1)}51.9%{transform:scale3d(1, 1.0034333697, 1)}52%{transform:scale3d(1, 1.002843666, 1)}52.1%{transform:scale3d(1, 1.0022607066, 1)}52.2%{transform:scale3d(1, 1.0016846803, 1)}52.3%{transform:scale3d(1, 1.0011157701, 1)}52.4%{transform:scale3d(1, 1.000554153, 1)}52.5%{transform:scale3d(1, 1, 1)}52.6%{transform:scale3d(1, 0.9994534762, 1)}52.7%{transform:scale3d(1, 0.9989147407, 1)}52.8%{transform:scale3d(1, 0.9983839466, 1)}52.9%{transform:scale3d(1, 0.9978612412, 1)}53%{transform:scale3d(1, 0.9973467658, 1)}53.1%{transform:scale3d(1, 0.9968406556, 1)}53.2%{transform:scale3d(1, 0.9963430402, 1)}53.3%{transform:scale3d(1, 0.9958540431, 1)}53.4%{transform:scale3d(1, 0.9953737819, 1)}53.5%{transform:scale3d(1, 0.9949023686, 1)}53.6%{transform:scale3d(1, 0.9944399091, 1)}53.7%{transform:scale3d(1, 0.9939865037, 1)}53.8%{transform:scale3d(1, 0.9935422469, 1)}53.9%{transform:scale3d(1, 0.9931072275, 1)}54%{transform:scale3d(1, 0.9926815285, 1)}54.1%{transform:scale3d(1, 0.9922652273, 1)}54.2%{transform:scale3d(1, 0.9918583959, 1)}54.3%{transform:scale3d(1, 0.9914611004, 1)}54.4%{transform:scale3d(1, 0.9910734016, 1)}54.5%{transform:scale3d(1, 0.9906953547, 1)}54.6%{transform:scale3d(1, 0.9903270096, 1)}54.7%{transform:scale3d(1, 0.9899684107, 1)}54.8%{transform:scale3d(1, 0.9896195972, 1)}54.9%{transform:scale3d(1, 0.9892806029, 1)}55%{transform:scale3d(1, 0.9889514565, 1)}55.1%{transform:scale3d(1, 0.9886321816, 1)}55.2%{transform:scale3d(1, 0.9883227964, 1)}55.3%{transform:scale3d(1, 0.9880233145, 1)}55.4%{transform:scale3d(1, 0.9877337441, 1)}55.5%{transform:scale3d(1, 0.9874540888, 1)}55.6%{transform:scale3d(1, 0.9871843473, 1)}55.7%{transform:scale3d(1, 0.9869245133, 1)}55.8%{transform:scale3d(1, 0.9866745763, 1)}55.9%{transform:scale3d(1, 0.9864345205, 1)}56%{transform:scale3d(1, 0.9862043261, 1)}56.1%{transform:scale3d(1, 0.9859839686, 1)}56.2%{transform:scale3d(1, 0.9857734189, 1)}56.3%{transform:scale3d(1, 0.9855726439, 1)}56.4%{transform:scale3d(1, 0.985381606, 1)}56.5%{transform:scale3d(1, 0.9852002635, 1)}56.6%{transform:scale3d(1, 0.9850285706, 1)}56.7%{transform:scale3d(1, 0.9848664773, 1)}56.8%{transform:scale3d(1, 0.9847139299, 1)}56.9%{transform:scale3d(1, 0.9845708707, 1)}57%{transform:scale3d(1, 0.9844372382, 1)}57.1%{transform:scale3d(1, 0.9843129672, 1)}57.2%{transform:scale3d(1, 0.9841979889, 1)}57.3%{transform:scale3d(1, 0.9840922309, 1)}57.4%{transform:scale3d(1, 0.9839956174, 1)}57.5%{transform:scale3d(1, 0.9839080692, 1)}57.6%{transform:scale3d(1, 0.9838295038, 1)}57.7%{transform:scale3d(1, 0.9837598355, 1)}57.8%{transform:scale3d(1, 0.9836989755, 1)}57.9%{transform:scale3d(1, 0.9836468319, 1)}58%{transform:scale3d(1, 0.9836033099, 1)}58.1%{transform:scale3d(1, 0.983568312, 1)}58.2%{transform:scale3d(1, 0.9835417375, 1)}58.3%{transform:scale3d(1, 0.9835234835, 1)}58.4%{transform:scale3d(1, 0.9835134442, 1)}58.5%{transform:scale3d(1, 0.9835115113, 1)}58.6%{transform:scale3d(1, 0.9835175742, 1)}58.7%{transform:scale3d(1, 0.9835315198, 1)}58.8%{transform:scale3d(1, 0.983553233, 1)}58.9%{transform:scale3d(1, 0.9835825962, 1)}59%{transform:scale3d(1, 0.98361949, 1)}59.1%{transform:scale3d(1, 0.9836637928, 1)}59.2%{transform:scale3d(1, 0.9837153813, 1)}59.3%{transform:scale3d(1, 0.9837741301, 1)}59.4%{transform:scale3d(1, 0.9838399124, 1)}59.5%{transform:scale3d(1, 0.9839125995, 1)}59.6%{transform:scale3d(1, 0.9839920611, 1)}59.7%{transform:scale3d(1, 0.9840781658, 1)}59.8%{transform:scale3d(1, 0.9841707802, 1)}59.9%{transform:scale3d(1, 0.9842697702, 1)}60%{transform:scale3d(1, 0.984375, 1)}60.1%{transform:scale3d(1, 0.9844863329, 1)}60.2%{transform:scale3d(1, 0.9846036311, 1)}60.3%{transform:scale3d(1, 0.9847267557, 1)}60.4%{transform:scale3d(1, 0.984855567, 1)}60.5%{transform:scale3d(1, 0.9849899246, 1)}60.6%{transform:scale3d(1, 0.9851296869, 1)}60.7%{transform:scale3d(1, 0.9852747123, 1)}60.8%{transform:scale3d(1, 0.985424858, 1)}60.9%{transform:scale3d(1, 0.985579981, 1)}61%{transform:scale3d(1, 0.9857399378, 1)}61.1%{transform:scale3d(1, 0.9859045846, 1)}61.2%{transform:scale3d(1, 0.9860737771, 1)}61.3%{transform:scale3d(1, 0.9862473712, 1)}61.4%{transform:scale3d(1, 0.9864252222, 1)}61.5%{transform:scale3d(1, 0.9866071855, 1)}61.6%{transform:scale3d(1, 0.9867931168, 1)}61.7%{transform:scale3d(1, 0.9869828713, 1)}61.8%{transform:scale3d(1, 0.9871763048, 1)}61.9%{transform:scale3d(1, 0.9873732732, 1)}62%{transform:scale3d(1, 0.9875736326, 1)}62.1%{transform:scale3d(1, 0.9877772395, 1)}62.2%{transform:scale3d(1, 0.9879839507, 1)}62.3%{transform:scale3d(1, 0.9881936235, 1)}62.4%{transform:scale3d(1, 0.988406116, 1)}62.5%{transform:scale3d(1, 0.9886212866, 1)}62.6%{transform:scale3d(1, 0.9888389944, 1)}62.7%{transform:scale3d(1, 0.9890590992, 1)}62.8%{transform:scale3d(1, 0.9892814617, 1)}62.9%{transform:scale3d(1, 0.9895059433, 1)}63%{transform:scale3d(1, 0.9897324064, 1)}63.1%{transform:scale3d(1, 0.9899607142, 1)}63.2%{transform:scale3d(1, 0.9901907309, 1)}63.3%{transform:scale3d(1, 0.9904223219, 1)}63.4%{transform:scale3d(1, 0.9906553536, 1)}63.5%{transform:scale3d(1, 0.9908896936, 1)}63.6%{transform:scale3d(1, 0.9911252104, 1)}63.7%{transform:scale3d(1, 0.9913617742, 1)}63.8%{transform:scale3d(1, 0.9915992561, 1)}63.9%{transform:scale3d(1, 0.9918375287, 1)}64%{transform:scale3d(1, 0.9920764661, 1)}64.1%{transform:scale3d(1, 0.9923159434, 1)}64.2%{transform:scale3d(1, 0.9925558377, 1)}64.3%{transform:scale3d(1, 0.9927960272, 1)}64.4%{transform:scale3d(1, 0.9930363917, 1)}64.5%{transform:scale3d(1, 0.9932768127, 1)}64.6%{transform:scale3d(1, 0.9935171731, 1)}64.7%{transform:scale3d(1, 0.9937573577, 1)}64.8%{transform:scale3d(1, 0.9939972528, 1)}64.9%{transform:scale3d(1, 0.9942367464, 1)}65%{transform:scale3d(1, 0.9944757283, 1)}65.1%{transform:scale3d(1, 0.99471409, 1)}65.2%{transform:scale3d(1, 0.9949517249, 1)}65.3%{transform:scale3d(1, 0.9951885282, 1)}65.4%{transform:scale3d(1, 0.9954243967, 1)}65.5%{transform:scale3d(1, 0.9956592295, 1)}65.6%{transform:scale3d(1, 0.9958929272, 1)}65.7%{transform:scale3d(1, 0.9961253925, 1)}65.8%{transform:scale3d(1, 0.9963565301, 1)}65.9%{transform:scale3d(1, 0.9965862465, 1)}66%{transform:scale3d(1, 0.9968144502, 1)}66.1%{transform:scale3d(1, 0.9970410519, 1)}66.2%{transform:scale3d(1, 0.9972659639, 1)}66.3%{transform:scale3d(1, 0.9974891009, 1)}66.4%{transform:scale3d(1, 0.9977103795, 1)}66.5%{transform:scale3d(1, 0.9979297183, 1)}66.6%{transform:scale3d(1, 0.998147038, 1)}66.7%{transform:scale3d(1, 0.9983622614, 1)}66.8%{transform:scale3d(1, 0.9985753132, 1)}66.9%{transform:scale3d(1, 0.9987861205, 1)}67%{transform:scale3d(1, 0.9989946122, 1)}67.1%{transform:scale3d(1, 0.9992007195, 1)}67.2%{transform:scale3d(1, 0.9994043756, 1)}67.3%{transform:scale3d(1, 0.9996055157, 1)}67.4%{transform:scale3d(1, 0.9998040773, 1)}67.5%{transform:scale3d(1, 1, 1)}67.6%{transform:scale3d(1, 1.0001932253, 1)}67.7%{transform:scale3d(1, 1.0003836971, 1)}67.8%{transform:scale3d(1, 1.0005713611, 1)}67.9%{transform:scale3d(1, 1.0007561654, 1)}68%{transform:scale3d(1, 1.00093806, 1)}68.1%{transform:scale3d(1, 1.0011169969, 1)}68.2%{transform:scale3d(1, 1.0012929305, 1)}68.3%{transform:scale3d(1, 1.0014658171, 1)}68.4%{transform:scale3d(1, 1.0016356151, 1)}68.5%{transform:scale3d(1, 1.0018022849, 1)}68.6%{transform:scale3d(1, 1.001965789, 1)}68.7%{transform:scale3d(1, 1.002126092, 1)}68.8%{transform:scale3d(1, 1.0022831605, 1)}68.9%{transform:scale3d(1, 1.0024369631, 1)}69%{transform:scale3d(1, 1.0025874704, 1)}69.1%{transform:scale3d(1, 1.0027346551, 1)}69.2%{transform:scale3d(1, 1.0028784917, 1)}69.3%{transform:scale3d(1, 1.0030189569, 1)}69.4%{transform:scale3d(1, 1.0031560291, 1)}69.5%{transform:scale3d(1, 1.0032896889, 1)}69.6%{transform:scale3d(1, 1.0034199186, 1)}69.7%{transform:scale3d(1, 1.0035467024, 1)}69.8%{transform:scale3d(1, 1.0036700266, 1)}69.9%{transform:scale3d(1, 1.0037898792, 1)}70%{transform:scale3d(1, 1.00390625, 1)}70.1%{transform:scale3d(1, 1.0040191307, 1)}70.2%{transform:scale3d(1, 1.0041285149, 1)}70.3%{transform:scale3d(1, 1.0042343978, 1)}70.4%{transform:scale3d(1, 1.0043367764, 1)}70.5%{transform:scale3d(1, 1.0044356494, 1)}70.6%{transform:scale3d(1, 1.0045310175, 1)}70.7%{transform:scale3d(1, 1.0046228826, 1)}70.8%{transform:scale3d(1, 1.0047112487, 1)}70.9%{transform:scale3d(1, 1.0047961213, 1)}71%{transform:scale3d(1, 1.0048775073, 1)}71.1%{transform:scale3d(1, 1.0049554154, 1)}71.2%{transform:scale3d(1, 1.005029856, 1)}71.3%{transform:scale3d(1, 1.0051008407, 1)}71.4%{transform:scale3d(1, 1.0051683828, 1)}71.5%{transform:scale3d(1, 1.005232497, 1)}71.6%{transform:scale3d(1, 1.0052931996, 1)}71.7%{transform:scale3d(1, 1.0053505083, 1)}71.8%{transform:scale3d(1, 1.0054044419, 1)}71.9%{transform:scale3d(1, 1.005455021, 1)}72%{transform:scale3d(1, 1.0055022672, 1)}72.1%{transform:scale3d(1, 1.0055462036, 1)}72.2%{transform:scale3d(1, 1.0055868546, 1)}72.3%{transform:scale3d(1, 1.0056242457, 1)}72.4%{transform:scale3d(1, 1.0056584037, 1)}72.5%{transform:scale3d(1, 1.0056893567, 1)}72.6%{transform:scale3d(1, 1.0057171338, 1)}72.7%{transform:scale3d(1, 1.0057417652, 1)}72.8%{transform:scale3d(1, 1.0057632825, 1)}72.9%{transform:scale3d(1, 1.005781718, 1)}73%{transform:scale3d(1, 1.0057971054, 1)}73.1%{transform:scale3d(1, 1.005809479, 1)}73.2%{transform:scale3d(1, 1.0058188745, 1)}73.3%{transform:scale3d(1, 1.0058253283, 1)}73.4%{transform:scale3d(1, 1.0058288777, 1)}73.5%{transform:scale3d(1, 1.0058295611, 1)}73.6%{transform:scale3d(1, 1.0058274175, 1)}73.7%{transform:scale3d(1, 1.005822487, 1)}73.8%{transform:scale3d(1, 1.0058148102, 1)}73.9%{transform:scale3d(1, 1.0058044288, 1)}74%{transform:scale3d(1, 1.0057913849, 1)}74.1%{transform:scale3d(1, 1.0057757214, 1)}74.2%{transform:scale3d(1, 1.0057574822, 1)}74.3%{transform:scale3d(1, 1.0057367113, 1)}74.4%{transform:scale3d(1, 1.0057134538, 1)}74.5%{transform:scale3d(1, 1.005687755, 1)}74.6%{transform:scale3d(1, 1.0056596611, 1)}74.7%{transform:scale3d(1, 1.0056292185, 1)}74.8%{transform:scale3d(1, 1.0055964743, 1)}74.9%{transform:scale3d(1, 1.0055614761, 1)}75%{transform:scale3d(1, 1.0055242717, 1)}75.1%{transform:scale3d(1, 1.0054849096, 1)}75.2%{transform:scale3d(1, 1.0054434384, 1)}75.3%{transform:scale3d(1, 1.0053999073, 1)}75.4%{transform:scale3d(1, 1.0053543656, 1)}75.5%{transform:scale3d(1, 1.0053068631, 1)}75.6%{transform:scale3d(1, 1.0052574496, 1)}75.7%{transform:scale3d(1, 1.0052061754, 1)}75.8%{transform:scale3d(1, 1.0051530909, 1)}75.9%{transform:scale3d(1, 1.0050982466, 1)}76%{transform:scale3d(1, 1.0050416933, 1)}76.1%{transform:scale3d(1, 1.0049834819, 1)}76.2%{transform:scale3d(1, 1.0049236633, 1)}76.3%{transform:scale3d(1, 1.0048622886, 1)}76.4%{transform:scale3d(1, 1.0047994087, 1)}76.5%{transform:scale3d(1, 1.004735075, 1)}76.6%{transform:scale3d(1, 1.0046693384, 1)}76.7%{transform:scale3d(1, 1.00460225, 1)}76.8%{transform:scale3d(1, 1.0045338609, 1)}76.9%{transform:scale3d(1, 1.0044642221, 1)}77%{transform:scale3d(1, 1.0043933843, 1)}77.1%{transform:scale3d(1, 1.0043213984, 1)}77.2%{transform:scale3d(1, 1.004248315, 1)}77.3%{transform:scale3d(1, 1.0041741844, 1)}77.4%{transform:scale3d(1, 1.004099057, 1)}77.5%{transform:scale3d(1, 1.0040229827, 1)}77.6%{transform:scale3d(1, 1.0039460114, 1)}77.7%{transform:scale3d(1, 1.0038681926, 1)}77.8%{transform:scale3d(1, 1.0037895756, 1)}77.9%{transform:scale3d(1, 1.0037102093, 1)}78%{transform:scale3d(1, 1.0036301425, 1)}78.1%{transform:scale3d(1, 1.0035494236, 1)}78.2%{transform:scale3d(1, 1.0034681003, 1)}78.3%{transform:scale3d(1, 1.0033862206, 1)}78.4%{transform:scale3d(1, 1.0033038314, 1)}78.5%{transform:scale3d(1, 1.0032209797, 1)}78.6%{transform:scale3d(1, 1.003137712, 1)}78.7%{transform:scale3d(1, 1.003054074, 1)}78.8%{transform:scale3d(1, 1.0029701115, 1)}78.9%{transform:scale3d(1, 1.0028858694, 1)}79%{transform:scale3d(1, 1.0028013923, 1)}79.1%{transform:scale3d(1, 1.0027167242, 1)}79.2%{transform:scale3d(1, 1.0026319088, 1)}79.3%{transform:scale3d(1, 1.002546989, 1)}79.4%{transform:scale3d(1, 1.0024620073, 1)}79.5%{transform:scale3d(1, 1.0023770057, 1)}79.6%{transform:scale3d(1, 1.0022920254, 1)}79.7%{transform:scale3d(1, 1.0022071074, 1)}79.8%{transform:scale3d(1, 1.0021222916, 1)}79.9%{transform:scale3d(1, 1.0020376179, 1)}80%{transform:scale3d(1, 1.001953125, 1)}80.1%{transform:scale3d(1, 1.0018688514, 1)}80.2%{transform:scale3d(1, 1.0017848348, 1)}80.3%{transform:scale3d(1, 1.0017011122, 1)}80.4%{transform:scale3d(1, 1.0016177201, 1)}80.5%{transform:scale3d(1, 1.0015346941, 1)}80.6%{transform:scale3d(1, 1.0014520695, 1)}80.7%{transform:scale3d(1, 1.0013698806, 1)}80.8%{transform:scale3d(1, 1.0012881611, 1)}80.9%{transform:scale3d(1, 1.0012069441, 1)}81%{transform:scale3d(1, 1.0011262619, 1)}81.1%{transform:scale3d(1, 1.0010461461, 1)}81.2%{transform:scale3d(1, 1.0009666277, 1)}81.3%{transform:scale3d(1, 1.0008877369, 1)}81.4%{transform:scale3d(1, 1.0008095031, 1)}81.5%{transform:scale3d(1, 1.0007319551, 1)}81.6%{transform:scale3d(1, 1.000655121, 1)}81.7%{transform:scale3d(1, 1.000579028, 1)}81.8%{transform:scale3d(1, 1.0005037028, 1)}81.9%{transform:scale3d(1, 1.0004291712, 1)}82%{transform:scale3d(1, 1.0003554583, 1)}82.1%{transform:scale3d(1, 1.0002825883, 1)}82.2%{transform:scale3d(1, 1.000210585, 1)}82.3%{transform:scale3d(1, 1.0001394713, 1)}82.4%{transform:scale3d(1, 1.0000692691, 1)}82.5%{transform:scale3d(1, 1, 1)}82.6%{transform:scale3d(1, 0.9999316845, 1)}82.7%{transform:scale3d(1, 0.9998643426, 1)}82.8%{transform:scale3d(1, 0.9997979933, 1)}82.9%{transform:scale3d(1, 0.9997326552, 1)}83%{transform:scale3d(1, 0.9996683457, 1)}83.1%{transform:scale3d(1, 0.999605082, 1)}83.2%{transform:scale3d(1, 0.99954288, 1)}83.3%{transform:scale3d(1, 0.9994817554, 1)}83.4%{transform:scale3d(1, 0.9994217227, 1)}83.5%{transform:scale3d(1, 0.9993627961, 1)}83.6%{transform:scale3d(1, 0.9993049886, 1)}83.7%{transform:scale3d(1, 0.999248313, 1)}83.8%{transform:scale3d(1, 0.9991927809, 1)}83.9%{transform:scale3d(1, 0.9991384034, 1)}84%{transform:scale3d(1, 0.9990851911, 1)}84.1%{transform:scale3d(1, 0.9990331534, 1)}84.2%{transform:scale3d(1, 0.9989822995, 1)}84.3%{transform:scale3d(1, 0.9989326375, 1)}84.4%{transform:scale3d(1, 0.9988841752, 1)}84.5%{transform:scale3d(1, 0.9988369193, 1)}84.6%{transform:scale3d(1, 0.9987908762, 1)}84.7%{transform:scale3d(1, 0.9987460513, 1)}84.8%{transform:scale3d(1, 0.9987024496, 1)}84.9%{transform:scale3d(1, 0.9986600754, 1)}85%{transform:scale3d(1, 0.9986189321, 1)}85.1%{transform:scale3d(1, 0.9985790227, 1)}85.2%{transform:scale3d(1, 0.9985403496, 1)}85.3%{transform:scale3d(1, 0.9985029143, 1)}85.4%{transform:scale3d(1, 0.998466718, 1)}85.5%{transform:scale3d(1, 0.9984317611, 1)}85.6%{transform:scale3d(1, 0.9983980434, 1)}85.7%{transform:scale3d(1, 0.9983655642, 1)}85.8%{transform:scale3d(1, 0.998334322, 1)}85.9%{transform:scale3d(1, 0.9983043151, 1)}86%{transform:scale3d(1, 0.9982755408, 1)}86.1%{transform:scale3d(1, 0.9982479961, 1)}86.2%{transform:scale3d(1, 0.9982216774, 1)}86.3%{transform:scale3d(1, 0.9981965805, 1)}86.4%{transform:scale3d(1, 0.9981727008, 1)}86.5%{transform:scale3d(1, 0.9981500329, 1)}86.6%{transform:scale3d(1, 0.9981285713, 1)}86.7%{transform:scale3d(1, 0.9981083097, 1)}86.8%{transform:scale3d(1, 0.9980892412, 1)}86.9%{transform:scale3d(1, 0.9980713588, 1)}87%{transform:scale3d(1, 0.9980546548, 1)}87.1%{transform:scale3d(1, 0.9980391209, 1)}87.2%{transform:scale3d(1, 0.9980247486, 1)}87.3%{transform:scale3d(1, 0.9980115289, 1)}87.4%{transform:scale3d(1, 0.9979994522, 1)}87.5%{transform:scale3d(1, 0.9979885086, 1)}87.6%{transform:scale3d(1, 0.997978688, 1)}87.7%{transform:scale3d(1, 0.9979699794, 1)}87.8%{transform:scale3d(1, 0.9979623719, 1)}87.9%{transform:scale3d(1, 0.997955854, 1)}88%{transform:scale3d(1, 0.9979504137, 1)}88.1%{transform:scale3d(1, 0.997946039, 1)}88.2%{transform:scale3d(1, 0.9979427172, 1)}88.3%{transform:scale3d(1, 0.9979404354, 1)}88.4%{transform:scale3d(1, 0.9979391805, 1)}88.5%{transform:scale3d(1, 0.9979389389, 1)}88.6%{transform:scale3d(1, 0.9979396968, 1)}88.7%{transform:scale3d(1, 0.99794144, 1)}88.8%{transform:scale3d(1, 0.9979441541, 1)}88.9%{transform:scale3d(1, 0.9979478245, 1)}89%{transform:scale3d(1, 0.9979524362, 1)}89.1%{transform:scale3d(1, 0.9979579741, 1)}89.2%{transform:scale3d(1, 0.9979644227, 1)}89.3%{transform:scale3d(1, 0.9979717663, 1)}89.4%{transform:scale3d(1, 0.997979989, 1)}89.5%{transform:scale3d(1, 0.9979890749, 1)}89.6%{transform:scale3d(1, 0.9979990076, 1)}89.7%{transform:scale3d(1, 0.9980097707, 1)}89.8%{transform:scale3d(1, 0.9980213475, 1)}89.9%{transform:scale3d(1, 0.9980337213, 1)}90%{transform:scale3d(1, 0.998046875, 1)}90.1%{transform:scale3d(1, 0.9980607916, 1)}90.2%{transform:scale3d(1, 0.9980754539, 1)}90.3%{transform:scale3d(1, 0.9980908445, 1)}90.4%{transform:scale3d(1, 0.9981069459, 1)}90.5%{transform:scale3d(1, 0.9981237406, 1)}90.6%{transform:scale3d(1, 0.9981412109, 1)}90.7%{transform:scale3d(1, 0.998159339, 1)}90.8%{transform:scale3d(1, 0.9981781072, 1)}90.9%{transform:scale3d(1, 0.9981974976, 1)}91%{transform:scale3d(1, 0.9982174922, 1)}91.1%{transform:scale3d(1, 0.9982380731, 1)}91.2%{transform:scale3d(1, 0.9982592221, 1)}91.3%{transform:scale3d(1, 0.9982809214, 1)}91.4%{transform:scale3d(1, 0.9983031528, 1)}91.5%{transform:scale3d(1, 0.9983258982, 1)}91.6%{transform:scale3d(1, 0.9983491396, 1)}91.7%{transform:scale3d(1, 0.9983728589, 1)}91.8%{transform:scale3d(1, 0.9983970381, 1)}91.9%{transform:scale3d(1, 0.9984216592, 1)}92%{transform:scale3d(1, 0.9984467041, 1)}92.1%{transform:scale3d(1, 0.9984721549, 1)}92.2%{transform:scale3d(1, 0.9984979938, 1)}92.3%{transform:scale3d(1, 0.9985242029, 1)}92.4%{transform:scale3d(1, 0.9985507645, 1)}92.5%{transform:scale3d(1, 0.9985776608, 1)}92.6%{transform:scale3d(1, 0.9986048743, 1)}92.7%{transform:scale3d(1, 0.9986323874, 1)}92.8%{transform:scale3d(1, 0.9986601827, 1)}92.9%{transform:scale3d(1, 0.9986882429, 1)}93%{transform:scale3d(1, 0.9987165508, 1)}93.1%{transform:scale3d(1, 0.9987450893, 1)}93.2%{transform:scale3d(1, 0.9987738414, 1)}93.3%{transform:scale3d(1, 0.9988027902, 1)}93.4%{transform:scale3d(1, 0.9988319192, 1)}93.5%{transform:scale3d(1, 0.9988612117, 1)}93.6%{transform:scale3d(1, 0.9988906513, 1)}93.7%{transform:scale3d(1, 0.9989202218, 1)}93.8%{transform:scale3d(1, 0.998949907, 1)}93.9%{transform:scale3d(1, 0.9989796911, 1)}94%{transform:scale3d(1, 0.9990095583, 1)}94.1%{transform:scale3d(1, 0.9990394929, 1)}94.2%{transform:scale3d(1, 0.9990694797, 1)}94.3%{transform:scale3d(1, 0.9990995034, 1)}94.4%{transform:scale3d(1, 0.999129549, 1)}94.5%{transform:scale3d(1, 0.9991596016, 1)}94.6%{transform:scale3d(1, 0.9991896466, 1)}94.7%{transform:scale3d(1, 0.9992196697, 1)}94.8%{transform:scale3d(1, 0.9992496566, 1)}94.9%{transform:scale3d(1, 0.9992795933, 1)}95%{transform:scale3d(1, 0.999309466, 1)}95.1%{transform:scale3d(1, 0.9993392613, 1)}95.2%{transform:scale3d(1, 0.9993689656, 1)}95.3%{transform:scale3d(1, 0.999398566, 1)}95.4%{transform:scale3d(1, 0.9994280496, 1)}95.5%{transform:scale3d(1, 0.9994574037, 1)}95.6%{transform:scale3d(1, 0.9994866159, 1)}95.7%{transform:scale3d(1, 0.9995156741, 1)}95.8%{transform:scale3d(1, 0.9995445663, 1)}95.9%{transform:scale3d(1, 0.9995732808, 1)}96%{transform:scale3d(1, 0.9996018063, 1)}96.1%{transform:scale3d(1, 0.9996301315, 1)}96.2%{transform:scale3d(1, 0.9996582455, 1)}96.3%{transform:scale3d(1, 0.9996861376, 1)}96.4%{transform:scale3d(1, 0.9997137974, 1)}96.5%{transform:scale3d(1, 0.9997412148, 1)}96.6%{transform:scale3d(1, 0.9997683798, 1)}96.7%{transform:scale3d(1, 0.9997952827, 1)}96.8%{transform:scale3d(1, 0.9998219142, 1)}96.9%{transform:scale3d(1, 0.9998482651, 1)}97%{transform:scale3d(1, 0.9998743265, 1)}97.1%{transform:scale3d(1, 0.9999000899, 1)}97.2%{transform:scale3d(1, 0.9999255469, 1)}97.3%{transform:scale3d(1, 0.9999506895, 1)}97.4%{transform:scale3d(1, 0.9999755097, 1)}97.5%{transform:scale3d(1, 1, 1)}97.6%{transform:scale3d(1, 1.0000241532, 1)}97.7%{transform:scale3d(1, 1.0000479621, 1)}97.8%{transform:scale3d(1, 1.0000714201, 1)}97.9%{transform:scale3d(1, 1.0000945207, 1)}98%{transform:scale3d(1, 1.0001172575, 1)}98.1%{transform:scale3d(1, 1.0001396246, 1)}98.2%{transform:scale3d(1, 1.0001616163, 1)}98.3%{transform:scale3d(1, 1.0001832271, 1)}98.4%{transform:scale3d(1, 1.0002044519, 1)}98.5%{transform:scale3d(1, 1.0002252856, 1)}98.6%{transform:scale3d(1, 1.0002457236, 1)}98.7%{transform:scale3d(1, 1.0002657615, 1)}98.8%{transform:scale3d(1, 1.0002853951, 1)}98.9%{transform:scale3d(1, 1.0003046204, 1)}99%{transform:scale3d(1, 1.0003234338, 1)}99.1%{transform:scale3d(1, 1.0003418319, 1)}99.2%{transform:scale3d(1, 1.0003598115, 1)}99.3%{transform:scale3d(1, 1.0003773696, 1)}99.4%{transform:scale3d(1, 1.0003945036, 1)}99.5%{transform:scale3d(1, 1.0004112111, 1)}99.6%{transform:scale3d(1, 1.0004274898, 1)}99.7%{transform:scale3d(1, 1.0004433378, 1)}99.8%{transform:scale3d(1, 1.0004587533, 1)}99.9%{transform:scale3d(1, 1.0004737349, 1)}100%{transform:scale3d(1, 1, 1)}}@keyframes svelte-1y8s0k7-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-1y8s0k7-slideUp{0%{transform:translate(0, 1rem)}100%{transform:translate(0, 0rem)}}@keyframes svelte-1y8s0k7-slideUpBackward{0%{transform:translate(0, 0rem)}100%{transform:translate(0, 1rem)}}@keyframes svelte-1y8s0k7-slideLeft{0%{transform:translate(1rem, 0rem)}100%{transform:translate(0rem, 0rem)}}@keyframes svelte-1y8s0k7-slideLeftBackward{0%{transform:translate(0rem, 0rem)}100%{transform:translate(1rem, 0rem)}}.hello.svelte-1y8s0k7.svelte-1y8s0k7.svelte-1y8s0k7{--scroll-y:0;--padding-bottom:0;--window-height:0px;min-height:100vh;padding-top:225px;transition:opacity 300ms;transition-timing-function:ease-out;opacity:1;display:flex;flex-direction:column;--base-anim-delay:0ms}.hello.svelte-1y8s0k7 .hello-gap.svelte-1y8s0k7.svelte-1y8s0k7{flex:1 1 auto}.hello.intersected.svelte-1y8s0k7.svelte-1y8s0k7.svelte-1y8s0k7{transition:opacity 100ms;opacity:0}.hello.svelte-1y8s0k7 p.svelte-1y8s0k7.svelte-1y8s0k7{font-size:18px;padding-bottom:5px}.hello.svelte-1y8s0k7 .hellobig.svelte-1y8s0k7.svelte-1y8s0k7{font-size:34px;margin-bottom:13px;margin-top:21px;animation-name:svelte-1y8s0k7-slideUp, svelte-1y8s0k7-fadeIn;animation-duration:300ms;animation-fill-mode:both;animation-delay:var(--base-anim-delay);font-family:"Source Code Pro Variable", sans-serif}.hello.svelte-1y8s0k7 h1.svelte-1y8s0k7.svelte-1y8s0k7{font-weight:400}@keyframes svelte-1y8s0k7-pScroll{0%{translate:0 0}100%{translate:0 calc(var(--scroll-ratio) * var(--padding-bottom))}}.hello.svelte-1y8s0k7 .p1.svelte-1y8s0k7.svelte-1y8s0k7{font-size:18px;padding-bottom:5px;animation-name:svelte-1y8s0k7-slideUp, svelte-1y8s0k7-fadeIn;animation-duration:350ms;animation-fill-mode:both;animation-delay:calc(var(--base-anim-delay) + 100ms);display:block}.hello.svelte-1y8s0k7 .p1.svelte-1y8s0k7>span.svelte-1y8s0k7{display:block;--scroll-ratio:0.2px;animation-name:svelte-1y8s0k7-pScroll;animation-timeline:scroll();animation-range:0px var(--window-height)}.hello.svelte-1y8s0k7 .p2.svelte-1y8s0k7.svelte-1y8s0k7{font-size:18px;padding-bottom:5px;animation-name:svelte-1y8s0k7-slideUp, svelte-1y8s0k7-fadeIn;animation-duration:400ms;animation-fill-mode:both;animation-delay:calc(var(--base-anim-delay) + 200ms);display:block}.hello.svelte-1y8s0k7 .p2.svelte-1y8s0k7>span.svelte-1y8s0k7{display:block;--scroll-ratio:0.3px;animation-name:svelte-1y8s0k7-pScroll;animation-timeline:scroll();animation-range:0px var(--window-height)}.hello.svelte-1y8s0k7 .p3.svelte-1y8s0k7.svelte-1y8s0k7{font-size:18px;padding-bottom:5px;animation-name:svelte-1y8s0k7-slideUp, svelte-1y8s0k7-fadeIn;animation-duration:450ms;animation-fill-mode:both;animation-delay:calc(var(--base-anim-delay) + 300ms);display:block}.hello.svelte-1y8s0k7 .p3.svelte-1y8s0k7>span.svelte-1y8s0k7{display:block;--scroll-ratio:0.5px;animation-name:svelte-1y8s0k7-pScroll;animation-timeline:scroll();animation-range:0px var(--window-height)}.hello.svelte-1y8s0k7 .smiley.svelte-1y8s0k7.svelte-1y8s0k7{font-size:45px;animation-name:svelte-1y8s0k7-rubbery;animation-duration:1000ms;animation-delay:calc(var(--base-anim-delay) + 1200ms);animation-fill-mode:both}.hello.svelte-1y8s0k7 .smiley.svelte-1y8s0k7>span.svelte-1y8s0k7{display:block;--scroll-ratio:0.8px;animation-name:svelte-1y8s0k7-pScroll;animation-timeline:scroll();animation-range:0px var(--window-height)}.hello.noScroll.svelte-1y8s0k7 .p1.svelte-1y8s0k7>span.svelte-1y8s0k7,.hello.noScroll.svelte-1y8s0k7 .p2.svelte-1y8s0k7>span.svelte-1y8s0k7,.hello.noScroll.svelte-1y8s0k7 .p3.svelte-1y8s0k7>span.svelte-1y8s0k7,.hello.noScroll.svelte-1y8s0k7 .smiley.svelte-1y8s0k7>span.svelte-1y8s0k7{translate:0 calc(var(--scroll-ratio) * var(--scroll-y) * var(--padding-bottom))}',
  map: null
};
const Hello = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scroll = 0;
  let noScroll = false;
  let last;
  $$result.css.add(css$8);
  return ` <div class="${[
    escape(null_to_empty("hello"), true) + " svelte-1y8s0k7",
    ""
  ].join(" ").trim()}"${add_attribute("style", `--window-height: ${0}px; --scroll-y:${scroll}; --padding-bottom: ${0}`, 0)} id="home"> <div class="hello-content"><p class="${escape(null_to_empty(`hellobig`), true) + " svelte-1y8s0k7"}" data-svelte-h="svelte-1hv8nsr">Hello,</p> <h1 class="svelte-1y8s0k7" data-svelte-h="svelte-mcvhcp"><span class="${escape(null_to_empty("p1"), true) + " svelte-1y8s0k7"}"><span class="svelte-1y8s0k7">My name is Tri Rahmat Gunadi,</span></span> <span class="${escape(null_to_empty("p2"), true) + " svelte-1y8s0k7"}"><span class="svelte-1y8s0k7">but people call me <a title="Github Link" rel="noreferrer noopener" target="_blank" href="https://github.com/juji"${add_attribute("class", "juji", 0)}>juji</a>.</span></span> <span class="${escape(null_to_empty("p3"), true) + " svelte-1y8s0k7"}"><span class="svelte-1y8s0k7">I am a web developer.</span></span></h1> <br> <div id="smiley" class="${escape(null_to_empty("smiley"), true) + " svelte-1y8s0k7"}" data-svelte-h="svelte-10nxg4i"><span class="svelte-1y8s0k7">;)</span></div> ${validate_component(Menu, "Menu").$$render($$result, { noScroll }, {}, {})}</div> <div class="hello-gap svelte-1y8s0k7"${add_attribute("this", last, 0)} data-svelte-h="svelte-18rir5q"></div> </div>`;
});
const titleLink_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "a.svelte-1dgtkw4{font-size:1.3rem;margin-left:0.8rem;position:relative;top:-3px}a.svelte-1dgtkw4 svg,a.svelte-1dgtkw4 svg path{fill:var(--blue)}",
  map: null
};
const Title_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/#" } = $$props;
  let { label = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$7);
  return `<a${add_attribute("href", href, 0)}${add_attribute("aria-label", label, 0)} class="svelte-1dgtkw4">${validate_component(Icon, "Icon").$$render($$result, { src: ImLink }, {}, {})}</a>`;
});
const message_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-75ywkh.svelte-75ywkh{padding:0.5rem 1rem;border-radius:5px;display:grid;align-items:center;grid-template-columns:1fr auto}div.error.svelte-75ywkh.svelte-75ywkh{background-color:#d53333;color:white}div.success.svelte-75ywkh.svelte-75ywkh{background-color:#60c660;color:black}div.svelte-75ywkh button.svelte-75ywkh{margin:0;padding:0;margin-left:1rem;background:transparent;border:0;cursor:pointer;font-size:2rem;opacity:0.4;align-self:self-start}div.svelte-75ywkh button.svelte-75ywkh:hover{opacity:1}div.svelte-75ywkh button.svelte-75ywkh:active{opacity:0.7}",
  map: null
};
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nodeRef;
  let { onRemove = null } = $$props;
  let { error = "" } = $$props;
  let { success = "" } = $$props;
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0)
    $$bindings.onRemove(onRemove);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  $$result.css.add(css$6);
  return `<div class="${["svelte-75ywkh", (!!error ? "error" : "") + " " + (!!success ? "success" : "")].join(" ").trim()}"${add_attribute("this", nodeRef, 0)}>${escape(error || success)} <button type="button" class="svelte-75ywkh">${validate_component(Icon, "Icon").$$render($$result, { src: IoClose }, {}, {})}</button> </div>`;
});
const index_svelte_svelte_type_style_lang$3 = "";
const css$5 = {
  code: "@keyframes svelte-6uu0k1-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-6uu0k1-fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes svelte-6uu0k1-slideUp{0%{transform:translate(0, 1rem)}100%{transform:translate(0, 0rem)}}@keyframes svelte-6uu0k1-slideUpBackward{0%{transform:translate(0, 0rem)}100%{transform:translate(0, 1rem)}}@keyframes svelte-6uu0k1-slideDown{0%{transform:translate(0, -1rem)}100%{transform:translate(0, 0rem)}}@keyframes svelte-6uu0k1-slideDownBackward{0%{transform:translate(0, 0rem)}100%{transform:translate(0, -1rem)}}.contact-form.svelte-6uu0k1.svelte-6uu0k1{margin:3rem 0;margin-bottom:5rem;max-width:500px}.contact-form.svelte-6uu0k1 h3.svelte-6uu0k1{margin-bottom:1rem;font-weight:300;font-size:2rem}.contact-form.svelte-6uu0k1 .form .server-message.svelte-6uu0k1{margin-bottom:1rem}.contact-form.svelte-6uu0k1 .form form .message.svelte-6uu0k1{color:transparent;text-align:right;font-size:0.8rem;padding-top:0.3rem}.contact-form.svelte-6uu0k1 .form form .message.invalid.svelte-6uu0k1{color:red}.contact-form.svelte-6uu0k1 .form form label.svelte-6uu0k1{display:block;margin-bottom:0.4rem;color:#999}.contact-form.svelte-6uu0k1 .form form input.svelte-6uu0k1,.contact-form.svelte-6uu0k1 .form form textarea.svelte-6uu0k1{display:block;width:100%;padding:1rem;margin-top:0.2rem;background:#222;border:1px solid #555;border-radius:5px;color:white;transition:border 500ms ease}.contact-form.svelte-6uu0k1 .form form input.touched.invalid.svelte-6uu0k1,.contact-form.svelte-6uu0k1 .form form textarea.touched.invalid.svelte-6uu0k1{outline:1px solid red}.contact-form.svelte-6uu0k1 .form form input.svelte-6uu0k1:user-invalid,.contact-form.svelte-6uu0k1 .form form textarea.svelte-6uu0k1:user-invalid{outline:1px solid red}.contact-form.svelte-6uu0k1 .form form button.svelte-6uu0k1{display:block;border:0;padding:0.8rem 0rem;width:100%;margin-top:1rem;border-radius:5px;font-size:1rem;cursor:pointer;background:#222;transition:background 500ms, filter 300ms}.contact-form.svelte-6uu0k1 .form form input.svelte-6uu0k1:focus,.contact-form.svelte-6uu0k1 .form form textarea.svelte-6uu0k1:focus,.contact-form.svelte-6uu0k1 .form form button.svelte-6uu0k1:focus{outline:0}.contact-form.svelte-6uu0k1 .form form input.svelte-6uu0k1:focus,.contact-form.svelte-6uu0k1 .form form textarea.svelte-6uu0k1:focus,.contact-form.svelte-6uu0k1 .form form button.svelte-6uu0k1:focus{border:1px solid var(--blue)}.contact-form.svelte-6uu0k1 .form form.nojs:valid button.svelte-6uu0k1,.contact-form.svelte-6uu0k1 .form form.js.valid button.svelte-6uu0k1{background:blue;color:white;filter:brightness(0.8)}.contact-form.svelte-6uu0k1 .form form.nojs:valid button.svelte-6uu0k1:hover,.contact-form.svelte-6uu0k1 .form form.js.valid button.svelte-6uu0k1:hover{filter:brightness(1)}.contact-form.svelte-6uu0k1 .form form.nojs:valid button.svelte-6uu0k1:active,.contact-form.svelte-6uu0k1 .form form.js.valid button.svelte-6uu0k1:active{filter:brightness(0.7)}.contact-form.anim.svelte-6uu0k1.svelte-6uu0k1{--delay-init:800ms}.contact-form.anim.svelte-6uu0k1 h3.svelte-6uu0k1,.contact-form.anim.svelte-6uu0k1 label.svelte-6uu0k1,.contact-form.anim.svelte-6uu0k1 input.svelte-6uu0k1,.contact-form.anim.svelte-6uu0k1 textarea.svelte-6uu0k1,.contact-form.anim.svelte-6uu0k1 button.svelte-6uu0k1,.contact-form.anim.svelte-6uu0k1 .server-message.svelte-6uu0k1{animation-name:svelte-6uu0k1-fadeOut, svelte-6uu0k1-slideUpBackward;animation-duration:300ms;animation-timing-function:ease-out;animation-fill-mode:both}.contact-form.anim.svelte-6uu0k1 h3.svelte-6uu0k1{animation-delay:var(--delay-init)}.contact-form.anim.svelte-6uu0k1 [for=contact-name].svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 110ms)}.contact-form.anim.svelte-6uu0k1 [id=contact-name].svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 120ms)}.contact-form.anim.svelte-6uu0k1 [for=contact-email].svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 150ms)}.contact-form.anim.svelte-6uu0k1 [id=contact-email].svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 190ms)}.contact-form.anim.svelte-6uu0k1 [for=contact-message].svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 240ms)}.contact-form.anim.svelte-6uu0k1 [id=contact-message].svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 300ms)}.contact-form.anim.svelte-6uu0k1 button.svelte-6uu0k1{animation-delay:calc(var(--delay-init) + 370ms)}.contact-form.anim.visible.svelte-6uu0k1 h3.svelte-6uu0k1,.contact-form.anim.visible.svelte-6uu0k1 label.svelte-6uu0k1,.contact-form.anim.visible.svelte-6uu0k1 input.svelte-6uu0k1,.contact-form.anim.visible.svelte-6uu0k1 textarea.svelte-6uu0k1,.contact-form.anim.visible.svelte-6uu0k1 button.svelte-6uu0k1,.contact-form.anim.visible.svelte-6uu0k1 .server-message.svelte-6uu0k1{animation-name:svelte-6uu0k1-fadeIn, svelte-6uu0k1-slideUp}",
  map: null
};
const action = "/api/contact";
const Contact_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { anim = false } = $$props;
  let { visible = false } = $$props;
  let success = $page.url.searchParams.get("contactok");
  let error = $page.url.searchParams.get("contacterror");
  let form;
  let touched = {};
  let invalid = {};
  if ($$props.anim === void 0 && $$bindings.anim && anim !== void 0)
    $$bindings.anim(anim);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$5);
  {
    if (success) {
      setTimeout(
        () => {
          success = "";
        },
        24e3
      );
    }
  }
  $$unsubscribe_page();
  return `<div class="${[
    "contact-form svelte-6uu0k1",
    (anim ? "anim" : "") + " " + (visible ? "visible" : "") + " "
  ].join(" ").trim()}" id="contact-form"><h3 class="svelte-6uu0k1" data-svelte-h="svelte-1egvgza">Send me a Hello!</h3> <div class="form"><form method="POST"${add_attribute("action", action, 0)}${add_classes(" nojs ".trim())}${add_attribute("this", form, 0)}><label for="contact-name" class="svelte-6uu0k1" data-svelte-h="svelte-phqje1">Name</label> <input ${""}${add_attribute("minlength", 2, 0)} type="text" id="contact-name" name="name" required class="${[
    "svelte-6uu0k1",
    (touched.name ? "touched" : "") + " " + (!!invalid.name ? "invalid" : "")
  ].join(" ").trim()}"> <div class="${["message svelte-6uu0k1", !!invalid.name ? "invalid" : ""].join(" ").trim()}">${escape(invalid.name || "a")}</div> <label for="contact-email" class="svelte-6uu0k1" data-svelte-h="svelte-lrhhvp">Email</label> <input ${""} type="email" id="contact-email" name="email" required class="${[
    "svelte-6uu0k1",
    (touched.email ? "touched" : "") + " " + (!!invalid.email ? "invalid" : "")
  ].join(" ").trim()}"> <div class="${["message svelte-6uu0k1", !!invalid.email ? "invalid" : ""].join(" ").trim()}">${escape(invalid.email || "a")}</div> <label for="contact-message"${add_attribute("data-error", invalid.message || "", 0)} class="svelte-6uu0k1">Message</label> <textarea ${""}${add_attribute("minlength", 5, 0)} rows="6" id="contact-message" name="message" required class="${[
    "svelte-6uu0k1",
    (touched.message ? "touched" : "") + " " + (!!invalid.message ? "invalid" : "")
  ].join(" ").trim()}"></textarea> <div class="${["message svelte-6uu0k1", !!invalid.message ? "invalid" : ""].join(" ").trim()}">${escape(invalid.message || "a")}</div> <div class="submit-button">${success ? `<div class="server-message svelte-6uu0k1">${validate_component(Message, "Message").$$render($$result, { success: "Thank you for reaching out!!" }, {}, {})}</div>` : `${error ? `<div class="server-message svelte-6uu0k1">${validate_component(Message, "Message").$$render($$result, { error: "Something bad is happening :(" }, {}, {})}</div> <button type="submit" name="submit" class="svelte-6uu0k1" data-svelte-h="svelte-up2ngb">Submit</button>` : `<button ${""} type="submit" name="submit" class="svelte-6uu0k1">${escape("Submit")}</button>`}`}</div></form></div> </div>`;
});
const index_svelte_svelte_type_style_lang$2 = "";
const css$4 = {
  code: "@keyframes svelte-1pn1gcr-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-1pn1gcr-fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes svelte-1pn1gcr-slideUp{0%{transform:translate(0, 1rem)}100%{transform:translate(0, 0rem)}}@keyframes svelte-1pn1gcr-slideUpBackward{0%{transform:translate(0, 0rem)}100%{transform:translate(0, 1rem)}}@keyframes svelte-1pn1gcr-slideLeft{0%{transform:translate(1rem, 0rem)}100%{transform:translate(0rem, 0rem)}}@keyframes svelte-1pn1gcr-slideLeftBackward{0%{transform:translate(0rem, 0rem)}100%{transform:translate(1rem, 0rem)}}.contact.svelte-1pn1gcr.svelte-1pn1gcr{padding-top:var(--pad-top-page)}.contact.svelte-1pn1gcr h2.svelte-1pn1gcr{padding-top:3rem}.contact.svelte-1pn1gcr .email.svelte-1pn1gcr{margin-top:1rem;margin-bottom:8px}.contact.svelte-1pn1gcr .email a.svelte-1pn1gcr{font-size:21px}.contact.svelte-1pn1gcr .city.svelte-1pn1gcr{margin-bottom:34px}.contact.svelte-1pn1gcr .links.svelte-1pn1gcr{display:flex}.contact.svelte-1pn1gcr .links a.svelte-1pn1gcr{margin-right:21px;display:block;scale:1;transition:scale 200ms ease-out}.contact.svelte-1pn1gcr .links a.svelte-1pn1gcr:hover{scale:1.2}.contact.svelte-1pn1gcr .links a.svelte-1pn1gcr:hover:after{transform:scaleX(0)}.contact.svelte-1pn1gcr .links a.svelte-1pn1gcr:active{scale:1}.contact.anim.svelte-1pn1gcr .h1.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUpBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .par.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUpBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-delay:100ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .email.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUpBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-delay:200ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .city.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUpBackward, svelte-1pn1gcr-fadeOut;animation-duration:500ms;animation-delay:300ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .links #github.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeftBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-delay:300ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .links #npm.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeftBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-delay:400ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .links #linkedin.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeftBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-delay:500ms;animation-fill-mode:both}.contact.anim.svelte-1pn1gcr .links #skype.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeftBackward, svelte-1pn1gcr-fadeOut;animation-duration:400ms;animation-delay:600ms;animation-fill-mode:both}.contact.anim.visible.svelte-1pn1gcr .h1.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUp, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .par.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUp, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .email.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUp, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .city.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideUp, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .links #github.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeft, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .links #npm.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeft, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .links #linkedin.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeft, svelte-1pn1gcr-fadeIn}.contact.anim.visible.svelte-1pn1gcr .links #skype.svelte-1pn1gcr{animation-name:svelte-1pn1gcr-slideLeft, svelte-1pn1gcr-fadeIn}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible = false;
  let observed;
  $$result.css.add(css$4);
  return `<div class="${[
    escape(null_to_empty(`contact`), true) + " svelte-1pn1gcr",
    "anim "
  ].join(" ").trim()}" id="contact"${add_attribute("this", observed, 0)}><h2 class="${escape(null_to_empty(`h1`), true) + " svelte-1pn1gcr"}">Contact
    ${validate_component(Title_link, "TitleLink").$$render($$result, { href: "/#contact", label: "Contact" }, {}, {})}</h2> <p class="${escape(null_to_empty(`email`), true) + " svelte-1pn1gcr"}" data-svelte-h="svelte-9afitf"><a target="_blank" rel="noopener noreferrer" href="mailto:him@jujiyangasli.com" class="svelte-1pn1gcr">him@jujiyangasli.com</a></p> <p class="${escape(null_to_empty(`city`), true) + " svelte-1pn1gcr"}" data-svelte-h="svelte-r3qeir">Tangerang, Indonesia</p> <div class="${escape(null_to_empty(`links`), true) + " svelte-1pn1gcr"}"><a target="_blank" rel="noopener noreferrer" title="Github page" aria-label="Go to juji's github page"${add_attribute("id", `github`, 0)} href="https://github.com/juji" class="svelte-1pn1gcr">${validate_component(Icon, "Icon").$$render($$result, { src: IoLogoGithub, size: "2.618rem" }, {}, {})}</a> <a target="_blank" rel="noopener noreferrer" title="NPM page" aria-label="Go to juji's npm page"${add_attribute("id", `npm`, 0)} href="https://npmjs.com/~jujiyangasli" class="svelte-1pn1gcr">${validate_component(Icon, "Icon").$$render($$result, { src: IoLogoNpm, size: "2.618rem" }, {}, {})}</a> <a target="_blank" rel="noopener noreferrer" title="LinkedIn page" aria-label="Go to juji's linkedin page"${add_attribute("id", `linkedin`, 0)} href="https://www.linkedin.com/in/jujiyangasli/" class="svelte-1pn1gcr">${validate_component(Icon, "Icon").$$render($$result, { src: IoLogoLinkedin, size: "2.618rem" }, {}, {})}</a> <a target="_blank" rel="noopener noreferrer" title="Skype Chat" aria-label="chat with juji on skype"${add_attribute("id", `skype`, 0)} href="skype://juji.gunadi?chat" class="svelte-1pn1gcr">${validate_component(Icon, "Icon").$$render($$result, { src: IoLogoSkype, size: "2.618rem" }, {}, {})}</a></div> ${validate_component(Contact_form, "ContactForm").$$render($$result, { anim: true, visible }, {}, {})} </div>`;
});
const techCell_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@keyframes svelte-nbsax2-slideLeft{0%{transform:translate(1rem, 0rem)}100%{transform:translate(0rem, 0rem)}}@keyframes svelte-nbsax2-slideLeftBackward{0%{transform:translate(0rem, 0rem)}100%{transform:translate(1rem, 0rem)}}@keyframes svelte-nbsax2-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-nbsax2-fadeOut{0%{opacity:1}100%{opacity:0}}.cell.svelte-nbsax2{display:inline-block;width:50%;height:89px;margin:0;padding:0;position:relative;overflow:hidden}.cell.svelte-nbsax2>img{position:absolute;top:50%;left:50%;width:min(80%, 150px);height:min(80%, 150px);object-fit:contain;object-position:center center;transform-origin:0% 0%;scale:1;transform:translate3d(-50%, -50%, 0);transition:scale 200ms}.cell.svelte-nbsax2:hover img{scale:1.1}.cell.svelte-nbsax2:active img{scale:1}.cell[data-id=docker].svelte-nbsax2 img{width:min(120%, 150px);height:min(120%, 150px)}.cell[data-id=cloudflare].svelte-nbsax2{width:100%}.cell[data-id=express].svelte-nbsax2{width:100%}.cell[data-id=next].svelte-nbsax2{width:100%}.cell[data-id=svelte].svelte-nbsax2{width:100%}.cell[data-id=electron].svelte-nbsax2{width:100%}.cell[data-id=electron].svelte-nbsax2 img{max-width:100%;width:min(320%, 400px);height:min(320%, 400px)}.cell[data-id=postgres].svelte-nbsax2 img{width:min(100%, 150px);height:min(100%, 150px)}.cell[data-id=redis].svelte-nbsax2 img{width:min(100%, 150px);height:min(100%, 150px)}.cell[data-id=do].svelte-nbsax2 img{width:min(110%, 150px);height:min(110%, 150px)}.cell[data-id=stripe].svelte-nbsax2 img{width:min(120%, 150px);height:min(120%, 150px)}.cell[data-id=sendgrid].svelte-nbsax2{width:60%}.cell[data-id=gitlab].svelte-nbsax2 img{width:min(110%, 150px);height:min(110%, 150px)}.cell.anim.svelte-nbsax2{animation-name:slideLeftBackwards, svelte-nbsax2-fadeOut;animation-duration:200ms;animation-fill-mode:both}.cell.anim.visible.svelte-nbsax2{animation-name:svelte-nbsax2-slideLeft, svelte-nbsax2-fadeIn}@media screen and (min-width: 364px){.cell.svelte-nbsax2{width:89px;height:89px}.cell[data-id=cloudflare].svelte-nbsax2{width:180px}.cell[data-id=express].svelte-nbsax2{width:180px}.cell[data-id=next].svelte-nbsax2{width:180px}.cell[data-id=svelte].svelte-nbsax2{width:min(30%, 100px)}.cell[data-id=electron].svelte-nbsax2{width:300px}.cell[data-id=electron].svelte-nbsax2 img{max-width:unset;width:min(380%, 500px);height:min(380%, 500px)}.cell[data-id=mongo].svelte-nbsax2 img{width:min(100%, 150px);height:min(100%, 150px)}.cell[data-id=stripe].svelte-nbsax2 img{width:min(110%, 150px);height:min(110%, 150px)}.cell[data-id=algolia].svelte-nbsax2{width:120px}.cell[data-id=twilio].svelte-nbsax2{width:120px}.cell[data-id=twilio].svelte-nbsax2 img{width:min(100%, 150px);height:min(100%, 150px)}.cell[data-id=mailgun].svelte-nbsax2{width:200px}.cell[data-id=sendgrid].svelte-nbsax2{width:200px}}@media screen and (min-width: 768px){.cell.svelte-nbsax2{margin-right:1rem;margin-bottom:1rem}}",
  map: null
};
const Tech_cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { item } = $$props;
  let { animationDelay = 0 } = $$props;
  let { parentVisible = false } = $$props;
  let { animEnabled = false } = $$props;
  const { id, title, image, url, width, height } = item || {};
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.animationDelay === void 0 && $$bindings.animationDelay && animationDelay !== void 0)
    $$bindings.animationDelay(animationDelay);
  if ($$props.parentVisible === void 0 && $$bindings.parentVisible && parentVisible !== void 0)
    $$bindings.parentVisible(parentVisible);
  if ($$props.animEnabled === void 0 && $$bindings.animEnabled && animEnabled !== void 0)
    $$bindings.animEnabled(animEnabled);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<a${add_attribute("href", url, 0)}${add_attribute("data-id", id, 0)} class="${escape(null_to_empty(`cell ${animEnabled ? "anim" : ""} ${parentVisible ? "visible" : ""} noline`), true) + " svelte-nbsax2"}"${add_attribute("style", `animation-delay: ${animationDelay}ms`, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", title, 0)} target="_blank" rel="noopener noreferrer">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: $page.url.origin + image,
      alt: title,
      width,
      height,
      decoding: "async",
      loading: "lazy"
    },
    {},
    {}
  )} </a>`;
});
const techs = [
  [
    {
      id: "html5",
      width: 24,
      height: 24,
      title: "HTML5",
      image: "/images/tech/html5.svg",
      url: "https://en.wikipedia.org/wiki/HTML5"
    },
    {
      id: "css3",
      width: 24,
      height: 24,
      title: "CSS3",
      image: "/images/tech/css3.svg",
      url: "https://en.wikipedia.org/wiki/CSS"
    },
    {
      id: "js",
      width: 24,
      height: 24,
      title: "JavaScript",
      image: "/images/tech/js.svg",
      url: "https://en.wikipedia.org/wiki/JavaScript"
    },
    {
      id: "ts",
      width: 24,
      height: 24,
      title: "TypeScript",
      image: "/images/tech/ts.svg",
      url: "https://www.typescriptlang.org/"
    }
  ],
  [
    {
      id: "next",
      width: 380,
      height: 181,
      title: "Next.js",
      image: "/images/tech/nextjs.webp",
      url: "https://nextjs.org/"
    },
    {
      id: "svelte",
      width: 512,
      height: 512,
      title: "Svelte",
      image: "/images/tech/svelte.png",
      url: "https://kit.svelte.dev/"
    },
    {
      id: "electron",
      width: 500,
      height: 500,
      title: "Electron",
      image: "/images/tech/electron.webp",
      url: "https://electronjs.org/"
    }
  ],
  [
    {
      id: "nodejs",
      width: 2400,
      height: 2643,
      title: "NodeJs",
      image: "/images/tech/nodejs.webp",
      url: "https://nodejs.org"
    },
    {
      id: "bun",
      width: 80,
      height: 70,
      title: "Bun",
      image: "/images/tech/bun.svg",
      url: "https://bun.sh/"
    },
    {
      id: "firebase",
      width: 500,
      height: 500,
      title: "Firebase",
      image: "/images/tech/firebase.webp",
      url: "https://firebase.google.com/?hl=id"
    },
    {
      id: "docker",
      width: 1300,
      height: 895,
      title: "Docker",
      image: "/images/tech/docker.webp",
      url: "https://www.docker.com/"
    },
    {
      id: "cloudflare",
      width: 720,
      height: 240,
      title: "CloudFlare",
      image: "/images/tech/cloudflare.webp",
      url: "https://www.cloudflare.com"
    }
  ],
  [
    {
      id: "express",
      width: 380,
      height: 84,
      title: "Express.js",
      image: "/images/tech/expressjs.webp",
      url: "https://expressjs.com/"
    },
    {
      id: "react",
      width: 500,
      height: 500,
      title: "React",
      image: "/images/tech/react.webp",
      url: "https://react.dev/"
    },
    {
      id: "socketio",
      width: 201,
      height: 195,
      title: "Socket.io",
      image: "/images/tech/socketio.webp",
      url: "https://socket.io/"
    }
  ],
  [
    {
      id: "mongo",
      width: 400,
      height: 277,
      title: "Mongo DB",
      image: "/images/tech/mongo.webp",
      url: "https://www.mongodb.com/"
    },
    {
      id: "postgres",
      width: 500,
      height: 500,
      title: "PostgreSQL",
      image: "/images/tech/postgre.webp",
      url: "https://www.postgresql.org/"
    },
    {
      id: "mysql",
      width: 300,
      height: 300,
      title: "MySQL",
      image: "/images/tech/mysql.webp",
      url: "https://www.mysql.com/"
    },
    {
      id: "redis",
      width: 500,
      height: 500,
      title: "Redis",
      image: "/images/tech/redis.webp",
      url: "https://redis.io/"
    },
    // {
    //   id: 'nats',
    //   title: 'NATS',
    //   image: '/images/tech/nats.webp',
    //   url: 'https://nats.io/'
    // },
    // {
    //   id: 'elastic',
    //   title: 'Elastic Search',
    //   image: '/images/tech/elastic.webp',
    //   url: 'https://www.elastic.co/'
    // },
    {
      id: "rabbit",
      width: 500,
      height: 500,
      title: "RabbitMQ",
      image: "/images/tech/rabbitmq.webp",
      url: "https://www.rabbitmq.com/"
    }
  ],
  [
    {
      id: "do",
      width: 500,
      height: 500,
      title: "Digital Ocean",
      image: "/images/tech/digitalocean.webp",
      url: "https://www.digitalocean.com/"
    },
    {
      id: "ec2",
      width: 500,
      height: 500,
      title: "AWS EC2",
      image: "/images/tech/ec2.webp",
      url: "https://aws.amazon.com/ec2/"
    },
    {
      id: "s3",
      width: 500,
      height: 500,
      title: "AWS S3",
      image: "/images/tech/s3.webp",
      url: "https://aws.amazon.com/s3/"
    },
    {
      id: "beanstalk",
      width: 402,
      height: 564,
      title: "AWS Elastic Beanstalk",
      image: "/images/tech/beanstalk.webp",
      url: "https://aws.amazon.com/elasticbeanstalk/"
    }
  ],
  [
    {
      id: "stripe",
      width: 500,
      height: 500,
      title: "Stripe",
      image: "/images/tech/stripe.webp",
      url: "https://stripe.com/"
    },
    {
      id: "algolia",
      width: 1332,
      height: 331,
      title: "Algolia",
      image: "/images/tech/algolia.webp",
      url: "https://www.algolia.com/"
    },
    {
      id: "twilio",
      width: 400,
      height: 185,
      title: "Twilio",
      image: "/images/tech/twilio.webp",
      url: "https://www.twilio.com/"
    }
  ],
  [
    {
      id: "mailchimp",
      width: 500,
      height: 500,
      title: "Mailchimp",
      image: "/images/tech/mailchimp.webp",
      url: "https://mailchimp.com/"
    },
    {
      id: "mailgun",
      width: 1793,
      height: 494,
      title: "Mailgun",
      image: "/images/tech/mailgun.webp",
      url: "https://www.mailgun.com/"
    },
    {
      id: "sendgrid",
      width: 3300,
      height: 724,
      title: "Sendgrid",
      image: "/images/tech/sendgrid.webp",
      url: "https://sendgrid.com/"
    }
  ],
  [
    {
      id: "github",
      width: 120,
      height: 120,
      title: "Github",
      image: "/images/tech/github.webp",
      url: "https://github.com"
    },
    {
      id: "gitlab",
      width: 500,
      height: 500,
      title: "Gitlab",
      image: "/images/tech/gitlab.webp",
      url: "https://gitlab.com"
    },
    {
      id: "bitbucket",
      width: 400,
      height: 400,
      title: "Bitbucket",
      image: "/images/tech/bitbucket.webp",
      url: "https://bitbucket.org/"
    }
  ]
];
const index_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: "@keyframes svelte-187l607-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-187l607-fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes svelte-187l607-slideUp{0%{transform:translate(0, 1rem)}100%{transform:translate(0, 0rem)}}@keyframes svelte-187l607-slideUpBackward{0%{transform:translate(0, 0rem)}100%{transform:translate(0, 1rem)}}.tech.svelte-187l607.svelte-187l607{padding-top:var(--pad-top-page)}.tech.svelte-187l607 h2.svelte-187l607{padding-top:3rem}.tech.svelte-187l607 .par.svelte-187l607{margin-bottom:4rem}.tech.svelte-187l607 .techRow.svelte-187l607{margin-bottom:1rem}.tech.svelte-187l607 .techRow.svelte-187l607:last-child{margin-bottom:0rem}.tech.anim.svelte-187l607 h2.svelte-187l607{animation-name:svelte-187l607-slideUpBackward, svelte-187l607-fadeOut;animation-duration:400ms;animation-fill-mode:both;animation-delay:0ms}.tech.anim.svelte-187l607 .par.svelte-187l607{animation-name:svelte-187l607-slideUpBackward, svelte-187l607-fadeOut;animation-duration:400ms;animation-delay:0ms;animation-fill-mode:both}.tech.anim.visible.svelte-187l607 h2.svelte-187l607{animation-name:svelte-187l607-slideUp, svelte-187l607-fadeIn;animation-delay:0ms}.tech.anim.visible.svelte-187l607 .par.svelte-187l607{animation-name:svelte-187l607-slideUp, svelte-187l607-fadeIn;animation-delay:100ms}",
  map: null
};
const Techs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let observed;
  let visible = false;
  $$result.css.add(css$2);
  return `<div class="${[
    escape(null_to_empty(`tech`), true) + " svelte-187l607",
    "anim "
  ].join(" ").trim()}" id="techs"${add_attribute("this", observed, 0)}><h2 class="${escape(null_to_empty(`h1`), true) + " svelte-187l607"}">Technologies
    ${validate_component(Title_link, "TitleLink").$$render($$result, { href: "/#techs", label: "Techs" }, {}, {})}</h2> <p class="${escape(null_to_empty(`par`), true) + " svelte-187l607"}" data-svelte-h="svelte-mjrie8">Things I play with</p> ${each(techs, (group) => {
    return `<div class="${escape(null_to_empty("techRow"), true) + " svelte-187l607"}">${each(group, (tech, i) => {
      return `${validate_component(Tech_cell, "TechCell").$$render(
        $$result,
        {
          item: tech,
          animEnabled: true,
          parentVisible: visible,
          animationDelay: 300 + i * 100
        },
        {},
        {}
      )}`;
    })} </div>`;
  })} </div>`;
});
const thumbnail_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-1cf28fa-slideUp{0%{transform:translate(0, 1rem)}100%{transform:translate(0, 0rem)}}@keyframes svelte-1cf28fa-slideUpBackward{0%{transform:translate(0, 0rem)}100%{transform:translate(0, 1rem)}}@keyframes svelte-1cf28fa-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-1cf28fa-fadeOut{0%{opacity:1}100%{opacity:0}}.container.svelte-1cf28fa.svelte-1cf28fa:hover{z-index:10}.container.paused.svelte-1cf28fa.svelte-1cf28fa{animation-name:svelte-1cf28fa-slideUpBackward, svelte-1cf28fa-fadeOut;animation-duration:400ms;animation-fill-mode:both;pointer-events:none}.container.paused.visible.svelte-1cf28fa.svelte-1cf28fa{pointer-events:auto;animation-name:svelte-1cf28fa-slideUp, svelte-1cf28fa-fadeIn;animation-play-state:running}.workThumbnail.svelte-1cf28fa.svelte-1cf28fa{display:block;transform-style:preserve-3d;transform:perspective(1000px);scale:1;border:1px solid rgba(0, 0, 0, 0.5);scroll-margin-top:200px;position:relative;padding-top:56.25%}.workThumbnail.svelte-1cf28fa>.image.svelte-1cf28fa{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0}.workThumbnail.svelte-1cf28fa>.image.svelte-1cf28fa>img{position:absolute;overflow:hidden;border-radius:8px;contain:layout;width:100%;height:100%;top:0;left:0;object-fit:cover;object-position:center top;transition:all 1000ms ease}.workThumbnail.svelte-1cf28fa:hover>.image.svelte-1cf28fa>img{width:104%;height:104%;top:-2%;left:-2%}.workThumbnail.svelte-1cf28fa .label.svelte-1cf28fa,.workThumbnail.svelte-1cf28fa .shadow.svelte-1cf28fa{position:absolute;bottom:21px;left:21px;width:auto;height:34px;padding:5px 8px;border-radius:5px;z-index:1}.workThumbnail.svelte-1cf28fa .shadow.svelte-1cf28fa{transform:translateZ(0px);background-color:rgba(0, 0, 0, 0.2);overflow:hidden;filter:blur(3px)}.workThumbnail.svelte-1cf28fa .shadow img.svelte-1cf28fa{width:auto;height:24px;object-fit:contain;opacity:0}.workThumbnail.svelte-1cf28fa .label.svelte-1cf28fa{transform:translateZ(30px);background-color:white;overflow:hidden;border:1px solid rgba(0, 0, 0, 0.4)}.workThumbnail.svelte-1cf28fa .label img.svelte-1cf28fa{display:block;background-color:white;position:relative;width:auto;height:24px;object-fit:contain;object-position:center center}.workThumbnail.svelte-1cf28fa.svelte-1cf28fa:active{transition:scale 250ms ease, transform 250ms ease;transform:perspective(1000px) !important;scale:0.98}.workThumbnail.svelte-1cf28fa:active .label.svelte-1cf28fa{transform:translateZ(0px)}.workThumbnail.svelte-1cf28fa.svelte-1cf28fa:after{content:unset}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { work } = $$props;
  let { paused = false } = $$props;
  let { visible = false } = $$props;
  let { animationDelay = 0 } = $$props;
  const { id, title, logo, image } = work;
  const elementId = `works/${id}`;
  const href = `/${elementId}`;
  let anchor;
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.animationDelay === void 0 && $$bindings.animationDelay && animationDelay !== void 0)
    $$bindings.animationDelay(animationDelay);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div class="${[
    escape(null_to_empty(`container`), true) + " svelte-1cf28fa",
    (paused ? "paused" : "") + " " + (visible ? "visible" : "")
  ].join(" ").trim()}"${add_attribute("style", `animation-delay: ${visible ? animationDelay : 0}ms`, 0)}><a${add_attribute("href", href, 0)} class="${escape(null_to_empty(`workThumbnail`), true) + " svelte-1cf28fa"}"${add_attribute("title", title, 0)}${add_attribute("data-id", id, 0)}${add_attribute("id", elementId, 0)}${add_attribute("this", anchor, 0)}><div class="image svelte-1cf28fa">${validate_component(Image, "Image").$$render(
    $$result,
    {
      decoding: "async",
      loading: "lazy",
      style: `view-transition-name: ${id}`,
      src: $page.url.origin + image.thumbnail,
      alt: title,
      width: image.dimension.thumb.width,
      height: image.dimension.thumb.height
    },
    {},
    {}
  )}</div> <span class="${escape(null_to_empty("shadow"), true) + " svelte-1cf28fa"}"><img${add_attribute("src", logo.url, 0)} decoding="async" loading="lazy"${add_attribute("alt", title, 0)}${add_attribute("width", logo.width, 0)}${add_attribute("height", logo.height, 0)} class="svelte-1cf28fa"></span> <span class="${escape(null_to_empty("label"), true) + " svelte-1cf28fa"}"><img${add_attribute("src", logo.url, 0)}${add_attribute("alt", title, 0)} decoding="async" loading="lazy"${add_attribute("width", logo.width, 0)}${add_attribute("height", logo.height, 0)} class="svelte-1cf28fa"></span></a> </div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-4dbsz5-slideLeft{0%{transform:translate(1rem, 0rem)}100%{transform:translate(0rem, 0rem)}}@keyframes svelte-4dbsz5-slideLeftBackward{0%{transform:translate(0rem, 0rem)}100%{transform:translate(1rem, 0rem)}}@keyframes svelte-4dbsz5-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes svelte-4dbsz5-fadeOut{0%{opacity:1}100%{opacity:0}}.works.svelte-4dbsz5.svelte-4dbsz5{padding-top:var(--pad-top-page)}.works.svelte-4dbsz5 h2.svelte-4dbsz5{padding-top:3rem}.works.svelte-4dbsz5 .par.svelte-4dbsz5{margin-bottom:4rem}.works.svelte-4dbsz5 .workThumbnails.svelte-4dbsz5{display:grid;grid-template-columns:1fr;grid-gap:1rem}@media screen and (min-width: 768px){.works.svelte-4dbsz5 .workThumbnails.svelte-4dbsz5{grid-template-columns:1fr 1fr}}.works.anim.svelte-4dbsz5 h2.svelte-4dbsz5{animation-name:svelte-4dbsz5-slideLeftBackward, svelte-4dbsz5-fadeOut;animation-fill-mode:both;animation-duration:200ms;animation-delay:0ms}.works.anim.svelte-4dbsz5 .par.svelte-4dbsz5{animation-name:svelte-4dbsz5-slideLeftBackward, svelte-4dbsz5-fadeOut;animation-fill-mode:both;animation-duration:200ms;animation-delay:100ms}.works.anim.visible.svelte-4dbsz5 h2.svelte-4dbsz5{animation-name:svelte-4dbsz5-slideLeft, svelte-4dbsz5-fadeIn;animation-duration:200ms;animation-delay:0ms}.works.anim.visible.svelte-4dbsz5 .par.svelte-4dbsz5{animation-name:svelte-4dbsz5-slideLeft, svelte-4dbsz5-fadeIn;animation-duration:200ms;animation-delay:100ms}",
  map: null
};
const Works = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { works } = $$props;
  let visible = false;
  onNavigate((navigation) => {
    if (!navigation || !navigation.to)
      return;
    if (navigation.to.url.pathname.match(/\/works/)) {
      const html = document.querySelector("html");
      if (!html)
        return;
      html.classList.add("noSmooth");
      navigation.complete.then(() => {
        html.classList.remove("noSmooth");
      });
    }
  });
  let lastWork = null;
  let observed;
  if ($$props.works === void 0 && $$bindings.works && works !== void 0)
    $$bindings.works(works);
  $$result.css.add(css);
  return `<div id="works" class="${[
    escape(null_to_empty(`works`), true) + " svelte-4dbsz5",
    "anim "
  ].join(" ").trim()}"${add_attribute("this", observed, 0)}><h2 class="${escape(null_to_empty(`h1`), true) + " svelte-4dbsz5"}">Works
    ${validate_component(Title_link, "TitleLink").$$render($$result, { href: "/#works", label: "Works" }, {}, {})}</h2> <p class="${escape(null_to_empty(`par`), true) + " svelte-4dbsz5"}" data-svelte-h="svelte-810epp">Things i did</p> <div class="${escape(null_to_empty(`workThumbnails`), true) + " svelte-4dbsz5"}">${each(works, (work, i) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        paused: lastWork !== work.id,
        animationDelay: 500 + i * 100,
        visible,
        work
      },
      {},
      {}
    )}`;
  })}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Hello, "Hello").$$render($$result, {}, {}, {})} ${validate_component(Works, "Works").$$render($$result, { works: data.works }, {}, {})} ${validate_component(Techs, "Techs").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
