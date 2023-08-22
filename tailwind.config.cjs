/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#383A3F",
        tertiary: "#F6B352",
        light: "#1F2124",
        dark: "#1F2124",
      },
    },
  },
  plugins: [],
};
