import http from "http";
import content from './utils/content';
require('colors');

const app = http.createServer((req,res)=>{
    const reqUrl = req.url;
    const public = __dirname + '/public'

    const contents = content(reqUrl,public);

    res.end();
})
app.listen('9999',()=>{
    console.log('5000...'.green)
})