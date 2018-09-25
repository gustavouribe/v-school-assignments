const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const morgan = require("morgan")
const pairRouter = require("./routes/pairRoutes")

const PORT = 4000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/pair", pairRouter)

mongoose.connect("mongodb://localhost:27017/wine-pair", {useNewUrlParser: true})
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log("on port 4000")
})