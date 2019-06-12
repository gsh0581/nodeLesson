//CURD
const fs = require('fs');
const promiseFS = fs.promises
// 创建文件
// fs.writeFile('./greeening.log','content',(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log('文件创建成功')
//     }
// })
// console.log('tag');

// 同步操作

// fs.writeFileSync('./greeening.log','content')
// console.log('tag');
// fs.appendFileSync('./greeening.log','\gogogo')
// fs.readFile('./greeening.log','utf-8',(err,text)=>{
//     console.log(text)
// })
// fs.unlink('./greeening.log',()=>{
//     console.log("deleted!");
// })

// 创建文件夹
// fs.mkdirSync('./greeening');
// // 删除
// fs.rmdir('./greening',()=>{
//     console.log("dir deleted！");
// })
function wf(){
    return promiseFS.readFile('./greeening.log','utf-8')
    }
async function tsControl(){
    const rs=  await wf();
    console.log(rs);
}
tsControl()