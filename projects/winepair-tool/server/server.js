const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const morgan = require("morgan")
const foodRouter = require("./routes/foodRoutes")
const wineRouter = require("./routes/wineRoutes")

const PORT = 4000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/food", foodRouter)
app.use("/wine", wineRouter)

mongoose.connect("mongodb://localhost:27017/wine-pair-tool", {useNewUrlParser: true})
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log("YOOOOOOOOOOOOOOOo we on port 4000, my cholo")
})