/**
*  1.定义模块
*  2.暴露接口：module.exports , exports.xxx
*  3.引用接口
 */
const greeting = ()=>({
    name :"zhangsan",
    sayName : function(){
    return this.name
    }   
})

// exports =module.exports

// module.exports = {
//     greeting
// }

exports.greeting = greeting;

