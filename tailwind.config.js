/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64748B",
        secondary: "#0A192F",
        "secondary-dark": "#020C1B",
        "text-light": "#E6F1F4",
        "text-footer": "#8892B0",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "head-hero": "url('/imagens/background-head.jpg')",
      },
    },
  },
  plugins: [],
};
