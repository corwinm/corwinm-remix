import type { MetaFunction, LoaderFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Layout from "./components/layout";
import stylesheet from "./app.css";

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },
    { rel: "icon", type: "image/x-icon", href: "/icon-ios-1024@1x.png" },
    { rel: "manifest", href: "/site.webmanifest" },
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
  "og:url": data.origin,
  "twitter:card": "summary",
  "twitter:creator": `@CorwinMarsh`,
  "twitter:title": `Corwin W. Marsh`,
  "twitter:image": `${data.origin}/profile-guest.jpg`,
});

function getEnv() {
  return {
    VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    ENV: process.env.NODE_ENV,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  // eslint-disable-next-line
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    origin: new URL(request.url).origin,
    ENV: getEnv(),
  });
};

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-black dark:text-white font-sans">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
