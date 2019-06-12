// const exports = module.exports; 内置,即exports是其快捷方式
// 无法改变this指向，只能输出，不能修改，可以添加属性
// exports = {
//     a:1,
//     test:100
// } // 此时通过外部调用test出现undefined
//一般
 exports.test = 100;
 module.exports = {
    a:1,
} // 此时可以生效，test被添加到输出中