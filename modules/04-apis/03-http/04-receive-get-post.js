const http = require('http')
const url = require('url')
const querystring = require('querystring')

// const server = http.createServer((req, res) => {
//   console.log(req.url)
//   // res.setHeader('Content-Type', 'application/json;charset=utf8')

//   switch(req.url) {
//     case '/api/users/signup': 
//       res.write('<h1>signup</h1>')
//     break
//     case '/api/users/signin':
//       res.write('<h1>signin</h1>')
//     break
//   }
//   // res.write('<b>hello</b>')
//   res.end()
// })

const server = http.createServer()
server.on('request', (req, res) => {
  if (req.method === 'GET') {
    // get 数据的获取
    // 往请求端返回数据
    res.setHeader('Content-Type', 'application/json;charset=utf8')
    const urlObj = url.parse(req.url, true)
    switch(req.url) {
      case '/api/users/signin':
        // res.write(JSON.stringify(urlObj.query))
        res.write(JSON.stringify({"ret": true, "message": "登录成功."}))
        break
      case '/api/users/signout':
        res.write(JSON.stringify({"ret": true, "message": "登出成功."}))
        break
    }
    res.end()
  } else {
    // 获取POST请求数据
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      console.log(querystring.parse(data))
      res.write('ok')
      res.end()
    })
  }
})

server.listen(8000, () => {
  console.log('localhost:8000')
})