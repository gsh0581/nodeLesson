const express = require('express');
const bodyParser = require('body-parser')
require('colors')
const app = express();
const router = require('./router')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 静态资源服务
app.use(express.static('./public'));

// app.use('/',(req,res)=>{
//     res.send('ok');
// })

// 1.应用中间件
// app.use((req,res,next)=>{
//     const data = req.body;
//     res.set('Content-type','text/plain');
//     console.log(data);
// res.send(data);
// })
// app.use('/users/:id',(req,res,next)=>{

//     console.log('ok!!!');
//     next();
// },(req,res,next)=>{
//     // 可串联中间件,req的数据可传递
//     console.log('fuck!!!');
// })
// 3.错误处理中间件
app.use(function (err,req,res,next) { 
    console.error(err.stack);
    res.status(500).send("Something broke!")
 })

// 路由中间件引用
app.use('/',router)
app.listen(8081,()=>{
    console.log('8081...'.green);
})