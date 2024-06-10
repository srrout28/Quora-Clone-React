import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

//--import files--
import search from "../assets/search.png";
import globe from "../assets/globe.png";
import account from "../assets/account.png";
import { auth } from "../firebase/setup";
import PostPopup from "./PostPopup";

function Navbar() {
    //--useState for post popup management--
    const [post, setPost] = useState(false)

    return (
        <>
            <div className="flex pl-28 pt-3 pb-0 shadow-md h-14 ">
                {/* this is for left side */}
                <div className="flex">
                    <Link className="text-red-700 text-3xl font-bold font-serif text-center hover:text-red-600">Quora</Link>
                    <Link className="ml-5 link-hov"><i className="fa-solid fa-house home-icon"></i></Link>
                    <Link className="ml-5 link-hov"><i class="fa-regular fa-rectangle-list following-icon"></i></Link>
                    <Link className="ml-5 link-hov"><i class="fa-regular fa-pen-to-square following-icon"></i></Link>
                    <Link className="ml-5 link-hov"><i class="fa-solid fa-user-group following-icon"></i></Link>
                    <Link className="ml-5 link-hov"><i class="fa-regular fa-bell following-icon"></i></Link>
                </div>

                {/* this is for mid part */}
                <div className="flex border border-spacing-1 h-10 ml-5 w-96 p-1 rounded search-hov">
                    <img src={search} className="w-3 h-3 mt-2 ml-3" />
                    <input placeholder="Search Quora" className="ml-2 outline-none w-64" />
                </div>

                {/* this is for right part */}
                <h1 className="text-sm border border-spacing-1 rounded-full h-9 pt-2 px-4 ml-5 text-gray-500 cursor-pointer hover:bg-gray-100">Try Qoura+</h1>
                {auth?.currentUser?.emailVerified ? <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" name="israr" />
                    : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer " src={account} />}
                <img src={globe} className="w-5 h-5 ml-5 mt-1 cursor-pointer" />
                <h1 className="cursor-pointer bg-red-700 rounded-full text-sm text-white w-32 pl-6 pt-2 ml-5 h-9"
                    onClick={() => setPost(true)} >Add question</h1>

                {/* this is for open a popup  */}
                {post && <PostPopup setPost={setPost} />}
            </div>
        </>
    )
}

export default Navbar;