const express = require('express')
const carRouter = express.Router()
const Cars = require('../models/car')


// GET
carRouter.get('/', (req, res) => {
    Cars.find((err, allTheCars) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(allTheCars)
    })
})

// GET ONE
carRouter.get('/:id', (req, res) => {
    Cars.findById(req.params.id, (err, foundCar) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(foundCar)
    })
})

// ADD NEW CAR
carRouter.post('/', (req, res) => {
    const newCar = new Cars(req.body)       // Create the new car using the user's object
    newCar.save((err, newSavedCar) => {     // Save the new car in the DB
        if (err) return res.status(500).send(err)
        return res.status(201).send({newSavedCar: newSavedCar, msg: 'Car succesfully Posted'})
    })
})

// UPDATE 
carRouter.put('/:id', (req, res) => {
    Cars.findOneAndUpdate(
        { _id: req.params.id },     // Find this object by it's ID
        req.body,                   // Update it with the user's object in req.body
        { new: true },              // Request the updated object back in the response
        (err, updatedCar) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedCar)
        })
})

// DELETE
carRouter.delete('/:id', (req, res) => {
    Cars.findOneAndRemove(
        { _id: req.params.id },
        (err, deletedCar) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ msg: "Car successfully deleted", deletedCar })
        }
    )
})

module.exports = carRouter