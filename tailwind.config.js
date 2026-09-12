/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mountain-blue': {
          DEFAULT: '#1B4B66',
          light: '#256387',
          dark: '#123447',
          deep: '#0B212D',
        },
        'saffron': {
          DEFAULT: '#D98E3A',
          light: '#E5A55D',
          dark: '#B87228',
          subtle: '#FAF0E4',
        },
        'chinar-red': {
          DEFAULT: '#A63B2E',
          light: '#C34B3B',
          dark: '#842D22',
        },
        'cream': {
          DEFAULT: '#FAF6F0',
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EBDDC9',
        },
        'charcoal': {
          DEFAULT: '#2B2B2B',
          muted: '#5A5A5A',
          light: '#7A7A7A',
          subtle: '#9E9E9E',
        },
        'gold-hairline': {
          DEFAULT: '#C6A15B',
          light: '#DFC48D',
          dark: '#A6823E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
        widest: '0.25em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(27, 75, 102, 0.08), 0 0 1px rgba(198, 161, 91, 0.25)',
        'luxury-hover': '0 30px 60px -15px rgba(27, 75, 102, 0.16), 0 0 2px rgba(198, 161, 91, 0.4)',
        'glow': '0 0 25px rgba(217, 142, 58, 0.25)',
      },
      animation: {
        'ken-burns': 'kenBurns 24s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}
