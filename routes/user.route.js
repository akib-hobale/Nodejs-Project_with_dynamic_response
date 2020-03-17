const express = require('express');

const route = express.Router();

const userController = require('../controller/users.controller');
route.get('/',userController.getuser);


module.exports = route; 