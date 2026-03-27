import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          light: 'rgb(var(--color-accent-light) / <alpha-value>)',
          dark: 'rgb(var(--color-accent-dark) / <alpha-value>)',
        },
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        pale: 'rgb(var(--color-pale) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
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
        'dm-sans': ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
