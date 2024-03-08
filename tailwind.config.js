/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aleutian: "#9ea2b4",
        lottired: "#e5004b",
        americanpink: "#FF6E9E",
        strawberryblonde: "#FFDCDF",
        rossocorsa: "#d30007",
        ryzadust: "#eb6619",
        deliciousmelon: "#FFD5AF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        OfeliaExtrabold: ["OfeliaExtrabold"],
        OfeliaBold: ["OfeliaBold"],
        OfeliaMedium: ["OfeliaMedium"],
        OfeliaNormal: ["OfeliaNormal"],
        roboto: ["Roboto", "sans-serif"],
        suezone: ["Suez One", "sans-serif"],
      },
      screens: {
        xs: "330px",
        // => @media (min-width: 640px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [],
};
