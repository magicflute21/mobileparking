module.exports = {
  purge: ['./**/*.html'],
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
      'light-gray': '#C4C4C4',
      'disabled-gray': '#F4F5F7',
      'blue-350' : '#63B3ED',
      'blue-500e' : '#4299E1',
      // 'orange-600': "#DD6B20"
     }),
    extend: {
      backgroundImage: theme => ({
        'cars-image': "url('/src/img/carsbackgroundbw.png')",
     }),
     flexGrow: {
       '2': 2
     },
     fontSize: {
       'xxs': '0.5rem',
       'xxs-plus' : '0.65rem'
     },
     borderRadius: {
       '4xl' : '2rem'
     },
     screens: {
       'landscape' : {'min': '550px'},
       'iphone5' : {'max' : '360px'}
     },
     minHeight: {
       '20' : '86px',
       '270': '270px',
       '320': '320px',
       '80' : '80px'
     },
     minWidth: {
       '24' : '145px'
     },
     gridTemplateColumns: {
      'confirm' : '12px 256px'
     },
     colors: {
       orange: {
         '600': '#DD6B20'
       },
       gray: {         
         'disabled' : '#F4F5F7',
       },
       blue : {
         '350' : '#63B3ED',
         '500e': '#4299E1'
       }
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
