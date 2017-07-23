const config = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const host = 'localhost';
const port = 8080;

/**
 * react hot loader
 * webpack entry 顺序“
 * react-hot-loader/patch
 * webpack-dev-server/client?http:// ${ host }: ${ port }
 * webpack/hot/only-dev-server
 */

config.entry.unshift('webpack/hot/only-dev-server');
config.entry.unshift(`webpack-dev-server/client?http://${ host }:${ port }`);
config.entry.unshift('react-hot-loader/patch');

const server = function () {
    return webpackMerge(config, {
        devServer: {
            port: port,
            hot: true,
            historyApiFallback: true,
            inline: true,
            stats: {
                color: true,
                process: true
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            })
        ]
    });
}

module.exports = server();