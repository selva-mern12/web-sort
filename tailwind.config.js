module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mplus: ['"M PLUS 1p"', 'sans-serif'],
        mukta: ['Mukta', 'sans-serif'],
        mandali: ['Mandali', 'sans-serif'],
        jacques: ['"Jacques Francois"', 'serif'],
        montaga: ['Montaga', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        darkPurple: '#150C11',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9) translateY(20px)',
          },
          '60%': {
            opacity: 1,
            transform: 'scale(1.05) translateY(-5px)',
          },
          '100%': {
            transform: 'scale(1) translateY(0)',
          },
        },
        fadeRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        zoom: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        fade: 'fadeIn 1s ease-out forwards',
        slide: 'slideUp 0.8s ease-out forwards',
        zoom: 'zoomIn 0.6s ease-out forwards',
        bounce: 'bounceIn 0.9s ease-out forwards',
        fadeRight: 'fadeRight 0.8s ease-out forwards',
        fadeDown: 'fadeDown 0.8s ease-out',
        fadeUp: 'fadeUp 0.8s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        zoom: 'zoom 0.6s ease-out'
      },
    },
  },
  plugins: [],
}