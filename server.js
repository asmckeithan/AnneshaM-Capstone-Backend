//importing router file user-routes to the main server file 
const router = require ("./routes/user-routes.js")

//declaring an express variable to require express
const express = require('express');

//importing mongoose
const mongoose = require('mongoose')

//inserting your driver string to connect mongoose
mongoose.connect(
    "mongodb+srv://asmckeithan:Q5ME2EhZba9PiA0S@firstcluster.shdprc6.mongodb.net/Capstone-Project"
).then(() => console.log("Connected to MongoDB using Mongoose"))


//create the express server inside a variable called app
const app = express()

//selecting the port you would like the server to run on.(8000) 
const PORT = process.env.PORT || 8000;

//


app.use("/api/user",router )//http://localhost:8000/api/user/logon
  


app.listen(PORT, () => {
    console.log(`Listening on port: ${8000}`)
})