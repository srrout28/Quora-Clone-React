import { Link } from "react-router-dom"
import webdesgin from "../assets/webDesgin.avif"

function Leftbar() {
    return (
        <>
            <div className="pl-24 pt-5 text-sm">
                {/* this div repeted */}
                <div className="flex justify-start items-center mt-5 p-2 rounded-sm leftbar-hov">
                    <div className="flex justify-center items-center w-5 h-5 mr-2 rounded-sm bg-gray-200"><h1>+</h1></div>
                    <h1 className="text-gray-500">Create Space</h1>
                </div>
                {/* ----------- */}
                <div className="flex justify-start items-center mt-1 p-2 rounded-sm leftbar-hov">
                    <div className="relative mr-2">
                        <img src={webdesgin} className="w-5 h-5 rounded-md " />
                        <div className="w-2 h-2 bg-red-800 rounded-full absolute top-0 right-0"></div>
                    </div>
                    <h1 className="text-gray-500">Web Desgin</h1>
                </div>
                {/* ----------- */}
                <div className="flex justify-start items-center mt-1 p-2 rounded-sm leftbar-hov">
                    <div className="relative mr-2">
                        <img src={webdesgin} className="w-5 h-5 rounded-md " />
                        <div className="w-2 h-2 bg-red-800 rounded-full absolute top-0 right-0"></div>
                    </div>
                    <h1 className="text-gray-500">Fiction</h1>
                </div>
                {/* ----------- */}
                <div className="flex justify-start items-center mt-1 p-2 rounded-sm leftbar-hov">
                    <div className="relative mr-2">
                        <img src={webdesgin} className="w-5 h-5 rounded-md " />
                        <div className="w-2 h-2 bg-red-800 rounded-full absolute top-0 right-0"></div>
                    </div>
                    <h1 className="text-gray-500">Science</h1>
                </div>
                {/* ----------- */}
                <div className="flex justify-start items-center mt-1 p-2 rounded-sm leftbar-hov">
                    <div className="relative mr-2">
                        <img src={webdesgin} className="w-5 h-5 rounded-md " />
                        <div className="w-2 h-2 bg-red-800 rounded-full absolute top-0 right-0"></div>
                    </div>
                    <h1 className="text-gray-500">Design</h1>
                </div>
                {/* ----------- */}
                <div className="flex justify-start items-center mt-1 p-2 rounded-sm leftbar-hov">
                    <div className="relative mr-2">
                        <img src={webdesgin} className="w-5 h-5 rounded-md " />
                        <div className="w-2 h-2 bg-red-800 rounded-full absolute top-0 right-0"></div>
                    </div>
                    <h1 className="text-gray-500">Books</h1>
                </div>
                {/* ----------- */}
                <div className="flex justify-start items-center mt-1 p-2 rounded-sm leftbar-hov">
                    <div className="relative mr-2">
                        <img src={webdesgin} className="w-5 h-5 rounded-md " />
                        <div className="w-2 h-2 bg-red-800 rounded-full absolute top-0 right-0"></div>
                    </div>
                    <h1 className="text-gray-500">Technology</h1>
                </div>
                {/* ----------- */}
                <hr className="my-3" />
                <Link className="mt-3 text-gray-400 text-sm hover:border-b">About . Careers .</Link>
                <Link className="mt-1 text-gray-400 text-sm hover:border-b">Terms . Policies .</Link>
                <Link className="mt-1 text-gray-400 text-sm hover:border-b">Acceptable use .</Link>
            </div>
        </>
    )
}

export default Leftbar