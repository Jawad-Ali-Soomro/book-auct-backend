const { default: mongoose } = require("mongoose");

const bidSchema = new mongoose.Schema({
    bidId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    highestBid : {
        type: Number,
    },
    lowestBid: {
        type : Number
    },
    bidStatus: {
        type : Boolean
    }
})

const Bid = mongoose.model("Bid" , bidSchema)
module.exports = Bid