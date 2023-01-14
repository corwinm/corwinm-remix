import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import { webVitals } from "./web-vitals";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}

webVitals();

if (ENV.ENV === "production") {
  inject();
} else {
  console.log(
    "Vercel Analytics is set up, but detected a non-production environment.\n\nPlease note that no analytics events will be sent."
  );
}
