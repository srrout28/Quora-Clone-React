import React from 'react';
import Avatar from 'react-avatar';

function AddQuestion() {
  return (
    <>
    {/* this is a tab using from antd */}
        <div className='w-full'>
                    <div className='overflow-y-scroll'>
                        <div className='bg-slate-200 m-1 p-5 rounded-md'>
                            <h1 className='text-blue-700 font-bold font-sans text-md'>Tips on getting good answers quickly</h1>
                            <ol className='list-disc ml-5 text-blue-500'>
                                <li>Make sure your question has not been asked already</li>
                                <li>Keep your question short and to the point</li>
                                <li>Double-check grammar and spelling</li>
                            </ol>
                        </div>
                        <div className='flex justify-start items-center my-3'>
                            <Avatar round size="25" className="" name="israr" />
                            <i className="fa-solid fa-play ml-2" style={{ color: 'gray', fontSize: '10px' }}></i>
                            <h1 className="text-sm border border-spacing-1 rounded-full px-4 py-1 ml-2 text-gray-600 cursor-pointer hover:bg-gray-100"><i className="fa-solid fa-user-group mr-1"></i>Public</h1>
                        </div>
                        <div className='p-2'>
                            <input placeholder='Start your question with What, How, Why etc.'
                                className="w-full outline-none border-b text-xl text-black placeholder:text-xl font-thin hover:border-blue-500" />
                        </div>
                    </div>
                    <div className=''>
                        <hr className='mt-20' />
                        <div className='flex justify-end'>
                            <button onClick={() => props?.setPost(false)} className=' text-gray-500 font-sans font-bold p-2 w-20 mt-3'>Cancel</button>
                            <button className='bg-blue-500 text-white rounded-full p-2 w-40 mt-3'>Add question</button>
                        </div>

                    </div>
                </div>
    </>
  )
}

export default AddQuestion;