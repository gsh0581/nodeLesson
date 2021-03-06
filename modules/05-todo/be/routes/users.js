var express = require('express');
var router = express.Router();

const userController = require('../controllers/user')
const oAuthMiddleWare = require('../middleware/oAuth')
/* GET users listing. */
router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/issignin', oAuthMiddleWare)

module.exports = router
