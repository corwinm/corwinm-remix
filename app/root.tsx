import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  type MetaFunction,
  type LoaderFunctionArgs,
  type LinksFunction,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import styles from "./app.css?url";
import AppLayout from "./components/layout";
import { buildMeta } from "./lib/seo";

function safeSerialize(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/x-icon", href: "/icon-ios-1024@1x.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  ...buildMeta({ origin: data?.origin }),
];

function getEnv() {
  return {
    VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    ENV: process.env.NODE_ENV,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return {
    origin: new URL(request.url).origin,
    ENV: getEnv(),
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-stone-800 dark:text-white font-sans">
        <AppLayout>{children}</AppLayout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${safeSerialize(data.ENV)}`,
          }}
        />
        <Scripts />
        <SpeedInsights />
        <Analytics
          mode={data.ENV.ENV === "production" ? "production" : "development"}
          debug={data.ENV.ENV === "development"}
        />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
