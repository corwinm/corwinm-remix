import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
// import { inject } from "@vercel/analytics";
import { webVitals } from "./web-vitals";

hydrate(<RemixBrowser />, document);

webVitals();

// TODO: Enable once https://github.com/vercel/analytics/issues/1 is resolved
// if (ENV.ENV === "production") {
//   inject();
// } else {
//   console.log(
//     "Vercel Analytics is set up, but detected a non-production environment.\n\nPlease note that no analytics events will be sent."
//   );
// }
