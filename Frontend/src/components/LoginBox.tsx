"use client"

import userLogin from '@/libs/userLogin';
import React, { useState } from 'react';
import FailedBox from './FailedBox';
import SucceedBox from './SucceedBox';
import Link from 'next/link';

export default function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSucceedBox, setShowSucceedBox] = useState(false);
    const [showFailedBox, setShowFailedBox] = useState(false);

    const handleDismissSucceedBox = () => {
        setShowSucceedBox(false);
    };

    const handleDismissFailedBox = () => {
        setShowFailedBox(false);
    };

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        if (response.ok) {
            setShowSucceedBox(true);
        } else {
            setShowFailedBox(true);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto md:max-w-lg lg:max-w-xl">
                <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-green-500 text-white rounded-md py-2 hover:bg-green-600 transition duration-300"
                >
                    Log In
                </button>
                <div className="text-center mt-2 mb-8">
                    Do not have an account ?
                    <Link href={`/api/auth/signin`}>
                        <span className="ml-2 text-green-500">
                            Register
                        </span>
                    </Link>
                </div>
                {showSucceedBox &&
                    <SucceedBox
                        header='Success'
                        message='Login successfully. You will be navigated to the home page soon.'
                        onDismiss={handleDismissSucceedBox}
                    />
                }
                {showFailedBox &&
                    <FailedBox
                        header='Failed'
                        message='Failed to login, maybe try again later.'
                        onDismiss={handleDismissFailedBox}
                    />
                }
            </div>
        </div>
    );
};
