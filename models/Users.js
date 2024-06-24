//importing mongoose
const mongoose = require('mongoose')

//importing the Schema of mogoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        default:"Anonymous"
    },
    email: {
        type: String,
        required: false,
        unique: true, 
        default: "anonymous@test.com"
    }, 
    password:{
        type: String,
        required: true,
        minlength: 8

    },
    blogs:[{type:mongoose.Types.ObjectId, ref:"Blog", required:true}]
})
const User = mongoose.model("User", userSchema)

module.exports = User
//mongodb will show users