import React from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase/setup";

//--in function taking props--
function EmailSignup(props) {
    //--useState for email and password--
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //--Signup function--
    const Signup = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onAuthStateChanged(auth, (user) => {
                sendEmailVerification(user)
            })
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <>  
        {/* using tailwind model */}
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className=" fixed inset-0 bg-zinc-950 bg-opacity-80 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-6/12">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                                <div className="sm:items-start">
                                    <h1 onClick={() => props?.setEmailSignup(false)} className="cursor-pointer">X</h1>
                                    <h1 className='mt-3 font-semibold text-lg'>Sgin up</h1>
                                    <h1 className='mt-3 text-sm font-semibold'>Email</h1>
                                    <input className='mt-3  outline-blue-400 border border-spacing-1 p-2 w-full rounded-sm'
                                      onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Your Email' />
                                    <h1 className='mt-3 text-sm font-semibold'>Password</h1>
                                    <input className='mt-3 outline-blue-400 border border-spacing-1 p-2 w-full rounded-sm'
                                      onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='Your Password' />
                                </div>
                                <hr className='mt-5' />
                                <button onClick={Signup} className='bg-blue-500 text-white rounded-full p-2 w-20 my-3 float-end'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailSignup;