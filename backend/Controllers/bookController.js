const Book = require("../Models/bookModel")
const User = require("../Models/userModel")

exports.createBook = async(req,res) => {
    const {bookName , originalPrice , bookAuthor , category , publishDate , views , coverImage} = req.body
    const id = req.params.id
    const findUserAndInsertBook = await User.findById(id)
    if(findUserAndInsertBook){
        const createdBook = await Book.create({bookName , bookAuthor , originalPrice , category , publishDate , uploader:await findUserAndInsertBook._id , owner:await findUserAndInsertBook._id , views , coverImage})
        .then(res.status(200).json({
        success: true,
        message: "Book Created"
    })).catch((err) => {
        res.json(err)
    })
    if(createdBook) {
        await findUserAndInsertBook.books.push(createdBook._id.toString())
    }
    }
    else {
        return res.status(401).json({
            success: false,
            message : "You are unauthorized to create a book"
        })
    }
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

exports.getBookOwnerDetails = async(req,res) => {
    const id = req.params.id
    const getBook = await Book.findById(id)
    const userid = getBook.owner
    console.log(userid);
    const userFind = await User.findById(userid)
    res.json({
        user : userFind
    })
}
