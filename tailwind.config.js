module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      'basis': '1 1 40px',
    },
    maxWidth: {
      '1/2' : '50%',
    },
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
     }),
     fontSize: {
       'xxs': '0.5rem'
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
