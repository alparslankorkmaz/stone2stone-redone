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
        "tab-gray": "#FAFAFA",
        "tab-dark-gray": "#F4F4F4",
        "tab-border": "#D0EAEB",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        fastmarquee: "fastmarquee 20s linear infinite",
        fastmarquee2: "fastmarquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fastmarquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fastmarquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
