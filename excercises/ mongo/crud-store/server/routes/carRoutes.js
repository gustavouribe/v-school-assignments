const express = require ('express')
const carRouter = express.Router()
const Cars = require('../models/car')

//get
carRouter.get('/', (req, res) => {
    Cars.find((err, allTheCars) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(allTheCars)
    })
})

//get one
carRouter.get('/:id', (req, res) => {
    Cars.findById(req.params.id, (err, foundCar) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(foundCar)
    })
})

// add new car
carRouter.post('/', (req, res) => {
    const newCar = new Cars(req.body)
    newCar.save((err, newSavedCar) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send({newSavedCar: newSavedCar, msg: 'Car successully posted'})
    })
})

//update
carRouter.put('/:id', (req, res) => {
    Cars.findOneAndUpdate()
})