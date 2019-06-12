const qs = require('querystring')

const str = 'name:xiaolei;age:18'

const resovedStr = qs.parse(str, ';', ':')

const objQS = { name: 'xiaolei', age: '18' }

const strWithUrl = 'city=北京&url=http://www.beijing.gov.cn'

// console.log(qs.stringify(objQS, '/', ':'))
console.log(qs.escape(strWithUrl))
console.log(qs.unescape('city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttp%3A%2F%2Fwww.beijing.gov.cn'))
