const express = require('express')
const foodRouter = express.Router()
const Food = require('../models/Food')
const Wine = require('../models/Wine')


foodRouter.route('/')
    .get((req, res) => {
        Food.find((err, allTheFood) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allTheFood)
        })
    })
    .post((req, res) => {
        console.log(req.body)
        const newFood = new Food(req.body)
        newFood.save((err, newSavedFood) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send({newSavedFood: newSavedFood, msg: "Food item updated"})
        })
    })  


foodRouter.route('/:id')
    .get((req, res) => {
        Food.findById(req.params.id, (err, foundFood) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundFood)
        })
    })
    .put((req, res) => {
        Food.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedfood) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedfood)
            }
        )
    })
    .delete((req,res) => {
        Food.findOneAndRemove(
            { _id: req.params.id },
            (err, deletedFood) => {
                if (err) return res.status(500).send(err)
                return res.status(202).send({ deletedFood, msg: "Food item deleted" })
            }
        )
    })

foodRouter.route("/:foodId/addPairings/:wineId")
    .put((req, res) => {
        Wine.findById(req.params.wineId,
            (err, winePairings) => {
                Food.findOneAndUpdate(
                    {_id: req.params.foodId},
                    {$push: {winePairings: winePairings}},
                    {new: true},
                    (err, updatedFood) => {
                        console.log(updatedFood)
                        return res.send(updatedFood)
                    })
            })
    })


module.exports = foodRouter