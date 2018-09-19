const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid")

const bounties = [
    {
        image: 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111115052816',
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        living: true,
        bountyAmount: 100,
        type: 'Jedi',
        id: uuid()
    },
    {
        image: 'https://images.fun.com/products/25992/1-1/luke-skywalker-lifesize-standup.jpg',
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 100,
        type: 'Jedi',
        id: uuid()
    }   
] 


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        req.body.id = uuid()
        bounties.push(req.body)
        res.send(bounties)
    })

bountyRouter.route("/:id")
    .put((req, res) => {
        let bountyIndex = bounties.findIndex(bounty => req.params.id === bounty.id)
        bounties[bountyIndex] = Object.assign(bounties[bountyIndex], req.body)        
        res.send(bounties)
    })
    .delete((req, res) => {
        let bountyIndex = bounties.findIndex(bounty => req.params.id === bounty.id)
        bounties.splice(bountyIndex, 1)
        res.send(bounties)
    })

module.exports = bountyRouter