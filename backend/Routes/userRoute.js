const express = require('express')
const { createUser, loginUser } = require('../Controllers/userController')
const userRouter = express.Router()
userRouter.post('/create/user' , createUser)
userRouter.get('/login/user' , loginUser)
module.exports = userRouter
