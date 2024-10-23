const express = require('express');
const { Login, Registration } = require('../Controller/authController');
const { Contact } = require('../Controller/contactControllert');

const authRoutes = express.Router();

authRoutes.post('/login',Login)

authRoutes.post('/registration',Registration)

authRoutes.post('/contact',Contact)

module.exports = authRoutes;