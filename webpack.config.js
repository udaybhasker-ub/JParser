const webpack = require('webpack')
const path = require('path')
const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        parser: path.resolve(__dirname, 'index.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: { extensions: ['.js', '.ts'] },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    watch: true,
    mode: 'development',
    target: "node",
    plugins: [
        new CleanWebpackPlugin(),
        /*new UglifyJSPlugin(),*/
        new DeclarationBundlerPlugin({
            moduleName: 'parser',
            out: '@types/index.d.ts'
        })
    ],
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
}
