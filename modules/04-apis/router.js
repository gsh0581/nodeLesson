const http = require('http');
const fs = require('fs');
require('colors');
const app = http.createServer((req,res)=>{
    let url = req.url;
    switch(url){
        case '/home' : 
           let ht =  fs.readFileSync('./home.html','utf-8');
           res.write(ht);
           break
        case '/index.css' : 
        let css =  fs.readFileSync('./index.css','utf-8');
        res.write(css);
        break
        default:
            res.write('page not found!');
    }
    res.end();
})
app.listen('8000',()=>{
    console.log("listen 8000....".green)
})
