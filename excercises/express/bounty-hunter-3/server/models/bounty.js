const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    // {
    //     image: 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111115052816',
    //     firstName: 'Obi-Wan',
    //     lastName: 'Kenobi',
    //     living: true,
    //     bountyAmount: 100,
    //     type: 'Jedi',
    //     id: uuid()
    // },
    // {
    //     image: 'https://images.fun.com/products/25992/1-1/luke-skywalker-lifesize-standup.jpg',
    //     firstName: 'Luke',
    //     lastName: 'Skywalker',
    //     living: true,
    //     bountyAmount: 100,
    //     type: 'Jedi',
    //     id: uuid()
    // }  


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
        type: Boolean
    },
    bountyAmount: {
        type: Number
    },
    type: {
        type: String
    }
    
   
    




})


module.exports = mogoose.model("Bounty", bountySchema)