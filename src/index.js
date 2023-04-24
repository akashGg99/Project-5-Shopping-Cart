require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./route/route')
const multer = require('multer')


app.use(express.json())
app.use(multer().any())


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))



app.listen(process.env.PORT, () => {
    console.log(`Connected on Port ${process.env.PORT}`)

})
app.use('/', route)

