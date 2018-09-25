const mongoose = require('mongoose')

const food = new mongoose.Schema({
    
    itemName: String,
    type: String,
    winePairings: [String]

})

module.exports = mongoose.model("Food", food)