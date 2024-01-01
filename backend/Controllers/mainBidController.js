const mainBid = require("../Models/mainBid")
const User = require("../Models/userModel")

exports.createMainBid = async(req,res) => {
    const {id , price , bookId} = req.body
    mainBid.create({id , price , bookId}).then(res.status(200).json({
        message : "Bid Placed!"
    })).catch((err) => console.log(err.message))
}


exports.getAllBids = async (req,res) => {
    const getBids = await mainBid.find().populate('id')
    const mappedBids = getBids.map((item) => ({
        bookId : item.bookId,
        userName : item.id.username,
        avatar : item.id.avatar,
        price: item.price
    }))
    res.json(mappedBids)
}