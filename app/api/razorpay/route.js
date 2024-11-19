import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/modals/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";



export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);
    

    // Check if razorpay orderid is present on server
    let p = await Payment.findOne({ oid : body.razorpay_order_id })
    if(!p){
        return NextResponse.json({ success : false, message : "Order Id not found"});
    }

    let xx = validatePaymentVerification({ "order_id" : body.razorpay_order_id, "payment_id" : body.razorpay_payment_id}, body.razorpay_signature, process.env.NEXT_PUBLIC_KEY_SECRET);

    if(xx){
        const updatedPayment = await Payment.findOneAndUpdate({
            oid : body.razorpay_order_id
        }, {paymentCompleted : true}, {new : true});
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`);
    }else{
        return NextResponse.json({ success : false, message : "Payment Verification Failed"});
    }

}









