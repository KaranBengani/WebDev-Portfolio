/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cm-blue': "#05fdd8",
        'cm-red': "#fd2155", 
      },
      keyframes: {
        spinText: {
          to: { transform: 'rotate(360deg)'}
        }
      },
      animation: {
        spinText: 'spinText 30s linear infinite',
      }
    },
  },
  plugins: [],
}

