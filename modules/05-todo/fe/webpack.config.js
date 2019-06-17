const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    // 环境
    mode: 'development',
    // 入口文件
    entry: './src/app.js',
    // 出口文件
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dev')
    },
    // 配置webserver
    devServer: {
        contentBase: path.join(__dirname, "dev"),
        compress: true,
        port: 8000
    },
    // 配置loader
    module:{
        rules:[
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192 
                    }
                  }
                ]
            },
            {
                test:/\.(scss|css)$/i,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.html$/i,
                use: {
                  loader: 'string-loader'
                }
              },
            {
                test:/\.hbs$/i,
                use:{
                    loader:'handlebars-loader'
                }
            }
        ]
    },
    // 配置插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new CopyPlugin([
            { from: './src/public',to:'./public'}
        ])
    ]
}