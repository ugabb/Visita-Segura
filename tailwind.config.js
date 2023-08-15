/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#004E81",
        secondaryColor: "#0D263B",
        slateGray: "#7C8893",
      },
    },
  },
  plugins: [],
};
