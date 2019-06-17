const qs = require('querystring')
const url = require("url"); // 提取url
require("colors");
const req = 'http://www.abc.com:8080/url/'
// 读取地址
// console.log(url.parse(req,true,true));
//解析地址
const strWithUrl = 'city:"北京"'
;
console.log(qs.unescape(qs.escape(strWithUrl)));

console.log(url.resolve(req,'abc').green)