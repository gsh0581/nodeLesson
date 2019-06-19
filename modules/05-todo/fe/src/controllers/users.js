import userTpl from '../views/user.html';

class Users{
  constructor(){
    this._renderUserTpl({isSignin:false});
    this._user()
  }
   _renderUserTpl({ isSignin = false ,username=''}) {
    // 认证
    $.ajax({
      url:'/api/users/isSignin',
      success:(result)=>{
        let template = Handlebars.compile(userTpl);
        let renderedUserTpl = template({
            isSignin:result.data.isSignin,
            username:result.data.username
          })
          $('.user-menu').html(renderedUserTpl)
      }
    })
  }
  // 渲染user模板，绑定注册登录事件
   _user(res) {
     var that = this;
      this._renderUserTpl({});
      console.log(1)
      $('#user').on('click', 'span', function (e) {
        console.log("666");
        if ($(this).attr('id') === 'user-signin') {
          $('.box-title').html('登录');
          console.log(2)
          that._doSign('/api/users/signin','signin')
        } else {
          $('.box-title').html('注册');
          console.log(3)
          that._doSign('/api/users/signup','signup')
        }
      })
    }
    // 渲染user模板，绑定登录注册事件
    // 用户注册
     _doSign(url,type) {
      console.log('doSign')
        $("#confirm").off('click').on('click', async () => {
            $.ajax({
                url,
                type: 'POST',
                data: $('#user-form').serialize(),
                success:(result)=>{
                  if(type === 'signin'){
                    this._signinSucc(result)
                  }else{
                    alert(result.data.message);
                  }
                }
            })
        })
    }
    _signinSucc(result){
      if(result.ret){
        this._renderUserTpl({
          isSignin:true,
          username:result.data.username
        })
      }
    }
}
export default Users