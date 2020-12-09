const path = require('path');

module.exports = {

    entry: './src/index.js',    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    
                    'resolve-url-loader',
                    
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath:  'img',
                    },
                  },
                ],
              },
        ]
    },
    
}


//  should add babel later