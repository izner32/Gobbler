module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        Turkey: {
          '50': '#fef7f6', 
          '100': '#fdefed', 
          '200': '#fad7d2', 
          '300': '#f7bfb7', 
          '400': '#f18e80', 
          '500': '#eb5e4a', 
          '600': '#d45543', 
          '700': '#b04738', 
          '800': '#8d382c', 
          '900': '#732e24',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
