/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // // if we use medoa Tailwind will Uses OS settings
  content: [   // this defines where Tailwind will look for classes
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
