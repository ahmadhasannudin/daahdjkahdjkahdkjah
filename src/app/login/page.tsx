'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    let [passwordType, setPasswordType] = useState('password')
    const togglePassword = () => {
        setPasswordType(passwordType == 'password' ? 'text' : 'password')
    }
    const router = useRouter();


    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        const username = formData.get('username')
        const password = formData.get('password')
        console.log(process.env.USERNAME_LOGIN);
        

        if (username != process.env.USERNAME_LOGIN || password != process.env.PASSWORD_LOGIN) {
            alert('Username atau password yang anda masukkan salah!' + process.env.USERNAME_LOGIN + process.env.PASSWORD_LOGIN)
        } else {
            const expiryTime = Date.now() + 60 * 1000; 
            localStorage.setItem("user", JSON.stringify({ username, expiry: expiryTime }));
            router.push("/")
        }
    }

    return (
        <div className="bg-gray-200 h-screen flex items-center justify-center">
            <div className="bg-white rounded px-6 py-6 w-fit">
                <div className="text-center">
                    <div className="bg-red-500 text-white text-sm py-6 px-4 w-fit mx-auto">
                        LOGO
                    </div>

                    <h1 className="mt-3 mb-6 text-lg font-semibold">Sign in to your account</h1>

                    <form onSubmit={onSubmit}>
                        <input type="text" name="username" placeholder="Username or email"
                            className="px-3 py-3 bg-gray-700 text-white rounded-lg w-[25rem] border-2 border-gray-600 focus:outline-none focus:ring-blue-600 focus:border-blue-600 text-sm block mb-4" />

                        <div className="relative mb-6">
                            <input type={passwordType} name="password" placeholder="Password"
                                className="px-3 py-3 pe-10 bg-gray-700 text-white rounded-lg w-[25rem] border-2 border-gray-600 focus:outline-none focus:ring-blue-600 focus:border-blue-600 text-sm block mb-4" />

                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                <> {
                                    passwordType == 'password'
                                        ? (
                                            <svg className="w-5 h-5 text-gray-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                viewBox="0 0 24 24" onClick={togglePassword} >
                                                <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                            </svg>
                                        )
                                        : (
                                            <svg className="w-5 h-5 text-gray-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                viewBox="0 0 24 24" onClick={togglePassword}>
                                                <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
                                                <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                                                <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                                            </svg>
                                        )
                                } </>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-blue-800 rounded-sm focus:ring-blue-500 focus:ring-2" />
                                <label htmlFor="default-checkbox" className="ms-2 text-sm font-regular text-gray-700">Remember Me</label>
                            </div>

                            <a href="#" className="font-medium text-gray-600 hover:text-gray-700 text-sm">
                                Forgot Password?
                            </a>
                        </div>

                        <button type="submit" className="bg-blue-700 w-full text-white py-2 rounded-lg mt-5 text-center">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}