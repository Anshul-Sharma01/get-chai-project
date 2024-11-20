"use server"


import Razorpay from "razorpay"
import Payment from "@/app/modals/Payment"
import connectDB from "@/app/db/connectDb"
import User from "@/app/modals/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    // fetch the secret of the user who is getting the payment 
    let user = await User.findOne({
        username: to_username
    })
    const secret = user?.razorpaySecret

    var instance = new Razorpay({ 
        key_id: user?.razorpayId, 
        key_secret: secret
    })



    let options = {
        amount: Number.parseInt(amount) , 
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    });

    return x

}



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
    if(oldUsername !== nData.username){
        let u = await User.findOne({ username : nData.username });
        if(u){
            return{
                error : "Username already exists"
            }
        }
    }

    await User.updateOne({ email : nData.email }, nData);
}
