const http = require('http')
const proxy = require('http-proxy-middleware')
require('colors')
const server = http.createServer((req, res) => {
    var options = {
        target:'http://m.lagou.com',
        changeOrigin:true,
        pathRewrite:{
            '^/api':'',
        }
    }
    var exampleProxy = proxy(options)
    if (/^\/api/.test(req.url)) {
        let result = exampleProxy(req,res);
        console.log(result);
    }
    res.end('ok')
})
server.listen(8000,()=>{
    console.log('listen ... 8080'.green)
})