# nodeLesson 运行在服务器端的JS环境
JavaScript ECMAScript宿主环境
- node.js
- 浏览器 
- flash
广义的JS = ES+BOM+DOM
即BOM、DOM的命令无法从node.js里实现
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.


Node 进程维护工具：
pm2
nodemon
supervisor

CommonJS模块
1.定义模块
2.暴露接口
3.引用接口

条件引用
循环引用

版本号命名
5.3.0.7523
5:major,主版本，大版本更新，重构
3:minor,增减功能
0.7523 patch：补丁。偶数是稳定版，基数是测试版


request GET  POST
爬虫
post提交
- server: createServer
- get(url[options])
- request(options)
- get/post