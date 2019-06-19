import menuTpl from '../views/menu.html'

import homeTpl from '../views/home.hbs'
import Users from './users'
export const render =(req,res,next)=>{
    $('.sidebar-menu').html(menuTpl) // 模板文件添加到源文件

    //渲染登录注册
    new Users();
        // 返回路由的home页
    res.render(homeTpl({}))

}