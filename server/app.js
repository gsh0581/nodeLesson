const http = require('http');


require("colors");
const server = http.createServer((request,response)=>{
    response.write("ok!")
    response.end()
})

server.listen(3000,'localhost',()=>{
    console.log('Server started at http://localhost:3000'.green);
})