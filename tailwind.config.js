/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        body: ["Figtree", "sans-serif"],
      },
      colors: {
        primary: "#FF5B79",
        secondary: "#D8042A",
        tertiary: "#464646",
      },
    },
  },
  plugins: [],
};
