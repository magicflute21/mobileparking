const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'dev.js'
    },
    devServer: {
        contentBase: './src/views',
    },

});

//should add babel later