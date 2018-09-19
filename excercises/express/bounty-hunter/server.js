const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid')

const bounties = [
    {
        firstName: 'OB',
        lastName: 'Won-Kanobi',
        living: true,
        bountyAmount: 100,
        type: 'Jedi',
        id: uuid()
    },
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 100,
        type: 'Jedi',
        id: uuid()
    },
        
] 


app.use(bodyParser.json())


//GET
app.get('/bounties', (req, res) => {
    res.send(bounties)
})

app.get('/bounties/:id', (req, res) => {
    console.log(req.params)
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    res.send(foundBounty)
})

//POST
app.post('/bounties', (req, res) => {
    req.body.id = uuid()

    bounties.push(req.body)
    res.send(bounties)
})

//DELETE
app.delete('bounty/:id', (req, res) =>{
    const deleteBounty = bounties.find(person => person.id === req.params.id)
    bounties.slice(deleteBounty, 1)
    res.send(bounties)
})

//PUT
app.put('/bounties/:id', (req, res) => {
    // 1 first isolate object that needs to be updated
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    // 2 update that object witht eh req.body object the user sent us
    const updateBounty = Object.assign(foundBounty, req.body)
    // 3 Put that update objet back in the original array, replacing the old object
    bounties.splice(findBountyIndex, 1, updateBounty)
    res.send(bounties)
})


app.listen(4000, () => {
    console.log(`Server is running on port 4000`)
})