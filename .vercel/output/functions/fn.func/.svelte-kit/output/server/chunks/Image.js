import { c as create_ssr_component, i as compute_rest_props, k as createEventDispatcher, l as spread, o as escape_attribute_value, p as escape_object, b as add_attribute } from "./ssr.js";
var allSizes = [
  16,
  32,
  48,
  64,
  96,
  128,
  256,
  384,
  640,
  750,
  828,
  1080,
  1200,
  1920,
  2048,
  3840
];
var buildSource = (loader, src, width, quality) => {
  const widths = [
    ...new Set(
      // > This means that most OLED screens that say they are 3x resolution,
      // > are actually 3x in the green color, but only 1.5x in the red and
      // > blue colors. Showing a 3x resolution image in the app vs a 2x
      // > resolution image will be visually the same, though the 3x image
      // > takes significantly more data. Even true 3x resolution screens are
      // > wasteful as the human eye cannot see that level of detail without
      // > something like a magnifying glass.
      // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
      [
        width,
        width * 2
        /*, width * 3*/
      ].map(
        (w) => allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1]
      )
    )
  ];
  return {
    src: loader(src, widths[widths.length - 1], quality),
    srcSet: widths.map((o, i) => `${loader(src, o, quality)} ${i + 1}x`).join(", ")
  };
};
var defaultLoader = (src, width, quality) => `/api/_image?${new URLSearchParams({
  url: src,
  w: width.toString(),
  q: quality.toString()
}).toString()}`;
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builtProps;
  let $$restProps = compute_rest_props($$props, ["src", "width", "height", "alt", "class", "quality", "loader"]);
  createEventDispatcher();
  let { src } = $$props;
  let { width } = $$props;
  let { height = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  let { class: klass = void 0 } = $$props;
  let { quality = 75 } = $$props;
  let { loader = defaultLoader } = $$props;
  let imageElement;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.class === void 0 && $$bindings.class && klass !== void 0)
    $$bindings.class(klass);
  if ($$props.quality === void 0 && $$bindings.quality && quality !== void 0)
    $$bindings.quality(quality);
  if ($$props.loader === void 0 && $$bindings.loader && loader !== void 0)
    $$bindings.loader(loader);
  builtProps = buildSource(loader, src, width, quality);
  return ` <img${spread(
    [
      {
        src: escape_attribute_value(builtProps.src)
      },
      {
        srcset: escape_attribute_value(builtProps.srcSet)
      },
      { decoding: "async" },
      { loading: "lazy" },
      escape_object($$restProps),
      escape_object({ alt, height, width, class: klass })
    ],
    {}
  )}${add_attribute("this", imageElement, 0)}>`;
});
export {
  Image as I
};
