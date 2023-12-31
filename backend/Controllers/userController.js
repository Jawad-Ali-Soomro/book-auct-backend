const Book = require("../Models/bookModel");
const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const { ObjectId } = require('mongodb');

exports.createUser = async (req, res) => {
  const { username, email, phone, password, avatar , books} = req.body;
  const findUserByEmail = await User.findOne({ email });
  const findUserByPhone = await User.findOne({ phone });
  const encrypted = await bcrypt.hash(password, 10);
  if (findUserByEmail) {
    return res.status(201).json({
      success: false,
      message: "Email Exists Already!",
    });
  } else if (findUserByPhone) {
    return res.status(201).json({
      success: false,
      message: "Phone Exists Already!",
    });
  } else {
    User.create({ username, email, phone, password: encrypted, avatar , books})
      .then(
        res.status(200).cookie("token").json({
          success: true,
          message: "User Created",
        })
      )
      .catch((err) => console.log(err));
  }
};

exports.loginUser = async (req, res) => {
  const { email, phone, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    const compared = await bcrypt.compare(password, findUser.password);
    if (compared) {
      return res.status(200).json({
        success: true,
        message: "Logged In",
      });
    } else {
      return res.status(400).json({
        success: false, 
        message: "Password din't matched",
      });
    }
  } else{
    return res.status(400).json({
      success: false,
      message: "User Not Found",
    });
  }
};

exports.updateUser = async(req,res) => {
  const id = req.params.id
  const {username , phone , email , password} = req.body
  const findUser = await User.findById(id)
  if(findUser){
    const updateUser = await User.findByIdAndUpdate(id , {username , phone , email , password})
    if(updateUser) {
      res.status(201).json({
        success: true,
        message: updateUser
      })
    }
    else {
      res.status(401).json({
        success: false,
        message: "Error In Creating Account"
      })
    }
  }
  else {
    res.status(400).json({
      success: false,
      message: "User Not Found!"
    })
  }
}

exports.getUserBooks = async (req,res) => {
  const id = req.params.id
  const findUser = await User.findById(id)
  if(findUser){
    const userBooks = await Book.findById(findUser.books.map((item) => {
      res.json({books: item._id.toString()})
    }))
  }
  else {
    res.status(401).json({
      success: false,
      message: "User Not Found"
    })
  }
}

exports.getUserById  = async (req,res) => {
  const {id} = req.body
  const foundUser = await User.findById(id)
  res.status(200).json({
    user : foundUser
  })
}
