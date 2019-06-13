const fs = require('fs');
// 读取文件
module.exports = function(resolvedPath){
    return fs.readFileSync(resolvedPath,'binary')
}