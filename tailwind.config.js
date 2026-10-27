/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f6f0',
        surface: '#e9eee6',
        surfaceLight: '#ffffff',
        primary: '#176c55',
        primaryHover: '#105540',
        text: '#1d2923',
        textSecondary: '#626b63',
        border: '#dce3da',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
