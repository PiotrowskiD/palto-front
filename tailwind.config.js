/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "1280px": { max: "1280px" },
      "996px": { max: "996px" },
      "600px": { max: "600px" },
      "500px": { max: "500px" },
    },
    extend: {},
  },
  plugins: [],
};
