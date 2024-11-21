import React from 'react'
import PaymentPage from '../components/PaymentPage';
import { notFound } from 'next/navigation'
import connectDB from '../db/connectDb';
import User from '../modals/User';

const page = async({ params }) => {

    const { username } = await params;
    const checkUser = async() => {
        await connectDB();
        let u = await User.findOne({username : params.username});
        if(!u){
            return notFound();
        }
    }

    await checkUser();

    return (
        <>
            <PaymentPage username={username}/>
        </>
    )
}

export default page
