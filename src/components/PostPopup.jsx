import React from 'react';
import { Tabs } from 'antd';

import AddQuestion from './AddQuestion';
import CreatePost from './CreatePost';


function PostPopup(props) {
    //--tab from antd 
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Add Question',
            //--AddQuestion component
            children: <AddQuestion />,
        },
        {
            key: '2',
            label: 'Create Post',
            //--create post component
            children: <CreatePost />,
        }
    ];

    return (
        <>
            {/* this is a tailwind modal using for popup */}
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-zinc-950 bg-opacity-80 transition-opacity "></div>
                <div className="fixed inset-0 z-10 t-0 w-screen overflow-y-auto ">
                    <div className="flex  min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-6/12">
                            <div className="bg-white pb-2 pt-5" style={{ height: '80vh' }}>
                                <div className="sm:items-start">
                                    <h1 onClick={() => props?.setPost(false)} className="cursor-pointer px-5 font-sans font-bold text-gray-500">X</h1>
                                    <div className='px-5'>
                                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ display: "flex", justifyContent: "space-around" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPopup;




