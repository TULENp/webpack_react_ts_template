
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 3001,
        hot: true,
        open: true
    }
})