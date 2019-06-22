const db = require('../utils/db')

class PositionModel{
    constructor(){
        let PositionSchema ={
            companyLogo:String,
            companyName:String,
            positionName:String,
            city:String,
            salary:String,
            createTime:String
        }
        this.positionModel = db.model('positions',PositionSchema)
    }
    save(data){
        let position = new this.positionModel({
            ...data,
            createTime:'2019-6-21'
        })
        return position.save()
    }
    findAll(){
        return this.positionModel.find({})
    }
}
const positionModel = new PositionModel()
module.exports = positionModel