import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C4A3E',
          light: '#3D6352',
          dark: '#1A3A2E',
        },
        accent: {
          DEFAULT: '#D97757',
          light: '#E89B7F',
          dark: '#C25E3F',
        },
        cream: {
          DEFAULT: '#F5E6D3',
          light: '#FAF3E8',
          dark: '#E8D4BC',
        },
        sage: {
          DEFAULT: '#8BA888',
          light: '#A8C4A5',
          dark: '#6B8A68',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;