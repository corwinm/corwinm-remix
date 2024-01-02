/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,md,mdx}"],
  darkMode: 'media', // "class",
  theme: {
    extend: {
      boxShadow: {
        red: "0px 2px 5px #C80303",
      },
    },
  },
  plugins: [],
};
