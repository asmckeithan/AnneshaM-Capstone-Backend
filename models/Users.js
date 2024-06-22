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

export default mongoose.model("User", usserSchema)
//mongodb will show users