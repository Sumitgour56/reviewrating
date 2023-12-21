const express = require('express');
const { createcompany, companylist } = require('../controller/companycontroller');
const companyRoutes = express.Router();
companyRoutes.post("/",createcompany)
companyRoutes.get("/list",companylist)

module.exports ={companyRoutes}