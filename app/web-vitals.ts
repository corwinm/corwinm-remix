import type { Metric } from "web-vitals";
import { onCLS, onFCP, onFID, onLCP, onTTFB } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed(): string {
  return (
    (navigator as unknown as { connection: { effectiveType: string } })?.connection
      ?.effectiveType || ""
  );
}

function sendToAnalytics(metric: Metric) {
  const analyticsId = ENV?.VERCEL_ANALYTICS_ID;
  const body = {
    dsn: analyticsId || "debug",
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (!analyticsId) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
    return;
  }

  const blob = new Blob([new URLSearchParams(body).toString()], {
    // This content type is necessary for `sendBeacon`
    type: "application/x-www-form-urlencoded",
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

export function webVitals() {
  try {
    onFID((metric) => sendToAnalytics(metric));
    onTTFB((metric) => sendToAnalytics(metric));
    onLCP((metric) => sendToAnalytics(metric));
    onCLS((metric) => sendToAnalytics(metric));
    onFCP((metric) => sendToAnalytics(metric));
  } catch (err) {
    console.error("[Analytics]", err);
  }
}
