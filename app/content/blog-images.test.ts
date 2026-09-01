import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const repositoryRoot = new URL("../../", import.meta.url);
const routeDirectory = new URL("../routes/", import.meta.url);

const legacyImages = [
  {
    route: "blog.introduction.mdx",
    path: "/blog-introduction.jpg",
    width: 651,
    height: 383,
  },
  {
    route: "blog.oil-code.mdx",
    path: "/blog-oil-code-thanos.jpg",
    width: 502,
    height: 500,
  },
  {
    route: "blog.oil-code.mdx",
    path: "/blog-oil-code-scarlet-witch.jpg",
    width: 597,
    height: 499,
  },
  {
    route: "blog.oil-code.mdx",
    path: "/blog-oil-code-at-home.jpg",
    width: 500,
    height: 500,
  },
  {
    route: "blog.oil-code.mdx",
    path: "/blog-oil-code-copilot.jpg",
    width: 666,
    height: 375,
  },
];

describe("legacy blog images", () => {
  it("does not depend on Imgflip at runtime", () => {
    for (const route of ["blog.introduction.mdx", "blog.oil-code.mdx"]) {
      const source = readFileSync(new URL(route, routeDirectory), "utf8");
      expect(source).not.toContain("i.imgflip.com");
    }
  });

  it.each(legacyImages)(
    "serves $path locally with intrinsic dimensions",
    ({ route, path, width, height }) => {
      const source = readFileSync(new URL(route, routeDirectory), "utf8");
      const publicAsset = new URL(`public${path}`, repositoryRoot);

      expect(existsSync(publicAsset)).toBe(true);
      expect(source).toContain(path);
      expect(source).toMatch(new RegExp(`width(?::|=\\{)\\s*${width}`));
      expect(source).toMatch(new RegExp(`height(?::|=\\{)\\s*${height}`));
    },
  );
});
