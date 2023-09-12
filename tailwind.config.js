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
        "button-red": "#CB2B28",
        "line-gray": "#E5E5E7",
        "text-gray": "#9C9C9C",
        "search-bg": "#F5F5F6",
        "lighter-bg": "#E3E4E7",
        lightgray: "#fcfcfd",
        lightBlack: "#2E2727",
        semiLightBlack: "#1E1E1E",
      },
      boxShadow: {
        customShadow: "1px 2px 5px 0px #C0C1C9",
        insetShadow: "4px 4px 10px 0px rgba(64, 53, 53, 0.49) inset",
        biggerShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        biggerShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
