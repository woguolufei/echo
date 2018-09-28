const path = require('path');

module.exports = {
    entry: './src/echo.js',
    devtool: 'none',
    output: {
        filename: 'echo.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
};