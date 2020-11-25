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
      'light-gray': '#E5E7EB',
      'disabled-gray': '#F4F5F7',
     }),
    extend: {
      backgroundImage: theme => ({
        'cars-image': "url('/public/img/carsbackgroundbw.png')",
     }),
     flexGrow: {
       '2': 2
     },
     fontSize: {
       'xxs': '0.5rem'
     },
     borderRadius: {
       '4xl' : '2rem'
     },
     screens: {
       'landscape' : {'min': '550px'},
       'iphone5' : {'max' : '320px'}
     },
     minHeight: {
       '20' : '86px'
     },
     minWidth: {
       '24' : '158px'
     },
     colors: {
       orange: {
         '600': '#DD6B20'
       },
       gray: {         
         'disabled' : '#F4F5F7',
       },
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
