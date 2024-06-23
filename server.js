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



//passing all of the data into the json format
app.use(express.json());

//assigning the router for json data to the below http request
app.use("/api",router )//http://localhost:8000/api/user/signup
  

//selecting the port you would like the server to run on.(8000) 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${8000}`)
})