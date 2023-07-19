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
        story1: "url('/images/stories/thumbnails/1.jpg')",
        story2: "url('/images/stories/thumbnails/2.jpg')",
        story3: "url('/images/stories/thumbnails/3.jpg')",
        story4: "url('/images/stories/thumbnails/4.jpg')",
        story5: "url('/images/stories/thumbnails/5.jpg')",
        story6: "url('/images/stories/thumbnails/6.jpg')",
        story7: "url('/images/stories/thumbnails/7.jpg')",
        story8: "url('/images/stories/thumbnails/8.jpg')",
        story9: "url('/images/stories/thumbnails/9.jpg')",
        story10: "url('/images/stories/thumbnails/10.jpg')",
        story11: "url('/images/stories/thumbnails/11.jpg')",
        story12: "url('/images/stories/thumbnails/12.jpg')",
        story13: "url('/images/stories/thumbnails/13.jpg')",
        story14: "url('/images/stories/thumbnails/14.jpg')",
        story15: "url('/images/stories/thumbnails/15.jpg')",
        story16: "url('/images/stories/thumbnails/16.jpg')",
        story17: "url('/images/stories/thumbnails/17.jpg')",
        story18: "url('/images/stories/thumbnails/18.jpg')",
        story19: "url('/images/stories/thumbnails/19.jpg')",
        story20: "url('/images/stories/thumbnails/20.jpg')",
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
    },
  },
  plugins: [],
};
