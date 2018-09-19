const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["dodge", "gm", "chevrolet", "ford", "tesla"] 
    },
    model: String,
    year: Number,
    color: String
})

module.exports = mongoose.model("Car", carSchema)