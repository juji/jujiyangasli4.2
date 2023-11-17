import { createRequestHandler } from "@urami/core";
const handler = createRequestHandler(
  // {
  //   remoteDomains: ['demo.rayriffy.com'],
  // }
);
const GET = (event) => handler(event.request);
export {
  GET
};
