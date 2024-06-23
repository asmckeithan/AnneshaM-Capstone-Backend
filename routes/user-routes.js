//importing express
const express = require('express')

//using the router from the express 
const router = express.Router();

//import function from controller file 
const {getAllUsers, signUp, userLogin} = require ("../controllers/user-controller")

//router request======================================================================

//router to retrieve data and function 
router.get("/user", getAllUsers)

//route to retrieve data for signin page 
router.post("/user/signup", signUp)

//rout to retrieve and request date for login function 
router.post("/user/login", userLogin )


module.exports = router;