const mongoose = require('mongoose')

const wineSchema = new mongoose.Schema({
    
    itemName: String,
    type: String,
    description: String,
    foodPairings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
    }]
})

module.exports = mongoose.model("Wine", wineSchema)