/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#86C232',    // bright green
          secondary: '#61892F',  // dark green
          dark: '#222629',       // dark background
          gray: '#474B4F',       // medium gray
          light: '#6B6E70',      // light gray
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
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
        'slide': 'slide var(--slide-speed, 60s) linear infinite',
        'slide-down': 'slide-down 0.25s ease-out',
        'slide-up': 'slide-up 0.3s ease-out'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#6B6E70',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            a: {
              color: '#86C232',
              '&:hover': {
                color: '#61892F',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};