const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    
    itemName: String,
    type: String,
    winePairings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wine"
    }]

})

module.exports = mongoose.model("Food", foodSchema)