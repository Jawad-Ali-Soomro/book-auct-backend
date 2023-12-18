const Book = require("../Models/bookModel")

exports.createBook = (req,res) => {
    const {bookName , bookAuthor , originalPrice , category , publishDate , uploader , owner , views} = req.body
    const created = Book.create({bookName , bookAuthor , originalPrice , category , publishDate , uploader , owner , views})
    .then(res.status(200).json({
        success: true,
        message: "Book Created"
    }))
    .catch((err) => {
        res.json(err)
    })
}

exports.getAllBooks = async(req,res) => {
    const foundedBooks = await Book.find({})
    res.status(200).json({
        success: true,
        Books: foundedBooks
    })
}

exports.getSingleBook = async (req,res) => {
    const id = req.params.id
    const findBook = await Book.findById(id)
    res.json({
        findBook
    })
}

exports.upadteBook = async(req,res) => {
    const id = req.params.id
    const findBook = await Book.findById(id)
    if(findBook) {
        const upadted = Book.updateOne(req.body)
        res.json({
            upadted
        })
    }
}