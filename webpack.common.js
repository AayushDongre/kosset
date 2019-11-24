const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const MiniCssExtractPlugin = new ExtractTextPlugin("styles.css");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public", "static"),
        filename: "bundle.js",
        // filename: '[name]_[chunkhash].js',
        // chunkFilename: '[id].[chunkhash].js',
        // publicPath: '/ static/',
    },
    module: {
        rules: [{
            loader: "babel-loader",
            include: /\.js$/,
            exclude: /node_modules/,
        },
        ]
    }
};


