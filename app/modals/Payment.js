import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    to_user : {
        type : String,
        required : true
    },
    old : {
        type : String,
        required : true
    },
    message : {
        type : String,
    },
    amount : {
        type : Number,
        required : true
    },
    paymentCompleted : {
        type : Boolean,
        default : false
    }
}, {
    timestamps : true
})


export default mongoose.models.Payment || model("Payment", paymentSchema);


