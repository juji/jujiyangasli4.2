import { w as works } from "../../../chunks/data.server.js";
import { C as COOKIE_NAME } from "../../../chunks/vars.server.js";
import rs from "randomstring";
function load({ cookies }) {
  cookies.set(
    COOKIE_NAME,
    rs.generate()
  );
  return {
    works: works.map((v) => {
      const { images, ...rest } = v;
      return {
        ...rest,
        image: images[0]
      };
    })
  };
}
export {
  load
};
