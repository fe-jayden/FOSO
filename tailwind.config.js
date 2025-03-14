/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'custom-gray': '#25272A',
        'custom-dark': '#09090B',
        'custom-light-gray': '#E5E7EB',
      }, backgroundImage: {
        'diamond-gradient': 'conic-gradient(from 180deg, #54ABB1 0%, #54ABB1 40.91%, #85EEB3 71%, #54ABB1 100%)',
      }
    },
  },
  plugins: [],
}