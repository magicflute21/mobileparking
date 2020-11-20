module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-gray': '#c4c4c4',
     }),
    extend: {
      backgroundImage: theme => ({
        'cars-image': "url('/public/img/carsbackgroundbw.png')",
     })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
