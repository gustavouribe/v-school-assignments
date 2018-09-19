const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    image: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    living: {
        type: String
    },
    bountyAmount: {
        type: Number
    },
    type: {
        type: String
    }
})


module.exports = mongoose.model("Bounty", bountySchema)