// defining schema and model for user data in mongo db
import mongoose from "mongoose";

 
const userSchema = new mongoose.Schema({
    mobile_number:{
        type:String,
        required:true
    },
    phone_number_id:{
        type:String,
        required:true
    },
    media_id:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    },
    entryTime: {
        type: Date,
        default: Date.now // Sets the current date and time as the default value
    }

});

export default mongoose.model("User",userSchema);