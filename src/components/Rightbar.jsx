import Avatar from "react-avatar";
import { auth } from "../firebase/setup";
import account from "../assets/account.png";
import question from "../assets/question.png";
import PostPopup from "./PostPopup";
import answer from "../assets/answer.png";
import webdesgin from "../assets/webDesgin.avif"
import { Link } from "react-router-dom";
import { useState } from "react";

function Rightbar() {
  const [post, setPost] = useState(false)

  return (
    <>
      <div className="p-4 pl-8 rounded-sm">
        <div className="bg-white p-2 h-20 border border-spacing-1 rounded-sm">
          <div className="flex ">
            {auth?.currentUser?.emailVerified ? <Avatar round size="25" className="mt-0.5 ml-2 " name="israr" />
              : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer " src={account} />}

            <button className="bg-gray-100 text-start  border border-spacing-1 rounded-full w-full p-1 pl-3 ml-4 text-gray-600 cursor-pointer"
             onClick={() => setPost(true)} >What do you want to ask or share?</button>
             {post && <PostPopup setPost={setPost} />}
          </div>

          <div className="flex pt-2">
            <div className="flex items-center justify-center rounded-lg w-1/3 mx-2 cursor-pointer">
              <img src={question} className="w-5 h-5" />
              <h1 className="ml-2 text-gray-500">Ask</h1>
            </div>
            <h1 className="bg-gray-200 text-sm">|</h1>
            <div className="flex items-center justify-center rounded-lg w-1/3 mx-2 cursor-pointer">
              <img src={answer} className="w-5 h-5" />
              <h1 className="ml-2 text-gray-500">Answer</h1>
            </div>
            <h1 className="bg-gray-200 text-sm">|</h1>
            <div className="flex items-center justify-center rounded-lg w-1/3 mx-2 cursor-pointer">
              <img src={post} className="w-4 h-4" />
              <h1 className="ml-2 text-gray-500">Post</h1>
            </div>
          </div>
        </div>

        {/* --------------------------------POST-1------------------------------------- */}
        <div className="bg-white mt-2 p-2">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  {auth?.currentUser?.emailVerified ? <Avatar round size="25" className="mt-0.5 ml-2 " name="israr" />
                    : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer " src={account} />}
                </div>
                <div className="ml-2 flex flex-col">
                  <div className="flex ">
                    <h1 className="ml-3 font-semibold">Mohd Israr</h1>
                    <Link className="text-sm text-blue-600 mt-1"> . Follow</Link>
                  </div>
                  <div>
                    <h1 className=" ml-3 text-sm text-gray-500">18m</h1>
                  </div>
                </div>
              </div>

            </div>
            <h1 className="p-2">X</h1>
          </div>

          <h1 className="font-semibold mt-3">Which is the best AI free tool to create a logo for our website?</h1>
          <h1 className="mt-2">The best free AI tool for creating logos for your website is Canva. It has an easy drag-and-drop interface and many customizable templates. Another good option is Hatchful by Shopify, which is also simple to use and offers many templates for different industries. Both tools help you make professional logos quickly and easily.</h1>

          <div className="flex justify-between items-center mt-5">
            <div className="flex">
              <div className="border rounded-2xl px-2 py-1">
                <button className="px-2 border-r text-gray-500 font-bold"><i className="fa-solid fa-up-long mr-2" style={{ color: 'blue' }}></i>upvote</button>
                <button className="px-2"><i class="fa-solid fa-down-long"></i></button>
              </div>
              <div className="flex justify-between items-center ml-3">
                <button className="mr-3 text-gray-500"><i className="fa-regular fa-comment"></i></button>
                <button className="text-gray-500"><i className="fa-solid fa-repeat"></i></button>
              </div>
            </div>
            <div className="mr-2">
              <h1 className="font-bold text-gray-500 tracking-wide">...</h1>
            </div>
          </div>
        </div>

        {/* --------------------------------POST-2------------------------------------- */}
        <div className="bg-white mt-2 p-2">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  {auth?.currentUser?.emailVerified ? <Avatar round size="25" className="mt-0.5 ml-2 " name="israr" />
                    : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer " src={account} />}
                </div>
                <div className="ml-2 flex flex-col">
                  <div className="flex ">
                    <h1 className="ml-3 font-semibold">Mohd Israr</h1>
                    <Link className="text-sm text-blue-600 mt-1"> . Follow</Link>
                  </div>
                  <div>
                    <h1 className=" ml-3 text-sm text-gray-500">18m</h1>
                  </div>
                </div>
              </div>

            </div>
            <h1 className="p-2">X</h1>
          </div>
          <h1 className="font-semibold mt-3">Which is the best AI free tool to create a logo for our website?</h1>
          <h1 className="mt-2">The best free AI tool for creating logos for your website is Canva. It has an easy drag-and-drop interface and many customizable templates. Another...</h1>

          <img src={webdesgin} />
          <div className="flex justify-between items-center mt-5">
            <div className="flex">
              <div className="border rounded-2xl px-2 py-1">
                <button className="px-2 border-r text-gray-500 font-bold"><i className="fa-solid fa-up-long mr-2" style={{ color: 'blue' }}></i>upvote</button>
                <button className="px-2"><i class="fa-solid fa-down-long"></i></button>
              </div>
              <div className="flex justify-between items-center ml-3">
                <button className="mr-3 text-gray-500"><i className="fa-regular fa-comment"></i></button>
                <button className="text-gray-500"><i className="fa-solid fa-repeat"></i></button>
              </div>
            </div>
            <div className="mr-2">
              <h1 className="font-bold text-gray-500 tracking-wide">...</h1>
            </div>
          </div>
        </div>


        {/* --------------------------------POST-3------------------------------------- */}
        <div className="bg-white mt-2 p-2">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  {auth?.currentUser?.emailVerified ? <Avatar round size="25" className="mt-0.5 ml-2 " name="israr" />
                    : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer " src={account} />}
                </div>
                <div className="ml-2 flex flex-col">
                  <div className="flex ">
                    <h1 className="ml-3 font-semibold">Mohd Israr</h1>
                    <Link className="text-sm text-blue-600 mt-1"> . Follow</Link>
                  </div>
                  <div>
                    <h1 className=" ml-3 text-sm text-gray-500">18m</h1>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="p-2">X</h1>
          </div>
          <h1 className="font-semibold mt-3">Which is the best AI free tool to create a logo for our website?</h1>
          <h1 className="mt-2">The best free AI tool for creating logos for your website is Canva. It has an easy drag-and-drop interface and many customizable templates. Another...</h1>

          <img src={webdesgin} />
          <div className="flex justify-between items-center mt-5">
            <div className="flex">
              <div className="border rounded-2xl px-2 py-1">
                <button className="px-2 border-r text-gray-500 font-bold"><i className="fa-solid fa-up-long mr-2" style={{ color: 'blue' }}></i>upvote</button>
                <button className="px-2"><i class="fa-solid fa-down-long"></i></button>
              </div>
              <div className="flex justify-between items-center ml-3">
                <button className="mr-3 text-gray-500"><i className="fa-regular fa-comment"></i></button>
                <button className="text-gray-500"><i className="fa-solid fa-repeat"></i></button>
              </div>
            </div>
            <div className="mr-2">
              <h1 className="font-bold text-gray-500 tracking-wide">...</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rightbar