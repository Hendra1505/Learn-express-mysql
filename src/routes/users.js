const express = require('express');

const UserController = require('../controller/users');

const router = express.Router();

// READ - GET
router.get('/', UserController.getAllUsers);

// CREATE - POST
router.post('/', UserController.createNewUsers);

// UPDATE - PATCH
router.patch('/:idUser', UserController.updateUsers);

// DELETE - DELETE
router.delete('/:idUser', UserController.deleteUser);


module.exports = router;