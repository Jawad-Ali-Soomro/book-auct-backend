const express = require("express");
const {
  createUser,
  loginUser,
  getUserById,
  getUserProfileName,
} = require("../Controllers/userController");
const userRouter = express.Router();
userRouter.post("/create/user", createUser);
userRouter.post("/login/user", loginUser);
userRouter.get("/get/user/:id", getUserById);
module.exports = userRouter;
