import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        require : true
    },
    address:{
        type: String,
        require : true
    }
})

export default mongoose.model("Users", userSchema)