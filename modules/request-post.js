const https= require('https');
const querystring = require('querystring')

const postData = querystring.stringify({
    address:'北京',
    latitude:'34',
    message:'200 OK!'
})
console.log(postData)
const options = {
    host:'',
    path:'',
    port:'443',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':Buffer.byteLength(postData)
    }
}
const req = https.request(options,(res)=>{
    console.log()
})
const server = https.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json;charset=utf8')
    res.write('{"name":19}')
})