const express = require ('express')
const { registration, login } = require('../controller/userController')

let userRoutes = express.Router()


userRoutes.post('/resgisterUser',registration)
userRoutes.post('/login',login)

module.exports={userRoutes}