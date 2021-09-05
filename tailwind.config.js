module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0fa9e6',
          light: '#3fbaeb',
          dark: '#0c87b8'
        }
      },
      fontFamily: {
        headline: 'Poppins, sans-serif'
      }
    }
  },
  variants: {
    extend: {
      fontSize: ['hover'],
      backgroundColor: ['active']
    }
  },
  plugins: []
}
