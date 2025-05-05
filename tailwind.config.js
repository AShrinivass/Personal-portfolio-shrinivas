/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js app directory
    "./components/**/*.{js,ts,jsx,tsx}", // if you're using a components folder
    "./pages/**/*.{js,ts,jsx,tsx}", // optional, for pages directory (if present)
  ],
  theme: {
    extend: {
      keyframes: {
        marqueeLTR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marqueeRTL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-ltr": "marqueeLTR 25s linear infinite",
        "marquee-rtl": "marqueeRTL 25s linear infinite",
      },
    },
  },
  plugins: [],
};
