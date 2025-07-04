/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#00B2A9',
        'dark-blue': '#0A2342',
        'medium-grey': '#6B7280',
        'dark-grey': '#374151',
        'light-grey': '#F8F9FA'
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(135deg, #0A2342 0%, #00B2A9 100%)'
      }
    },
  },
  plugins: [],
}
