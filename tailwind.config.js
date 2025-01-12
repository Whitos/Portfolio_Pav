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
      },
      textShadow: {
        sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      )
    },
  ], 
}