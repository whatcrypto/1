/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B1222',
        'background-secondary': '#151C2C',
        'background-hover': '#1A2235',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
};