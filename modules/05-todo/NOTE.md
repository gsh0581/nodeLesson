打包
转换
优化

插件
loader 解析各种文件 

yarn init -y
yarn add webpack --dev

yarn global add webpack webpack-cli webpack-dev-server

重要的文件夹

assets 
public

后端
（技术层面）
rmvc
node.js express
R:express 路由中间件
M:MongoDB + Mongoose
V:ejs
C:controller Express的业务中间件

（登录注册）
1.cookie+session
- cookie 容易被钓鱼
- 在服务器端存储数据
- cookie存数数据有限
2.token(oAuth2)
- 登录成功，记录登录态。（原因：http无状态协议）
- 后端生成token ，通过jsonwebtoken（加密：对称，非对称）
- 通过header，将token传递给前端
- 前端存储在localstorage里
- 当需要检验权限的时候，前端将token传递给后端
- 后端进行认证，并不存储
优点： 不需要后端存储数据
非对称加密，无法破解，安全性较高
缺点：会被重放攻击

单元测试
Assert 断言
原生
BDD TDD
chai.js, 语义化表达断言
Mocha 分组func断言测试，显示正确结果，语义化更明显


