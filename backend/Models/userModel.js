const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , "Please Enter Username"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        unique: [true , "Email Should Be Unique"]
    },
    phone: {
        type: Number,
        unique: [true , "Phone Nummber Should Be Unique"],
        required: [true , "Please Enter Your Phone Number"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"]
    },
    avatar : {
        type: String
    },
    books : [
        {id : {type :mongoose.Schema.Types.ObjectId , ref: 'Book'} }
    ]
})

const User = mongoose.model("User" , userSchema)
module.exports = User