/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can customize the colors here if needed
        background: '#1a1a1a', // Example dark background color
        text: '#e5e5e5', // Example text color
      },
    },
  },
  plugins: [],
}
