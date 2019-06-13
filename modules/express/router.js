const express = require('express');
const router = express.Router();

// 2.路由中间件
// get:服务器取数据，请求数据在地址栏上
router.get('/r1',(req,res)=>{
    res.render('index',{msg:"666"});
    
})
// get:往服务器提交数据，请求的数据在报文body上
router.post('/r2',(req,res)=>{
    res.send('777')
})
// put:往服务器提交数据，请求的数据在报文body上
router.put('/r2',(req,res)=>{
    res.send('888')
})
// patch:往服务器提交数据，请求的数据在报文body上
router.patch('/r2',(req,res)=>{
    res.send('999')
})
// delete:往服务器提交数据，请求的数据在报文body上
// 提交删除数据的请求
router.patch('/r2',(req,res)=>{
    res.send('000')
})


module.exports = router;
