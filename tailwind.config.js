/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retro: {
          teal: '#008080',
          'teal-dark': '#006666',
          'teal-light': '#20B2AA',
          gray: '#C0C0C0',
          surface: '#D4D0C8',
          light: '#FFFFFF',
          shadow: '#808080',
          dark: '#404040',
          black: '#000000',
          navy: '#000080',
          'navy-light': '#1084D0',
          yellow: '#FFFF00',
          amber: '#FFBF00',
          red: '#800000',
          green: '#008000',
        },
        background: {
          DEFAULT: '#008080',
          secondary: '#C0C0C0',
          surface: '#D4D0C8',
          elevated: '#E0E0E0',
        },
        accent: {
          terracotta: '#000080',
          blue: '#000080',
          'blue-dark': '#000050',
          'blue-soft': 'rgba(0, 0, 128, 0.08)',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
          muted: '#555555',
          dim: '#777777',
        }
      },
      fontFamily: {
        pixel: ['VT323', 'monospace'],
        display: ['Silkscreen', 'Press Start 2P', 'VT323', 'monospace'],
        press: ['"Press Start 2P"', 'monospace'],
        mono: ['Space Mono', 'JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Plus Jakarta Sans', 'MS Sans Serif', 'Arial', 'sans-serif'],
        serif: ['Times New Roman', 'Georgia', 'serif'],
      },
      boxShadow: {
        'retro-outset': 'inset 1px 1px #ffffff, inset -1px -1px #404040, inset 2px 2px #dfdfdf, inset -2px -2px #808080, 1px 1px 0px #000000',
        'retro-inset': 'inset 1px 1px #404040, inset -1px -1px #ffffff, inset 2px 2px #808080, inset -2px -2px #dfdfdf',
        'retro-button': 'inset 1px 1px #ffffff, inset -1px -1px #404040, inset 2px 2px #dfdfdf, inset -2px -2px #808080',
        'retro-window': '2px 2px 0px rgba(0,0,0,0.5), inset 1px 1px #ffffff, inset -1px -1px #404040',
      }
    },
  },
  plugins: [],
}


