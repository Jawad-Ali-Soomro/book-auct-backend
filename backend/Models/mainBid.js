const { default: mongoose } = require("mongoose");

const mainBidSchema = new mongoose.Schema({
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bookId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book'
    },
    price: {
        type: Number
    }
})

const mainBid = mongoose.model("mainBid" , mainBidSchema)
module.exports = mainBid