const express = require('express')
const { connectDatabase } = require('./Config/connectDatabse')
const userRouter = require('./Routes/userRoute')
const bookRouter = require('./Routes/bookRoute')
const app = express()
require('dotenv').config()
const port = process.env.PORT
connectDatabase()
app.use(express.json())
app.listen(port , () => {
    console.log(`Server Is Working At Port ${port}`);
})
app.use('/api/v1', userRouter)
app.use('/api/v1' , bookRouter)