const http = require("http");
const url = require("url"); // 提取url
const qs = require("querystring");
const fs = require("fs")
require("colors");
let server = http.createServer((request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    // response.setHeader("Content-type","text/html;charset=utf8");
    // response.setHeader("Access-Control-Allow-Header","X-Requested-With");
    // response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    request.on("data",(chunk)=>{
        console.log("chunk");
    })
    // urlMapping[url.pathname](URL);
    request.on("on",function(){
        console.log("接收完成！");
    })
    response.end();
});
server.listen(3000,()=>{
    console.log('Server started at http://localhost:3000'.green);
});

// let urlMapping = {
//     "/login": require("./modules/login"),
//     "/userlist":require("./modules/userlist")
// }