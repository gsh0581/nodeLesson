const userModel = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path =require('path')
class UserController {
    hashPassword(pwd) {
        return new Promise((resolve) => {
            bcrypt.hash(pwd, 10, (err, hash) => {
                resolve(hash);
            })
        })
    }
    comparePassword(pwd, hash) {
        return new Promise((resolve) => {
            bcrypt.compare(pwd, hash, (err, res) => {
                resolve(res);
            })
        })
    }
    genToken(username){
        // let key = 'xiaoyu'
        let cert = fs.readFileSync(path.resolve(__dirname,'../keys/rsa_private_key.pem'))
       return jwt.sign({username},cert,{algorithm:'RS256'})
    }
    async signup(req, res, next) {
        res.set('Content-Type', 'application/json;charset=utf-8');
        let user = await userModel.find(req.body);
        if (user) {
            res.render('succ', {
                data: JSON.stringify({
                    message: '用户名已存在。'
                })
            })
            return
        }

        let password = await userController.hashPassword(req.body.password);
        let result = await userModel.insert({ ...req.body, password })


        if (result) {
            res.render('succ', {
                data: JSON.stringify({
                    mseeage: 'user registed successfully'
                })
            })
        } else {
            res.render('fail', {
                data: JSON.stringify({
                    mseeage: 'inserted unsuccessfully'
                })
            })
        }
    }
    async signin(req, res, next) {
        res.set('Content-Type', 'application/json;charset=utf-8')
        let result = await userModel.find(req.body)
        if (result) {
            if (await userController.comparePassword(req.body.password, result['password'])) {
                // Create session and save username
                req.session.username = result['username']
                // generate Token
                res.header('X-Access-Token',userController.genToken(result.username))
                res.render('succ', {
                    data: JSON.stringify({
                        username: result['username'],
                        message: "login successfully"
                    })
                })
            } else {
                res.render('fail', {
                    data: JSON.stringify({
                        message: "incorrect password"
                    })
                })
            }
        } else {
            res.render('fail', {
                data: JSON.stringify({
                    mseeage: 'inserted unsuccessfully,user not found'
                })
            })
        }
    }
    // 检验缓存中是否有登录信息
   
  
}
const userController = new UserController()
module.exports = userController;