const fs = require('fs')
const path = require('path')
const http = require('http')
const content = require('./utils/content')
const mimes = require('./utils/mimes')

const server = http.createServer((req, res) => {
    const reqUrl = req.url;
    const public = __dirname + '/public';

    if (/favicon\.ico$/.test(reqUrl)) {
        ;
    } else {
        const cont = content(reqUrl, public);
        // 使用extname提取路径后的拓展名
        let extName = path.extname(path.join(public, reqUrl));
        // 设置响应头对应拓展名的文本格式
        let mimeValue = (extName && mimes[extName.slice(1)] || 'text/html')
        res.setHeader('Content-Type', mimeValue);
        if (/image\//.test(mimeValue)) {
            res.write(cont, 'binary')
        } else {
            res.write(cont)
        }
        res.end();
    }
})
server.listen(5000, () => {
    console.log('localhost:5000')
})