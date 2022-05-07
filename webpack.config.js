const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        main: path.resolve(__dirname, './src/script.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}