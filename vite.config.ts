import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig, type ResolveOptions } from "vite";

export default defineConfig(({ command }) => ({
  resolve: {
    tsconfigPaths: true,
  } as ResolveOptions,
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: command === "build" ? true : undefined,
  },
  plugins: [
    tailwindcss(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    reactRouter(),
  ],
}));
