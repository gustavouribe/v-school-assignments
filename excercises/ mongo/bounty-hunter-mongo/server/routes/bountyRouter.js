const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

bountyRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, allTheBounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allTheBounty)
        })
    })
    .post((req, res) => {
        console.log(req.body)
        const newBounty = new Bounty(req.body)       // Create the new car using the user's object
        newBounty.save((err, newSavedBounty) => {     // Save the new car in the DB
            if (err) return res.status(500).send(err)
            return res.status(201).send({newSavedBounty: newSavedBounty, msg: 'Bounty succesfully Posted'})
        })
    })

bountyRouter.route('/:id')
    .put((req, res) => {
        Bounty.findOneAndUpdate(
            { _id: req.params.id },     // Find this object by it's ID
            req.body,                   // Update it with the user's object in req.body
            { new: true },              // Request the updated object back in the response
            (err, updatedBounty) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedBounty)
            })
    })
    .delete((req, res) => {
        Bounty.findOneAndRemove(
            { _id: req.params.id },
            (err, deletedBounty) => {
                if (err) return res.status(500).send(err)
                return res.status(202).send({ deletedBounty, msg: "Bounty successfully deleted" })
            }
        )
    })


module.exports = bountyRouter