"use server"


import Razorpay from "razorpay"
import Payment from "@/app/modals/Payment"
import connectDB from "@/app/db/connectDb"
import User from "@/app/modals/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();

    let user = await User.findOne({ username: to_username });
    const secret = user?.razorpaySecret;
    const key_id = user?.razorpayId;

    if (!key_id || !secret) {
        throw new Error("Razorpay credentials are missing");
    }

    var instance = new Razorpay({
        key_id: key_id,
        key_secret: secret,
    });

    let options = {
        amount: Number.parseInt(amount), 
        currency: "INR",
    };

    try {
        console.log("Options for Razorpay order creation:", options);
        let x = await instance.orders.create(options);
        console.log("Order created successfully:", x);

        await Payment.create({
            oid: x.id,
            amount: amount,
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message,
        });

        return x;
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        throw error;
    }
};




export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) {
        throw new Error("User not found");
    }
    let user = u.toObject();
    user._id = user._id.toString(); 
    // console.log("USer Details : ", user);
    return {
        ...user,
        _id: user._id, 
    };
};




export const fetchPayments = async (username) => {
    await connectDB();
    let payments = await Payment.find({ 
        to_user: username, 
        paymentCompleted: true,
    })
    .sort({ amount: -1 })
    .limit(5)
    .lean();

    // Convert any ObjectId fields to strings
    return payments.map(payment => ({
        ...payment,
        _id: payment._id.toString(), // Ensure `_id` is a string
    }));
};


export const updateProfile = async(data, oldUsername) => {
    await connectDB();
    let nData = Object.fromEntries(data);
    console.log("Data : ",nData);
    if(oldUsername !== nData.username){
        let u = await User.findOne({ username : nData.username });
        if(u){
            return{
                error : "Username already exists"
            }
        }
        const res = await User.updateOne({ email : nData.email }, nData);
        console.log("Updation : ", res);

        await Payment.updateMany({to_user : oldUsername }, {to_user : nData.username});
    }else{
        const res = await User.updateOne({email : nData.email}, nData);
        console.log("Updation data : ", res);
    }

}
