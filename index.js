const express = require('express')
const mongoose = require('mongoose')
const items = require('./route/product')
const users = require('./route/users')
const winning = require('./route/winning')
const app = express()
mongoose.connect("mongodb://localhost:27017/chinaSale")
    .then(() => { console.log("mongo db connected"); })
    .catch(er => { console.log(er+"error") });
app.use(express.json())


app.use("/product",productRoute)
app.use("/user",userRoute)
app.use("/win",winningRoute)

app.listen(4500, () => console.log(`listening at http://localhost:4500`));

