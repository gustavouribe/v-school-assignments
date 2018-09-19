const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

// mongoDB connect
mongoose.connect('mongodb://localhost:27017/crud-store', { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(err => console.log(err)) 

// Routes
app.use('/cars', require('./routes/carRoute'))

app.listen(5500, () => {
    console.log(`Server is running on Port 5500`)
})