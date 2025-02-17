import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default defineConfig(({ command }) => ({
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
    tsconfigPaths(),
  ],
}));
