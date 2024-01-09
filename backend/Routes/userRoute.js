const express = require("express");
const {
  createUser,
  loginUser,
  getUserById,
  getUserProfileName,
  updateUser,
} = require("../Controllers/userController");
const userRouter = express.Router();
userRouter.post("/create/user", createUser);
userRouter.post("/login/user", loginUser);
userRouter.get("/get/user/:id", getUserById);
userRouter.patch("/update/user/:id", updateUser);
module.exports = userRouter;
