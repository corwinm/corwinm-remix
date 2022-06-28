import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", type: "image/x-icon", href: "/icon-ios-1024@1x.png" },
  ];
}

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: `Corwin W. Marsh`,
  description: `Corwin Marsh's personal site.`,
  author: `Corwin W. Marsh`,
  twitter: `@CorwinMarsh`,
  "og:title": `Corwin W. Marsh`,
  "og:description": `Corwin Marsh's personal site.`,
  "og:type": "website",
  "og:image": `${data.origin}/profile-guest.jpg`,
  "twitter:card": "summary",
  "twitter:creator": `@CorwinMarsh`,
  "twitter:title": `Corwin W. Marsh`,
  "twitter:image": `${data.origin}/profile-guest.jpg`,
});

export const loader: LoaderFunction = async ({ request }) => {
  return {
    origin: new URL(request.url).origin,
  };
};

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-black dark:text-white font-sans">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
