var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');

router.post('/signup',userController.signup);

module.exports = userController;