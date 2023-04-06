const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const userAuth = require("./routes/auth")
const userPost = require("./routes/post")


dotenv.config(); 

mongoose.connect(process.env.MONGO_URL);

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/user", userRoute)
app.use("/api/auth", userAuth)
app.use("/api/post", userPost)

app.get("/", (req, res) => {
    res.send("Welcome to home page")
})

app.listen(8800,  () => {
    console.log(`Server started at 8800`)
})