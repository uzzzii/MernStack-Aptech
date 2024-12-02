const express = require('express');
const authMiddleware = require("../middleware/admin-middleware");
const getAllUsers = require("../controllers/");
const adminMiddleware = require("../middleware/admin-middleware")

Router.get("/users",authMiddleware,adminMiddleware, getAllUsers)

module.exports = router ;