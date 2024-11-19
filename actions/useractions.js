"use server"


import Razorpay from "razorpay"
import Payment from "@/app/modals/Payment"
import connectDB from "@/app/db/connectDb"
import User from "@/app/modals/User"


export const initiate = async(amount, to_username, paymentform) => {
    await connectDB();
    var instance = new Razorpay({ 
        key_id : process.env.NEXT_PUBLIC_KEY_ID, 
        key_secret : process.env.NEXT_PUBLIC_KEY_SECRET ,
        
    })

    let options = {
        amount : Number.parseInt(amount),
        currency : "INR"
    }

    let x = await instance.orders.create(options);

    // create a payment object which shows a pending payment in the database
    await Payment.create({
        oid : x.id,
        amount : amount,
        to_user : to_username,
        name : paymentform.name,
        message : paymentform.message
    })

    return x;
}

