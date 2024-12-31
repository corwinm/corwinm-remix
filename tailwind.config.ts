import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,md,mdx}"],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow: {
        red: "0px 2px 5px #C80303",
      },
    },
  },
  plugins: [],
} satisfies Config;
