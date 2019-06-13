const fs = require('fs')
const path = require('path')
module.exports = function (reqUrl, resolvedPath) {
    // lists存储该目录下 所有文件名称，包括文件夹
    const lists = fs.readdirSync(resolvedPath);
    let str = '<ul>';
    for (const [index, value] of lists.entries()) {
        let href = `${reqUrl === '/' ? '' : reqUrl}/${value}`;
        let stat = fs.statSync(path.join(resolvedPath, value));
        // isDirectory()方法判断当前对象是否为一个目录
        str +=`<li> <a href="${href}">[${stat.isDirectory() ? 'dir' : 'file'}] ${value}</a></li>`;
    }
    str +='</ul>';
    return str;
}