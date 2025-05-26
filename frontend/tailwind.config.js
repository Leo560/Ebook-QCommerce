/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  daisyui: {
       themes: ["light"], // Disable all themes
     },
    plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}