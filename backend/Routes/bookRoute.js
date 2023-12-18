const express = require('express')
const { createBook, getAllBooks, getSingleBook } = require('../Controllers/bookController')
const bookRouter = express.Router()

bookRouter.post('/create/book' , createBook)
bookRouter.get('/get/all/books' , getAllBooks)
bookRouter.get('/get/book/:id' , getSingleBook)

module.exports = bookRouter