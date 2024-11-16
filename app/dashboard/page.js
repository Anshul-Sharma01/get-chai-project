"use client";
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(!session){
            router.push("/login");
        }
    }, [session, router])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        profilePicture: '',
        coverPicture: '',
        razorpayId: '',
        razorpaySecret: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send formData to the server or handle the submission here
        console.log('Form Submitted', formData);
    };

    return (
        <div className="dashboard-container max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your Dashboard</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="input-group">
                        <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="username" className="block text-lg font-semibold">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="profilePicture" className="block text-lg font-semibold">Profile Picture URL</label>
                        <input
                            type="url"
                            id="profilePicture"
                            name="profilePicture"
                            value={formData.profilePicture}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter profile picture URL"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="coverPicture" className="block text-lg font-semibold">Cover Picture URL</label>
                        <input
                            type="url"
                            id="coverPicture"
                            name="coverPicture"
                            value={formData.coverPicture}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter cover picture URL"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="razorpayId" className="block text-lg font-semibold">Razorpay ID</label>
                        <input
                            type="text"
                            id="razorpayId"
                            name="razorpayId"
                            value={formData.razorpayId}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter Razorpay ID"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="razorpaySecret" className="block text-lg font-semibold">Razorpay Secret</label>
                        <input
                            type="password"
                            id="razorpaySecret"
                            name="razorpaySecret"
                            value={formData.razorpaySecret}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                            placeholder="Enter Razorpay Secret"
                        />
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Dashboard;