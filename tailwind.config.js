/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg: "url('/images/hero_bg.jpg')",
        footer_bg: "url('/images/footer/footer_bg.jpg')",
      },
      fontFamily: {
        playfair: ["var(--font-playfair_display)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        "s2s-green": "#007B76",
        "s2s-slate": "#1F1F1F",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
