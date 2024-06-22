//importing express
const express = require('express')

//using the router from the express 
const router = express.Router();

//import function from controller file 
import { getAllUsers } from "../controllers/user-controller"

//router request======================================================================

//router to retrieve data and function 
router.get("/", getAllUsers)

export default router;