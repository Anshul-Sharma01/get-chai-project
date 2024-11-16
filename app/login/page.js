"use client";
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const { data : session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(session){
            router.push("/dashboard");
        }
    }, [session, router])


    // if(session){
    //     return(
    //         <div className=' text-white'>
    //             Signed in as {session.user.email} 
    //             <br />
    //             <button onClick={() => signOut()}> Sign Out</button>
    //         </div>
    //     )
    // }
    return (
        <div className='text-white py-14 container mx-auto'>
            <h1 className='text-center font-bold text-3xl mb-10'>Login to Get a Chai</h1>


            <div className='flex flex-col gap-4 items-center'>


                <button
                    className="bg-white group w-64 h-16 inline-flex items-center justify-center transition-all duration-300 overflow-visible p-1 rounded-lg shadow-lg hover:bg-gray-100"
                >
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/2875/2875331.png" 
                        alt="Google Logo" 
                        className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    />
                    <span className="ml-2 text-black group-hover:text-blue-500 transition-all duration-300">Sign In with Google</span>
                </button>


                <button
                    className="bg-white group w-64 h-16 inline-flex items-center justify-center transition-all duration-300 overflow-visible p-1 rounded-lg shadow-lg hover:bg-gray-100"
                >
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGLEgRk1Rg5VTn5H0ug_hQ2hvZy31w8dChw&s" 
                        alt="LinkedIn Logo" 
                        className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    />
                    <span className="ml-2 text-black group-hover:text-blue-700 transition-all duration-300">Sign In with LinkedIn</span>
                </button>


                <button
                    className="bg-white group w-64 h-16 inline-flex items-center justify-center transition-all duration-300 overflow-visible p-1 rounded-lg shadow-lg hover:bg-gray-100"
                >
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT086HJnYSz0CDS1pha4EdeZUEityKO3mpNRg&s" 
                        alt="Twitter Logo" 
                        className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    />
                    <span className="ml-2 text-black group-hover:text-blue-400 transition-all duration-300">Sign In with Twitter</span>
                </button>


                <button
                    className="bg-white group w-64 h-16 inline-flex items-center justify-center transition-all duration-300 overflow-visible p-1 rounded-lg shadow-lg hover:bg-gray-100"
                >
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                        alt="Facebook Logo" 
                        className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    />
                    <span className="ml-2 text-black group-hover:text-blue-600 transition-all duration-300">Sign In with Facebook</span>
                </button>


                <button
                    onClick={() => {signIn("github")}}
                    className="bg-white group w-64 h-16 inline-flex items-center justify-center transition-all duration-300 overflow-visible p-1 rounded-lg shadow-lg  hover:bg-gray-100"
                >
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                        alt="GitHub Logo" 
                        className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    />
                    <span className="ml-2 text-black group-hover:text-blue-600 transition-all duration-300">Sign In with GitHub</span>
                </button>


                <button
                    className="bg-white group w-64 h-16 inline-flex items-center justify-center transition-all duration-300 overflow-visible p-1 rounded-lg shadow-lg hover:bg-gray-100"
                >
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/0/747.png" 
                        alt="Apple Logo" 
                        className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    />
                    <span className="ml-2 text-black group-hover:text-blue-600 transition-all duration-300">Sign In with Apple</span>
                </button>

            </div>
        </div>
    )
}

export default Login;
