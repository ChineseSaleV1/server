const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");
const { User } = require('../models/user.model');

router.get('/:id', userController.getOrdersByUserId);
router.post('', userController.addUser);
router.post('', userController.addOrder);
module.exports = router;
console.log( User.addUser("moshe","green","0556772995",null));