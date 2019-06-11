/*第三方模块的查找规则
首先在当前文件夹里的node_modules里找
如果找不到 ，就到上一级目录下，继续查找node_modules,
逐层向上，找到为止
*/
const request = require('request');
request('https://api.apiopen.top/musicBroadcasting',(err,response,body)=>{
    console.log(JSON.parse(body))
})