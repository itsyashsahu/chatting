import React from "react";

export default function ReceiveingMsg({fromUser="U" , msg}) {
  // console.log("from REcieveing MSg ",msg)
  return (
    <>
      <div className="col-start-1 col-end-11 px-3 py-2 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="flex items-center text-xs text-white justify-center h-7 w-7 rounded-full bg-indigo-500 flex-shrink-0">
            {fromUser}
          </div>
          <div className="relative ml-3 text-xs bg-white py-2 px-4 shadow rounded-xl">
            <div>{msg}</div>
          </div>
        </div>
      </div>


      {/* <div className="col-start-1 col-end-11 px-3 py-2 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="flex items-center text-xs justify-center h-7 w-7 rounded-full bg-indigo-500 flex-shrink-0">
            A
          </div>
          <div className="relative ml-3 text-xs bg-white py-2 px-4 shadow rounded-xl">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa
              commodi illum saepe numquam maxime asperiores voluptate sit,
              minima perspiciatis.
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
