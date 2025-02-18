/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        foreground: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        primary: '#FA8072', // Salmon pink color from the original site
        secondary: '#FFB6C1', // Light pink for gradients
        'gray-dark': '#1A1A1A',
        'gray-light': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        pixel: ['Press Start 2P', 'monospace'], // Retro pixel font
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
} 