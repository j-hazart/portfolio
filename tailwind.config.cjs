/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#374158",
        tertiary: "#d76c58",
        light: "#222d41",
        dark: "#11151d",
      },
    },
  },
  plugins: [],
};
