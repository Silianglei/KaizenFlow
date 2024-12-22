/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#86C232',
          secondary: '#61892F',
          dark: '#222629',
          gray: '#474B4F',
          light: '#6B6E70',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      animation: {
        'slide-down': 'slide-down 0.25s ease-out',
        'slide-up': 'slide-up 0.3s ease-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};