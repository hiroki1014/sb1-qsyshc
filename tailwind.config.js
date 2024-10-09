/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008080',
          light: '#20B2AA',
        },
        accent: {
          DEFAULT: '#4682B4',
          light: '#87CEEB',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F0F0F0',
        },
        text: {
          DEFAULT: '#333333',
          light: '#4A4A4A',
        },
      },
    },
  },
  plugins: [],
}