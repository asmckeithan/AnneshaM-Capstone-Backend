//importing mongoose
const mongoose = require('mongoose')

//importing the Schema of mogoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true,
        minlength: 8

    }
})
const User = mongoose.model("User", userSchema)

module.exports = User
//mongodb will show users