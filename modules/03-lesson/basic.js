const fs = require("fs");
/**
 * writeFile(path, data, callback: (err) =>{})
 * callback：错误优先的回调函数
 */
fs.writeFile('./hello.txt','hi',(err)=>{
    if(err)
    {
        console.log(err.message)
    }
        else{
            console.log('文件创建成功');
        }
});