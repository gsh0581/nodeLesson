const db = require('../utils/db')
class UserModel {
    constructor(){
        this.userModel = db.model('users',{
            username:String,
            password:String
        })
    }    
    insert(data){
        // instantiate a model ,and pass data
        const users = new this.userModel(data)
        // insert data
        return users.save();
    }
    find(data){
       return this.userModel.findOne({username:data.username})
    }
}


module.exports = new UserModel();