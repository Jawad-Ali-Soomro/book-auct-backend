const Bid = require("../Models/bidModel");

exports.createBid = async (req, res) => {
  const { bidId, highestBid, lowestBid, bidStatus } = req.body;
  const createdBid = Bid.create({ bidId, highestBid, lowestBid, bidStatus });
  if (createdBid) {
    res.status(200).json({
      message: createdBid,
    });
  } else {
    return res.status(401).json({
      message: "Failed To Create A Bid",
    });
  }
};

exports.getAllBids = async (req, res) => {
  const foundedBids = await Bid.find({});
  res.status(200).json({
    Bids: foundedBids,
  });
};
