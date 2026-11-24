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
          DEFAULT: '#123F2A',
          dark: '#0B3020',
          deep: '#072418',
          light: '#1B533A',
        },
        leaf: {
          DEFAULT: '#2E6B45',
          light: '#3F885B',
          dark: '#215234',
        },
        cream: {
          DEFAULT: '#F8F3E7',
          light: '#FCF9F2',
          warm: '#F1E9D7',
          dark: '#E7DEC7',
        },
        coconut: {
          white: '#FFFDF7',
          husk: '#7A543A',
          shell: '#4A3225',
        },
        gold: {
          DEFAULT: '#C49A45',
          light: '#DFC076',
          dark: '#9E7728',
          subtle: '#EBDCB4',
        },
        charcoal: {
          DEFAULT: '#20251F',
          light: '#363E35',
          muted: '#525B51',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(11, 48, 32, 0.12), 0 0 1px 1px rgba(196, 154, 69, 0.15)',
        'luxury-hover': '0 30px 60px -20px rgba(11, 48, 32, 0.22), 0 0 1px 1px rgba(196, 154, 69, 0.35)',
        'gold-glow': '0 0 25px rgba(196, 154, 69, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFC076 0%, #C49A45 50%, #9E7728 100%)',
        'forest-gradient': 'linear-gradient(180deg, #123F2A 0%, #0B3020 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFFDF7 0%, #F8F3E7 100%)',
      }
    },
  },
  plugins: [],
}
