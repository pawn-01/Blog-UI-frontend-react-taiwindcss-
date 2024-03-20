/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        
  
        'phone': {'max': '600px'},
        'tab':{'max':'950px'}
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}

