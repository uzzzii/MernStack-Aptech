const express = require('express');
const authMiddleware = require("../middleware/auth-middleware");
const {getAllUsers, deleteUserById, getUserById} = require("../Controller/adminController");
const adminMiddleware = require("../middleware/admin-middleware");
const { getAllContacts  } = require('../Controller/contactControllert');
const { UpdateUser } = require('../Controller/authController');


const adminRoute = express.Router();

adminRoute.get("/users",authMiddleware,adminMiddleware ,getAllUsers)
adminRoute.get("/contacts",authMiddleware, adminMiddleware, getAllContacts)
adminRoute.get("/users/:id",authMiddleware, adminMiddleware , getUserById)
adminRoute.delete("/users/delete/:id",authMiddleware, adminMiddleware, deleteUserById)
adminRoute.put("/edituser/user/:id",authMiddleware, adminMiddleware, UpdateUser);

module.exports = adminRoute ;