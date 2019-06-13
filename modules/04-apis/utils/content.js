const fs = require('fs');
const path = require('path');
const file = require('./file');
const dir = require('./dir');

// 使用 fs.statSync(fullPath).isDirectory() 来判断是否是文件目录
function content(reqUrl, public) {
    const resolvedPath = path.join(public, reqUrl);
    const isExists = fs.existsSync(resolvedPath)
    if (!isExists)
        return '[404] source not found!'
    else {
        let stat = fs.statSync(resolvedPath);
        if (stat.isDirectory()) {
            return dir(reqUrl, resolvedPath);
        } else {
            return file(resolvedPath)
        }
    }


}

module.exports = content
