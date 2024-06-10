import React, { useState } from 'react';
import quoraBg from '../assets/quora-bg.png';
import google from "../assets/goggleLogo.png";
import facebook from "../assets/facebooklogo.jpg";
import EmailSignup from "./EmailSignup"

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
    const [emailSignup, setEmailSignup] = useState(false);
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    //--a login function 
    const Login = () => {
            if(email && password ){
                toast.success("LoggedIn Successfully") && navigate("/main")
            } else{
                toast.error("Please Enter Your email and Password")
            }
    }

    //--a login function with goolgeSignin--
    const googleSignin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            auth?.currentUser !== null && toast.success("LoggedIn Successfully") && navigate("/main")
        } catch (err) {
            console.error(err);
            toast.error(err)
        }
    };

    return (
        <>
            {/* toastify */}
            <ToastContainer autoClose={3000} />
            <div className="flex items-center justify-center"
                style={{ backgroundImage: `url(${quoraBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
                <div className="bg-white h-5/6 w-7/12 rounded-sm mt-5 p-8">
                    <h1 className="text-red-700 text-6xl font-bold font-serif text-center">Quora</h1>
                    <h1 className="text-center font-bold text-gray-500 mt-3">A place to share knowledge and better understand the world</h1>
                    <div className="flex mt-10 justify-around">
                        <div>
                            <h1 className="text-zinc-500 text-sm w-72">By continuing you indicate that you agree to Quora’s
                                <span className="text-cyan-700">Terms of Service</span> and <span className="text-cyan-700">Privacy Policy.</span></h1>
                            <div onClick={googleSignin} className="cursor-pointer flex p-3 border border-spacing-1 items-center w-80 rounded-sm mt-5">
                                <img src={google} alt="" className="w-5 h-5 ml-2" />
                                <h1 className="ml-7">Continue with Goolge</h1>
                            </div>

                            <div className="cursor-pointer flex p-3 border border-spacing-1 items-center w-80 rounded-sm mt-5">
                                <img src={facebook} alt="" className="w-5 h-5 ml-2 rounded-full" />
                                <h1 className="ml-7">Continue with Facebook</h1>
                            </div>
                            <h1 onClick={() => setEmailSignup(true)} className="text-center text-sm font-semibold text-zinc-600 mt-3 hover:bg-gray-100 rounded-full p-1 cursor-pointer">Sgin up with email</h1>
                        </div>
                        <div className='border-r-2 pr-5'></div>
                        <div className="ml-5">
                            <h1>Login</h1>
                            <hr className="w-72 mt-3" />
                            <h1 className="mt-4 font-semibold text-sm">Email</h1>
                            <input className="border border-spacing-1 p-2 w-72 mt-2 rounded focus:outline-blue-600"
                              onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" />
                            <h1 className="mt-4 font-bold text-sm">Password</h1>
                            <input className="border border-spacing-1 p-2 w-72 mt-2 rounded focus:outline-blue-600" 
                             onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your Password" />
                            <div className="flex mt-4">
                                <h1 className="text-zinc-400 text-sm mt-2 hover:underline cursor-pointer">Forgot password?</h1>
                                <button onClick={Login} className="bg-blue-500 text-white p-2 w-20 ml-24 rounded-full">Login</button>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <h1 className="text-sm text-center mt-3 text-zinc-600">
                        <Link className=' hover:underline'>About </Link> .
                        <Link className=' hover:underline'>Careers </Link>.
                        <Link className=' hover:underline'>Privacy </Link>.
                        <Link className=' hover:underline'>Terms </Link>.
                        <Link className=' hover:underline'>Contact </Link>.
                        <Link className=' hover:underline'>Languages </Link>.
                        <Link className=' hover:underline'>Your Ad Choices </Link>.
                        <Link className=' hover:underline'>Press </Link>.
                        © Quora, Inc. 2024
                    </h1>
                </div>
                {emailSignup ? <EmailSignup setEmailSignup={setEmailSignup} /> : ""}
            </div>
        </>
    )
}

export default Signup;