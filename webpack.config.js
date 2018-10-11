const path = require('path');

module.exports = {
    entry: {
        echo: './src/echo.js',
        app_a_user_1: './src/app_a_user_1.js',
        app_a_user_2: './src/app_a_user_2.js',
        app_b_user_1: './src/app_b_user_1.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};