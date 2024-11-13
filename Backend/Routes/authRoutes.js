const express = require('express');
const { Login, Registration, user } = require('../Controller/authController');
const { Contact } = require('../Controller/contactControllert');
const authMiddleware = require('../middleware/auth-middleware');

const authRoutes = express.Router();

authRoutes.post('/login',Login)

authRoutes.post('/registration',Registration)

authRoutes.post('/contact',Contact)

authRoutes.get('/user', authMiddleware, user);

module.exports = authRoutes;