/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },

    fontFamily: {
      sans: ['"lato-bla"'],
    },
    extend: {
      colors: {
        dark: '#100e17',
      },
    },
  },
  plugins: [],
}
