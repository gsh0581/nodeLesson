export default function() {
return $.ajax({
    url:'/api/users/issignin',
    headers:{
      'X-Access-Token':localStorage.getItem('token') || ''
    },
    success:(result)=>{
      // let template = Handlebars.compile(userTpl);
      // let renderedUserTpl = template({
      //     isSignin:result.data.isSignin,
      //     username:result.data.username
      //   })
      //   $('.user-menu').html(renderedUserTpl);
      //   this._user()
      return result
    },
    error:(err)=>{
      return false

    }
  })

}