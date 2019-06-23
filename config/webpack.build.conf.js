const baseWebpackConfig = require('./webpack.base.conf')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: '../'
                    }
                },
                "css-loader"
            ]
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor'
                }
            }
        },
        runtimeChunk: true
    }
})