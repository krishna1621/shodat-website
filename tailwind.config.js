/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlue: "#016C7B",
        customGrey: "#595959",
        customGrey1: "#555555",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
