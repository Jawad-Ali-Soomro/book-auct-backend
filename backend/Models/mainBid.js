const { default: mongoose } = require("mongoose");

const mainBidSchema = new mongoose.Schema({
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price: {
        type: Number
    }
})

const mainBid = mongoose.model("mainBid" , mainBidSchema)
module.exports = mainBid