const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    imgUrl: String,
    likes: Number,
    comments: [{
        type: String,
        reqired: true,
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)