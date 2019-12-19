const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(__dirname)
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
                test: /\.(png|jpg|webp)$/,
                include: path.join(__dirname, 'public', 'static', 'img'),
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
            {
                test: /\.(jpg|png|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[hash].[ext]",
                    },
                },
            },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
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
        }),
    ]
});