const express = require('express');
const { Login, Registration } = require('../Controller/authController');

const authRoutes = express.Router();

authRoutes.post('/login',Login)

authRoutes.post('/registration',Registration)

authRoutes.post('/contact',contact)

module.exports = authRoutes;