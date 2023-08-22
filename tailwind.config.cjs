/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f6fa",
        secondary: "#1F2124",
        tertiary: "#F68657",
        "purple-light": "#383A3F",
        "purple-dark": "#1F2124",
      },
    },
  },
  plugins: [],
};
