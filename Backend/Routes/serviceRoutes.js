const express = require("express");
const {GetServices , AddServices} = require("../Controller/serviceController");
const ServicesRouter = express.Router()

ServicesRouter.get("/getservices",GetServices);
ServicesRouter.post("/addservices",AddServices);

module.exports = ServicesRouter