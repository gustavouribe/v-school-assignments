const express = require('express')
const app = express()
const bodyParser =  require('body-parser')

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

app.use(bodyParser.json())

app.get('/socks', (req, res) => {
    // res.send('Hello World')
    res.send(sockStore)
})


app.post('/socks', (req, res) => {
    sockStore.push(req.body)
    res.send(sockStore)
})


app.listen(4000, () => {
    console.log('server is running on port 4000')
})