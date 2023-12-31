const express = require("express");
const {
  createBook,
  getAllBooks,
  getSingleBook,
  getBookOwnerDetails,
  upadteBook,
} = require("../Controllers/bookController");
const bookRouter = express.Router();

bookRouter.post("/create/book/:id", createBook);
bookRouter.get("/get/all/books", getAllBooks);
bookRouter.get("/get/book/:id", getSingleBook);
bookRouter.get("/get/book/author/:id", getBookOwnerDetails);
bookRouter.put("/update/book/:id", upadteBook);
module.exports = bookRouter;
