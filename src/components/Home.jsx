import React from 'react';
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

function Home() {
  return (
    <>
      <div className="h-full  bg-gray-100 grid grid-cols-6">
        <div >
          {/* left sidebar */}
          <Leftbar />
        </div>
        <div className="col-span-3">
          {/* main part for post */}
          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default Home