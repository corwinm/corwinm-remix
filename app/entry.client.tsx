import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { inject } from "@vercel/analytics";
import { webVitals } from "./web-vitals";

hydrate(<RemixBrowser />, document);

webVitals();

if (ENV.ENV === "production") {
  inject();
} else {
  console.log(
    "Vercel Analytics is set up, but detected a non-production environment.\n\nPlease note that no analytics events will be sent."
  );
}
