/**
 * Buffer.from([1,2,3]) buffer实例化
 * Buffer.byteLength
 * Buffer.isBuffer()
 * Buffer.concat() 组合buffer
 */
// console.log(Buffer.alloc(10))
// console.log(Buffer.alloc(10,1))
// console.log(Buffer.from([1,2,3]))
// console.log(Buffer.from('test'))
// console.log(Buffer.from('text','base64'));
// console.log(Buffer.byteLength('test'));
// console.log(Buffer.byteLength('中国')); //一个中文，3个字节
// const buf1 = Buffer.from('test')
// const buf2 = Buffer.from('!')
// const buf = Buffer.concat([buf1,buf2]).toString();
// console.log(buf);

// const buf = Buffer.from('This.is');
// console.log(buf.length); //buf本身占的字节数 ，与内容长度无关
const buf2 = Buffer.alloc(10); 
console.log(buf2.length);//buf本身占的空间 ，与内容长度无关