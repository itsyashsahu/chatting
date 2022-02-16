import React from "react";

export default function SendingMsg({ seen,msg="Hello from sending Msg Default ",sender="D" }) {
  return (
    <>
      {/* <div className="col-start-3 col-end-13 px-3 py-2 rounded-lg">
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="flex items-center text-xs justify-center h-7 w-7 rounded-full bg-indigo-500 flex-shrink-0">
            A
          </div>
          <div className="relative mr-3 text-xs bg-indigo-100 py-2 px-4 shadow rounded-xl">
            <div>I'm ok what about you?</div>
          </div>
          <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
            Seen
          </div>
        </div>
      </div> */}

      <div className={`col-start-3 col-end-13 px-3 pt-1 ${(seen)?"pb-4":"pb-1"} rounded-lg`}>
      {/* <div className="col-start-3 col-end-13 px-3 pt-1 pb-3 rounded-lg"> */}
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="flex items-center text-xs text-white justify-center h-7 w-7 rounded-full bg-indigo-500 flex-shrink-0">
            {sender}
          </div>
          <div className="relative mr-3 text-xs bg-indigo-100 py-2 px-4 shadow rounded-xl">
            <div>{msg}</div>
            {seen && (
              <div className="absolute text-xs bottom-0 right-0 -mb-4 mr-2 text-gray-500">
                Seen
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
