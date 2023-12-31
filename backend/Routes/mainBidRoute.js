const express = require('express')
const { createMainBid, getAllBids } = require('../Controllers/mainBidController')
const mainBidRoute = express.Router()

mainBidRoute.post('/place/bid' , createMainBid)
mainBidRoute.get('/get/main/bids' , getAllBids)

module.exports = mainBidRoute