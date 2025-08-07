//next will be app.js
const express = require('express');             //importing express framework that will be needed to create router and use it to define routes
const router = express.Router();                //making new route to handle users route
const { fetchUsers } = require('../controllers/userController');

router.get('/users', fetchUsers);      //defining get route at /users (destination,source)
//router.post('/', addUser);

module.exports = router;
