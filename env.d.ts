/// <reference types="vite/client" />

declare module "*.mdx" {
  let MDXComponent: (props: unknown) => React.JSX.Element;
  export const frontmatter: unknown;
  export default MDXComponent;
}
