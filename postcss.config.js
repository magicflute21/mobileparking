const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

if(process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require("postcss-import"),
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer"),
            cssnano({
                preset: 'default'
            }),
        ]
    }
}

if(process.env.NODE_ENV === 'development') {
    module.exports = {
        plugins: [
            require("postcss-import"),
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
}