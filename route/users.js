const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");

router.get('/:id', userController.getOrdersByUserId);
router.post('', userController.addUser);
router.post('', userController.addOrder);
module.exports = router;
