import React from 'react'
import PaymentPage from '../components/PaymentPage';

const page = async({ params }) => {

    const { username } = await params;
    return (
        <>
            <PaymentPage username={params.username}/>
        </>
    )
}

export default page
