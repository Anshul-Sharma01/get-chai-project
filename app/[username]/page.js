import React from 'react'

const page = async({ params }) => {

    const { username } = await params;
    return (
        <>
            <div className='cover relative'>
                <img className='object-cover w-full h-[350px] rounded-lg' src="https://img.freepik.com/premium-photo/stunning-celestial-night-sky-stars_230068-5540.jpg" alt="Cover Image" />
                <div className="absolute bottom-[-50px] left-[50%] transform translate-x-[-50%]">
                    <img 
                        src="https://i.pinimg.com/474x/67/77/c6/6777c6aec3fb31c31d4b5fe856df9c91.jpg" 
                        alt="User Avatar" 
                        className="rounded-full border-4 border-white shadow-lg" 
                        width={125} 
                        height={125} 
                    />
                </div>
            </div>
            <div className='info flex flex-col justify-center items-center my-24'>
                <div className='font-bold text-3xl text-white'>
                    @{username}
                </div>
                <div className='text-slate-400 mt-1 text-xl'>
                    Creating animes for free
                </div>
                <div className='text-slate-400 mt-2 text-lg'>
                    9,719 members . 82 posts . $15,450/release
                </div>
                <div className='payment w-[80%] flex gap-8 mt-16'>
                    <div className="supporters w-1/2 bg-slate-900 p-8 rounded-lg shadow-lg text-white">
                        <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
                        <ul className='text-lg'>
                            <li className="my-4 flex gap-3 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s" alt="user avatar" className="rounded-full border-2 border-white" width={33} />
                                <span>Shubham donated <span className="font-extrabold">$30</span> with a message "Keep it up!"</span>
                            </li>
                            <li className="my-4 flex gap-3 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s" alt="user avatar" className="rounded-full border-2 border-white" width={33} />
                                <span>Shubham donated <span className="font-extrabold">$30</span> with a message "Keep it up!"</span>
                            </li>
                            <li className="my-4 flex gap-3 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s" alt="user avatar" className="rounded-full border-2 border-white" width={33} />
                                <span>Shubham donated <span className="font-extrabold">$30</span> with a message "Keep it up!"</span>
                            </li>
                            <li className="my-4 flex gap-3 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s" alt="user avatar" className="rounded-full border-2 border-white" width={33} />
                                <span>Shubham donated <span className="font-extrabold">$30</span> with a message "Keep it up!"</span>
                            </li>
                            <li className="my-4 flex gap-3 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s" alt="user avatar" className="rounded-full border-2 border-white" width={33} />
                                <span>Shubham donated <span className="font-extrabold">$30</span> with a message "Keep it up!"</span>
                            </li>



                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-8 flex-col shadow-lg">
                        <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
                        <div className='flex gap-4 flex-col'>
                            <input type="text" className='w-full p-4 rounded-lg bg-slate-800 text-white' placeholder='Enter Name' />
                            <input type="text" className='w-full p-4 rounded-lg bg-slate-800 text-white' placeholder='Enter Message' />
                            <input type="number" className='w-full p-4 rounded-lg bg-slate-800 text-white' placeholder='Enter Amount' />
                            <button 
                                type="button" 
                                className="bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-lg py-2.5 text-center mt-4 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Pay
                            </button>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <button className='bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-all'>Pay $10</button>
                            <button className='bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-all'>Pay $20</button>
                            <button className='bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-all'>Pay $30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
