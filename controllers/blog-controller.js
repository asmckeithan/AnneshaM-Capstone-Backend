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


module.exports = { getAllBlogs };