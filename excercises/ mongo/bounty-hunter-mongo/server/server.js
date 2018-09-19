const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bountyRouter = require("./routes/bountyRouter")
const mongoose = require("mongoose")
const morgan = require("morgan")

const PORT = 4000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/bounty", bountyRouter)

mongoose.connect("mongodb://localhost:27017/bounty", {useNewUrlParser: true})
    .then(() => console.log("connected to MangoDB"))
    .catch(err => console.log(err));
    


app.listen(PORT, () => {
    console.log("heyyy bitch we on 4000")
})


