import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    username : {
        type : String
    },
    profilepic : {
        type : String
    },
    coverpic : {
        type : String
    }
}, {
    timestamps : true
})


const User = model("User", userSchema);

export default mongoose.models.User || User;



