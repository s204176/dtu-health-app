/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dtu-red': '#990000',
        'dtu-dark-red': '#660000',
        'dtu-light-gray': '#F5F5F5',
        'dtu-dark-gray': '#333333',
      },
    },
  },
  plugins: [],
}
