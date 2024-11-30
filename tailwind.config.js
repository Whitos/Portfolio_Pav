/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        }
      },
      animation: {
        shine: 'shine 3s linear infinite',
      }
    },
  },
  plugins: [], 
}