const path = require('path');
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,

                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title : "Rick and Morty Vue",
            favicon: "./public/favicon.ico",
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
};
