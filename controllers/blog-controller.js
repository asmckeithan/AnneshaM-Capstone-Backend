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


//updating blog request function 
const updateBlogs = async (req, res, next ) => {
    const {id} = req.params;
    const {title, description, image, video, user} = req.body;
    try{
//This try catch is looking for a post by the given id, only then can it updated 
const blog = await Blog.findByIdAndUpdate(
    id,
    {
        title,
        description,
        image,
        video,
        user,
        updatedAt: Date.now()
    },//Now we can return the updated document 
    {new:true}
); if (!blog){//if no blog found by that id then leave a response 
    return res.status(404).json({message:"No Post Found"})
}
    }catch (err){
        console.log("Unable to update Blog",err);
        return res.status(500).json({message:"Server Error"})
    }
}

module.exports = { getAllBlogs, newBlogs, updateBlogs };