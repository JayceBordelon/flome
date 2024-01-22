/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flome-green': '#4e6e5d',
        'flome-maroon': '#6a2e35',
      },
    },
  },
  plugins: [],
}
