"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <nav className="bg-blue-950 text-white flex justify-between items-center px-6 py-4 shadow-lg">

        <div className="font-bold text-xl md:text-2xl hover:text-yellow-400 transition-all duration-300 cursor-pointer">
            GetmeaChai!
        </div>

        
        <ul className="flex justify-center items-center gap-6 md:gap-8">
            <li className="transition-all duration-300 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer">
                <Link href="/">Home</Link>
            </li>
            <li className="transition-all duration-300 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer">
                <Link href="/about">About</Link>
            </li>
            <li className="transition-all duration-300 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer">
                <Link href="/projects">Projects</Link>
            </li>

            {session ? (
            <>

                <div className="relative">
                    <button
                        onClick={() => setShowDropDown((prev) => !prev)}
                        onBlur={() => setTimeout(() => {
                            setShowDropDown(false);
                        }, 300)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Welcome {session.user.email}
                        <svg
                            className="w-2.5 h-2.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                        </svg>
                    </button>   


                    <div
                        className={`${
                            showDropDown ? "" : "hidden"
                        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2 right-0`}
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="block px-4 py-2 hover:bg-gray-100 text-black dark:hover:bg-gray-600 hover:text-white"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 text-black dark:hover:bg-gray-600 hover:text-white"
                                >
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${session.user.name}`}
                                    className="block px-4 py-2 hover:bg-gray-100 text-black dark:hover:bg-gray-600 hover:text-white"
                                >
                                    Your Page
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => signOut()}
                                    className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-black dark:hover:bg-gray-600 hover:text-white"
                                >
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
            ) : (
                <>

                    <li className="transition-all duration-300 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer">
                        <Link href="/signup">Sign-Up</Link>
                    </li>
                    <li className="transition-all duration-300 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer">
                        <Link href="/login">
                            <button className="text-white">Login</button>
                        </Link>
                    </li>
                </>
            )}
        </ul>
        </nav>
    );
};

export default Navbar;
