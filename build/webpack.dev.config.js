const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const baseWebpackConfig = require('./webpack.base');

let htmlTemplate = path.join(__dirname, '..', 'template/index.tmpl.html');

module.export = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: config.dev.NODE_ENV
            }
        }),
        new HtmlWebpackPlugin({
            template: htmlTemplate,
            inject: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '..', 'app'),
        color: true,
        hot: true,
        inline: true,
        disableHostCheck: true,
        historyApiFallback: true,
        port: config.dev.port
    }
});