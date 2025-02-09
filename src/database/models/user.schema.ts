
import mongoose from "mongoose";

const  Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    googleId:{
        type: String,
        
    },
    profileImage:{
        type: String
    }
})