/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espora: {
          turquoise: '#24CBC4',
          aqua: '#5DD8D5',
          indigo: '#3434AC',
          pink: '#FF5DB9',
          salmon: '#F28C7A',
          yellow: '#FFD500',
          black: '#111111',
          gray: '#8E8E93',
          bg: '#F8F8F6',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
