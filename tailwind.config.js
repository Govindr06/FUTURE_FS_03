/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px -30px rgba(253, 164, 175, 0.55)',
      },
    },
  },
  plugins: [],
};
