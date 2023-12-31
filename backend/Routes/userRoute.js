const express = require('express')
const { createUser, loginUser, getUserById, getUserProfileName } = require('../Controllers/userController')
const userRouter = express.Router()
userRouter.post('/create/user' , createUser)
userRouter.get('/login/user' , loginUser)
userRouter.get('/get/user' , getUserById)
module.exports = userRouter
