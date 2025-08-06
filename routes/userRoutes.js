const express = require('express');
const router = express.Router();
const { fetchUsers } = require('../controllers/userController');

router.get('/users', fetchUsers);
//router.post('/', addUser);

module.exports = router;
