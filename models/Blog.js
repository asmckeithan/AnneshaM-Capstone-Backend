//importing mongoose to this file 
const mongoose = require('mongoose')

//adding a schema for blogs or post on the website 
const Schema = mongoose.Schema;

//creating our Schema with what we want in our blog post form 
const blogSchema = new Schema ({
    category:{
        type: String,
        required:true
    },
    title: {
        type: String, 
        required: true,
    }, 
    description: {
        type: String, 
        required: true,
    }, 
    image:{
        type: String,
        required: false,
    },
    video: {
        type: String,
        required: false ,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required: false,
    }
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog