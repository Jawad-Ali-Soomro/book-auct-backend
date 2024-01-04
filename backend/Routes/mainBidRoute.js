const express = require("express");
const {
  createMainBid,
  getAllBids,
  getBidById,
} = require("../Controllers/mainBidController");
const mainBidRoute = express.Router();

mainBidRoute.post("/place/bid", createMainBid);
mainBidRoute.get("/get/main/bids", getAllBids);
mainBidRoute.get("/get/bid/:id", getBidById);

module.exports = mainBidRoute;
