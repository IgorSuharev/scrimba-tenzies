/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/components/**.jsx', './src/components/**/index.jsx'],
  theme: {
    fontFamily: {
      'karla': 'Karla, Arial, sans-serif',
      'inter': 'Inter, Arial, sans-serif'
    },
    extend: {},
  },
  plugins: [],
};

