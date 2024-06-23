//importing express
const express = require('express')

//using the router from the express 
const router = express.Router();

//import function from controller file 
const {getAllUsers, signUp} = require ("../controllers/user-controller")

//router request======================================================================

//router to retrieve data and function 
router.get("/user", getAllUsers)

router.post("/user/signup", signUp)

module.exports = router;