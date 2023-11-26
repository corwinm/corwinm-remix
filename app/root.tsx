import type { MetaFunction, LoaderFunctionArgs } from "@vercel/remix";
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

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  {
    title: `Corwin W. Marsh`,
  },
  {
    name: "description",
    content: `Corwin Marsh's personal site.`,
  },
  {
    name: "author",
    content: `Corwin W. Marsh`,
  },
  {
    name: "twitter",
    content: `@CorwinMarsh`,
  },
  {
    property: "og:title",
    content: `Corwin W. Marsh`,
  },
  {
    property: "og:description",
    content: `Corwin Marsh's personal site.`,
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:image",
    content: `${data?.origin}/profile-2023.jpg`,
  },
  {
    property: "og:url",
    content: data?.origin,
  },
  {
    name: "twitter:card",
    content: "summary",
  },
  {
    name: "twitter:creator",
    content: `@CorwinMarsh`,
  },
  {
    name: "twitter:title",
    content: `Corwin W. Marsh`,
  },
  {
    name: "twitter:description",
    content: `Corwin Marsh's personal site.`,
  },
  {
    name: "twitter:image",
    content: `${data?.origin}/profile-2023.jpg`,
  },
];

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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    origin: new URL(request.url).origin,
    ENV: getEnv(),
  });
};

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-stone-800 dark:text-white font-sans">
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
