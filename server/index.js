const express = require("express");
const app = express();
const mongoose = require("mongoose");


require('dotenv').config();


  //listening
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port => ${process.env.PORT}`)
  })

//middleware
app.use(express.json());

//db connection
mongoose.connect("mongodb://localhost:27017/").then(() => {
    console.log("db is connected")
});




//routes
