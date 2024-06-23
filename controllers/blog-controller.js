const Blog = require('../models/Blog')

const getAllBlogs = async(request, response, next ) => {
    let blogs;

    try {
        blogs = await Blog.find();
    }catch (err){
       return console.log(err)
    }//if no blogs found then we will display an error 
    if (!blogs){
        return response.status(404).json({message:"No post found"})
    }
}

module.exports = {
    getAllBlogs
}