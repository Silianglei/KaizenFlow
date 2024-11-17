/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
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
        'solutions-pattern': `radial-gradient(circle at 50% 50%, rgba(134, 194, 50, 0.1) 0%, rgba(34, 38, 41, 0) 50%),
                            linear-gradient(rgba(34, 38, 41, 0.97), rgba(34, 38, 41, 0.97))`,
        'timeline-pattern': `linear-gradient(120deg, rgba(97, 137, 47, 0.1) 0%, rgba(34, 38, 41, 0.1) 100%),
                           linear-gradient(rgba(34, 38, 41, 0.95), rgba(34, 38, 41, 0.95))`,
        'about-pattern': `radial-gradient(circle at 100% 0%, rgba(134, 194, 50, 0.15) 0%, rgba(34, 38, 41, 0) 50%),
                         linear-gradient(rgba(34, 38, 41, 0.97), rgba(34, 38, 41, 0.97))`,
      },
      transitionDuration: {
        '400': '400ms',
        '1200': '1200ms',
      }
    },
  },
  plugins: [],
};