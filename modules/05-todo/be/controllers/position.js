const positionModel = require('../models/position')

class PositionController {
  constructor(){}

  async findAll(req, res, next) {
    res.set('Content-Type', 'application/json; charset=utf-8')
    let result = await positionModel.findAll()
    res.render('succ', {data: JSON.stringify(result)})
  }

  async save(req, res, next) {
    // 从对象里删除 companyLogo 属性
    delete req.body.companyLogo
    
    let result = await positionModel.save({
      ...req.body,
      companyLogo: req.filename
    })

    if (result) {
      res.render('succ', {
        data: JSON.stringify({
          message: '数据保存成功.'
        })
      })
    }
  }
}

const positionController = new PositionController()

module.exports = positionController