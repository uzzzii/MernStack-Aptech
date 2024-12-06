const express = require('express');
const authMiddleware = require("../middleware/auth-middleware");
const getAllUsers = require("../Controller/adminController");
const adminMiddleware = require("../middleware/admin-middleware");
const { getAllContacts } = require('../Controller/contactControllert');


const adminRoute = express.Router();

adminRoute.get("/users",authMiddleware, adminMiddleware, getAllUsers)
adminRoute.get("/contacts",authMiddleware, adminMiddleware, getAllContacts)

module.exports = adminRoute ;