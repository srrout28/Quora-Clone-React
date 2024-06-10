import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';

function CreatePost() {
    return (
        <>
         {/* this is a tab using from antd */}
            <div>
                <div>
                    <div className="flex justify-start">
                        <Avatar round size="25" className="mt-0.5 ml-2" name="israr" />
                        <div className='ml-5 flex justify-start flex-col '>
                            <h1 className="font-semibold">Mohd Israr</h1>
                            <Link className="text-sm font-bold text-gray-500 border border-gray-300 border-spacing-1 rounded-xl px-5 py-1">choose credential</Link>
                        </div>
                    </div>
                    <div>
                        <textarea rows="11" cols="90" placeholder='Say somthing... ' className='outline-none overflow-x-visible' />
                    </div>
                </div>
                <div>
                    <hr className='mt-5 ' />
                    <div className='flex justify-between m-2'>
                        <div>
                            <button className='w-8 h-8 border border-gray-50 rounded-md font-bold text-gray-500 hover:border-blue-500'>Aa</button>
                            <button className=' ml-2 w-8 h-8 border border-gray-50 rounded-md font-bold text-gray-500 hover:border-blue-500'><i className="fa-regular fa-images"></i></button>
                        </div>
                        <div>
                            <button className='px-5 py-2 bg-blue-500 rounded-2xl text-gray-100 font-bold'>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost