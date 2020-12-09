## Advectus Netsuite Custom UI

All sources related to custom netsuite user interfaces are inlcuded in this project.


npm run start just compiles a src/dev.js file, 
html files in the src folder are directly linked to it. This is currently for the fast development.

For production build webpack will send the html files to dist/html folder
html-webpack-plugin generates a script file that is linked to the bundle.js file.