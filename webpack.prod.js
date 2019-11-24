const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, 'img'),
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.webp$|\.png$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BrotliPlugin({
            filename: "[path].br[query]",
            test: /\.js$|\.css$|\.html$|\.webp$|\.png$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});