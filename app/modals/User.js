import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
    },
    username : {
        type : String
    },
    avatar : {
        type : String
    },
    coverpic : {
        type : String
    },
    razorpayId : {
        type : String
    },
    razorpaySecret : {
        type : String
    }
}, {
    timestamps : true
})




export default mongoose.models.User || model("User", userSchema);;



