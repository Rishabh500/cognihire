/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#102A24', // Primary forest green
          deep: '#102A24',
          dark: '#081B16',   // Deep evergreen
          surface: '#15332C',
          hover: '#0C221D',
          border: '#1E433A',
        },
        evergreen: {
          DEFAULT: '#081B16',
          surface: '#10251F',
          border: '#17362E',
        },
        mist: {
          DEFAULT: '#F3F6F4', // Secondary background mist gray with subtle green undertone
          light: '#F8FAF9',
          dark: '#E5ECE7',
          surface: '#F3F6F4',
          border: '#DDE4DB',
        },
        mint: {
          DEFAULT: '#B8D8C0', // Soft mint accent #B8D8C0
          light: '#E2EFE5',
          dark: '#8EBA99',
          glow: 'rgba(184, 216, 192, 0.35)',
        },
        sage: {
          DEFAULT: '#789985', // Sage green accent #789985
          light: '#9BB8A5',
          dark: '#587763',
        },
        ink: {
          primary: '#17251F', // Primary text #17251F
          muted: '#69766F',   // Secondary text #69766F
          subtle: '#8C9A92',
        },
        border: {
          DEFAULT: '#DDE4DB', // Borders #DDE4DB
          subtle: '#E8ECE6',
        },
        brand: {
          forest: '#102A24',
          evergreen: '#081B16',
          primary: '#FFFFFF',
          secondary: '#F3F6F4',
          mist: '#F3F6F4',
          mint: '#B8D8C0',
          sage: '#789985',
          text: '#17251F',
          muted: '#69766F',
          border: '#DDE4DB',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 42, 36, 0.04), 0 1px 2px -1px rgba(16, 42, 36, 0.03)',
        'elevated': '0 10px 25px -5px rgba(16, 42, 36, 0.06), 0 8px 10px -6px rgba(16, 42, 36, 0.03)',
        'deep': '0 20px 40px -15px rgba(8, 27, 22, 0.3)',
        'mint-glow': '0 0 20px rgba(184, 216, 192, 0.3)',
      }
    },
  },
  plugins: [],
}
