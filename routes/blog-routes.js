//importing express
const express = require('express')

//using the router from the express 
const blogRouter = express.Router();

//importing controller file for blogs 
const { getAllBlogs } = require("../controllers/blog-controller")

//path we are using for all blog request and responses 
blogRouter.get("/", getAllBlogs);

module.exports = blogRouter