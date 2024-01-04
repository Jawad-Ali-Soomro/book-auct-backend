const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Username"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Email Should Be Unique"],
  },
  phone: {
    type: Number,
    unique: [true, "Phone Nummber Should Be Unique"],
    required: [true, "Please Enter Your Phone Number"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
  },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=626&ext=jpg&ga=GA1.1.1907154234.1703679306&semt=sph",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
