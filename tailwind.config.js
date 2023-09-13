/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dance': ['Dancing Script', 'cursive'],
        'brico': ['Bricolage Grotesque', 'sans-serif'],
        'boo': ['Black Ops One', 'cursive']
      },

      fontSize: {
        xsmmainmax: "max(2.8em, 4vw)",
        xsmaltmax: "max(2.2em, 3vw)",
        mainmax: "max(3em, 4vw)",
        altmax: "max(2.5em, 4vw)"
      },

      animation: {
        revealdown: 'reveal-down 1s',
        disappear: 'disappear 1s',
        slidedown: 'slide-down 1s',
        slideup: 'slide-up 1s linear',
        revealright: 'reveal-right 3s ease-in-out',
        revealup: 'reveal-up 1s linear',
        fadein: 'fade-in 1.5s linear',
        slideleft: 'slide-left .7s linear',
        slideright: 'slide-right .7s linear',
        zoomsl: 'zoom-slow 5s linear'
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', visibility: "visible" },
          '100%': { opacity: '1' }
        },

        'reveal-down': {
          '0%': { height: '0',  display: 'flex' },
          '100%': { height: '300px', opacity: '1' }
        },

        'disappear': {
          '0%': { height: '300px' },
          '100%': { height: '0px'  }
        },

        'slide-left': {
          '0%' : { left: '-50%' },
          '100%' : { left: '0%' }
        },

        'slide-right': {
          '0%' : { right: '-50%' },
          '100%' : { right: '0%' }
        },

        'slide-down': {
          '0%' : { top: '-5rem', visibility: 'visible' },
          '100%' : { top: '0rem' }
        },

        'slide-up': {
          '0%' : { top: '0rem' },
          '100%' : { top: '-5rem', visibility: 'hidden'}
        },

        'reveal-right': {
          '0%' : { width: '0%' },
          '100%' : { width: '100%' }
        },

        'reveal-up': {
          '0%' : { height: '0' },
          '100%' : { height: '8rem' } 
        },

        'zoom-slow': {
          '100%' : { transform: 'scale(1.1)' }
        }
      },

      backgroundImage: {
        'logo': "url('../public/img/logo.webp')",
        'home': "url('../public/img/home_bg.webp')",
        'profile': "url('../public/img/vik.webp')",
        'gems': "url('../public/img/gems.webp')",
        'pgem': 'url(../public/img/p_gem.webp)',
        'ftbg': 'url(../public/img/price_bg.webp)'
      }
    },

    screens: {
      'xlsm': {'max': '360px'},
      'xsm': {'max': '560px'},
      'sm' : {'max': '640px'},
      'md' : {'max': '768px'},
      'mmd': {'min': '769px'},
      'lmd': {'max': '840px'},
      'xmd': {'max': '900px'},
      'lg' : {'max': '1024px'},
      'xl' : {'max': '1280px'},
      '2xl': {'max': '1536px'},
    }
  },
  plugins: [],
}