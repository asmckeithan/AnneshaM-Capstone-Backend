//importing express
const express = require('express')

//using the router from the express 
const blogRoutes = express.Router();

//importing controller file for blogs 
const { getAllBlogs, newBlogs, updateBlogs, findBlogs } = require("../controllers/blog-controller")

//path we are using for all blog request and responses 
blogRoutes.get("/", getAllBlogs);

//blog post path  for all blog request 
blogRoutes.post("/add", newBlogs)

//blog update path 
blogRoutes.put("/update/:id", updateBlogs)

//path to find blogs by id 
blogRoutes.get("/:id", findBlogs)

module.exports = blogRoutes