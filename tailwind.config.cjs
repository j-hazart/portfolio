/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f6fa",
        secondary: "#3e3750",
        tertiary: "#ff7e33",
        "purple-light": "#2a233e",
        "purple-dark": "#171424",
      },
    },
  },
  plugins: [],
};
