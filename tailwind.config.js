/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#FAF4E8',
          200: '#F3E7CF',
          300: '#EAD7B1',
        },
        clay: {
          50: '#FDF6EF',
          100: '#F9E9D8',
          200: '#F2D0AC',
          300: '#E8AE77',
          400: '#DE8E4C',
          500: '#D97636',
          600: '#C05A20',
          700: '#9F471A',
          800: '#7E3A19',
          900: '#66301A',
        },
        cocoa: {
          50: '#F7F4F0',
          100: '#EAE3D8',
          200: '#D3C3AD',
          300: '#B49B7C',
          400: '#96795C',
          500: '#7C604A',
          600: '#644B3B',
          700: '#4F3C30',
          800: '#3B2C24',
          900: '#2A1F19',
          950: '#1C1410',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(42, 31, 25, 0.06), 0 12px 28px rgba(42, 31, 25, 0.08)',
        lifted: '0 4px 14px rgba(42, 31, 25, 0.08), 0 20px 44px rgba(42, 31, 25, 0.14)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.94) translateY(14px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wag: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pop-in': 'pop-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.25s ease-out both',
        wag: 'wag 1.6s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
