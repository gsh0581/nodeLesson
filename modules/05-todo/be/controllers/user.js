const userModel = require('../models/users')
const bcrypt = require('bcrypt');
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

    async signup(req, res, next) {
        let user = await userModel.find(req.body);
        if (user) {
            res.render('succ', {
                data: JSON.stringify({
                    message: '用户名已存在。'
                })
            })
            return
        }
        res.set('Content-Type', 'application/json;charset=utf-8');

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
                // 创建session，保存用户名
                req.session.username = result['username']
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
                    mseeage: 'inserted unsuccessfully'
                })
            })
        }
    }
    // 检验缓存中是否有登录信息
    issignin(req,res,next){
        res.set('Content-Type','application/json;charset=utf-8');
        if(req.session.username){
            res.render('succ',{
                data:JSON.stringify({
                    username:req.session.username,
                    isSignin:true
                })
            })
        }else{
            res.render('succ',{
                data:JSON.stringify({
                    isSignin:false
                })
            })
        }
    }
    signout(req,res,next){
        req.session = null
        res.render('succ',{
            data:JSON.stringify({
                isSignin:false
            })
        })
    }
}
const userController = new UserController()
module.exports = userController;