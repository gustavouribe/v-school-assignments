const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const authRouter = express.Router()

//signup - POST
authRouter.post('/signup', (req, res) => {
    // Try to find a user in the db that already has this username
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) return res.status(500).send({success: false, err})

        // If the user already exists, deny the request and send back the error message
        if(exisitingUser !== null){
            return res.status(400).send({success: false, err: "That username already exists"})
        }

        // we can now safely add the user to the dbas we have confirmed that username is not taken
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({success: false, err})

            // If the user signs up , we might as well give them a token
            // So we send that token with the user object to the front end
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success: true, user: user.toObject(), token})
        })
    })
})

//login - POST
authRouter.post('/login', (req, res) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send({success: false, err: "Username or Password are incorrect"})

        // If that user isn't in the database, or if the password wrong
        if(!user || user.password !== req.body.password){
            return res.status(403).send({success: false, err: "Username or Password are incorrect"})
        }

        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.send({success: true, token, user: user.toObject()})

    })
})


module.exports = authRouter

