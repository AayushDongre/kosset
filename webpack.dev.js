const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        publicPath:"/static/",
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[ 
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ] 
    }
        
    
});