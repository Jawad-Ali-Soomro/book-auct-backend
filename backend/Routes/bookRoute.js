const express = require('express')
const { createBook, getAllBooks, getSingleBook, getBookAuthorDetails } = require('../Controllers/bookController')
const bookRouter = express.Router()

bookRouter.post('/create/book' , createBook)
bookRouter.get('/get/all/books' , getAllBooks)
bookRouter.get('/get/book/:id' , getSingleBook)
bookRouter.get('/get/book/author/:id' , getBookAuthorDetails)
module.exports = bookRouter