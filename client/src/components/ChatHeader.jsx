import React from "react";

export default function ChatHeader({
  chattingWithUser = "Not Started Yet",
  socketId,
  setSocketId,
  currUserId,
  joinRoom,
  Heading
}) {
  // console.log(socketId)
  return (
    <>
      <div className="flex flex-row justify-between mb-2 items-center h-16 rounded-xl bg-white w-full px-4">

        <div className="flex items-center space-x-2">
          {/* <img
            src="https://source.unsplash.com/50x50/?portrait"
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-300"
          /> */}
          <div className="-space-y-1">
            {/* <input
              type="text"
              className="border"
              value={socketId}
              onChange={(e) => {
                setSocketId(e.target.value);
              }}
            /> */}

            <h2 className="text-sm font-semibold leading-none">
              Chatting With -- {chattingWithUser}
            </h2>
          </div>
        </div>

        <div className="ml-4">
          <button
            onClick={joinRoom}
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white p-2 flex-shrink-0"
          >
            <span className="ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-4 h-4 feather feather-chevron-down"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>
      <div className="flex flex-row justify-between mb-2 items-center h-16 rounded-xl bg-white w-full px-4">

        <div className="flex items-center space-x-2">
          {/* <img
            src="https://source.unsplash.com/50x50/?portrait"
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-300"
          /> */}
          <div className="-space-y-1">
            {/* <input
              type="text"
              className="border"
              value={socketId}
              onChange={(e) => {
                setSocketId(e.target.value);
              }}
            /> */}

            <h2 className="text-sm font-semibold leading-none">
              Current user - {currUserId}
            </h2>
          </div>
        </div>

        <div className="ml-4">
          <button
            onClick={joinRoom}
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white p-2 flex-shrink-0"
          >
            <span className="ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-4 h-4 feather feather-chevron-down"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>
    </>
  );
}
