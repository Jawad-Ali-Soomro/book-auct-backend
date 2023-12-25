const express = require('express')
const { createBid, getAllBids } = require('../Controllers/bidController')
const bidRoute = express.Router()

bidRoute.post('/create/bid' , createBid)
bidRoute.get('/get/bids' , getAllBids)

module.exports = bidRoute   