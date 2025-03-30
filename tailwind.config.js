/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A8B84',
        secondary: '#F4A460',
      }
    },
  },
  plugins: [],
};