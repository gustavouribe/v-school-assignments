const express =  require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')

const sockStore = [
    {
        type: 'plain',
        cost: 200
    },
    {
        type: 'polka-dot',
        cost: 1000
    }
]


// Middleware
app.use(bodyParser.json())



// Routes
app.get('/socks', (req, res) => {
    res.send('Hello World')
    res.send(sockStore)

//     const socksQueriedFor = sockStore.fileter((sock)) => {
//         return sock.cost < req.query.maxcost
//     })
//     res.send(socksQueriedFor)
// )}

app.post('/socks', (req,res) => {
    // req.body.id = uuid()
    sockStore.push(req.body)
    res.send(sockStore)
    // saves the users request object into the database
    // returns whatever the api is designed 


})

app.listen(4000, () => {
    console.log(`Server is running on port 4000`)
})