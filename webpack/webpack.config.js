const path = require('path');
const webpack = require('webpack');
const HtmlWebpoackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.json']
    },
    entry: [path.resolve(__dirname, '../src/index.js')],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 1,
                        localIndentName: '[name]___[local]___[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }),
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            allChunks: true
        }),
        new HtmlWebpoackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname, '../src/favicon.ico')
        })
    ]
}