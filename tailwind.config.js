/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["var(--font-openSans)"],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/Layer_BG.png')",
      },
      width: {
        "mobile-width": "350px",
      },
      colors: {
        "main-red": "#CE2B28",
        "line-gray": "#E5E5E7",
        "text-gray": "#9C9C9C",
        "search-bg": "#F5F5F6",
      },
    },
  },
  plugins: [],
};
