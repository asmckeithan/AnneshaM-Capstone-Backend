const Blog = require('../models/Blog')

const getAllBlogs = async(request, response, next ) => {
    try {
       const  blogs = await Blog.find();
       if (blogs.length === 0) {
        return response.status(404).json({ message: "No Posts found" });
    }

    return response.status(200).json({ blogs });
} catch (error) {
    console.error("Error fetching blogs:", error);
    return response.status(500).json({ message: "Server Error" });
}
};

//creating a function for all posts or new blogs added to the database 
const newBlogs = async (req, res, next ) => {
    const {title, description, image, video, user} = req.body;

    const blog = new Blog({
        title, 
        description, 
        image, 
        video, 
        user
    });
    try{
        blog.save()
    }catch (error){
         return console.log("Unable to post",error)
    }
    return res.status(200).json({blog})
}


module.exports = { getAllBlogs, newBlogs };