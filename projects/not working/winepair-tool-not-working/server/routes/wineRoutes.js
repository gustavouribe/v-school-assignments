const express = require('express')
const wineRouter = express.Router()
const Food = require('../models/Food')
const Wine = require('../models/Wine')


wineRouter.route('/')
    .get((req, res) => {
        Wine.find((err, allTheWine) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allTheWine)
        })
    })
    .post((req, res) => {
        console.log(req.body)
        const newWine = new Wine(req.body)
        newWine.save((err, newSavedWine) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send({newSavedWine: newSavedWine, msg: "Wine item updated"})
        })
    })  


wineRouter.route('/:id')
    .get((req, res) => {
        Wine.findById(req.params.id, (err, foundWine) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundWine)
        })
    })
    .put((req, res) => {
        wine.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedwine) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedwine)
            }
        )
    })
    .delete((req,res) => {
        wine.findOneAndRemove(
            { _id: req.params.id },
            (err, deletedWine) => {
                if (err) return res.status(500).send(err)
                return res.status(202).send({ deletedWine, msg: "Wine item deleted" })
            }
        )
    })

wineRouter.route("/:wineId/addPairings/:foodId")
.put((req, res) => {
    Food.findById(req.params.foodId,
        (err, foodPairings) => {
            Wine.findOneAndUpdate(
                {_id: req.params.wineId},
                {$push: {foodPairings: foodPairings}},
                {new: true},
                (err, updatedWine) => {
                    console.log(updatedWine)
                    return res.send(updatedWine)
                })
        })
})

module.exports = wineRouter








