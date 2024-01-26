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
        'dark-background': '#121212', // A dark shade for backgrounds
        'dark-text': '#E0E0E0',       // A light shade for text to ensure readability
        'dark-accent': '#375f7d',     // A cool accent color that complements the dark theme
        'dark-gray': '#1e1e1e',       // A darker gray for elements like cards or modals
      },
    },
  },
  plugins: [],
}
