/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      screens: {
        ms: '320px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"]
      },
      colors: {
        lotion_white: "#FAFAFA",
        chinese_silver: "#CECBC9",
        vampire_black: "#050505",
        charleson_grey: "#272A2A",
        text_color: "#737373"
      },
      keyframes: {
        typing: {
          
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: " blink .7s infinite"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

