

//declaring an express variable to require express
const express = require('express');


//create the express server inside a variable called app
const app = express()

//selecting the port you would like the server to run on.(8000) 
const PORT = process.env.PORT || 8000;

app.use("/",(request,response,next) => {
    response.send("hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${8000}`)
})