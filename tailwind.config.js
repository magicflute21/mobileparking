module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', 'sans-serif']
    },
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
