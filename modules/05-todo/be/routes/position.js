var express = require('express');
var router = express.Router();

const positionController = require('../controllers/position');
const oAuthBase = require('../middleware/oAuth-base');
const fileUpload = require('../middleware/upload-file')

router.route('/')
.all(oAuthBase)
.get(positionController.findAll)
.post(fileUpload.uploadFile,positionController.save)

module.exports = router;