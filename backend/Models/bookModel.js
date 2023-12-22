const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName : {
        type: String
    },
    coverImage : {
        type: String
    },
    bookAuthor : {
        type: String
    },
    originalPrice: {
        type: Number
    },
    category : {
        type: String
    },
    publishDate : {
        type : Date
    },
    uploader : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    views : {
        type: Number
    }
})

const Book = mongoose.model("Book" , bookSchema)
module.exports = Book