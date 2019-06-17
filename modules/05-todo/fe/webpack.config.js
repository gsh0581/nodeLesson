const path = require('path')
module.exports = {
    // 环境
    mode:'development',
    // 入口文件
    entry:'./src/app.js',
    // 出口文件
    output:{
        filename:'app.js',
        path: path.resolve(__dirname,'./dev')
    },
    // 配置webserver
    devServer: {
        contentBase: path.join(__dirname, "dev"),
        compress: true,
        port: 8000
      }
}