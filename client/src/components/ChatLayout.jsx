import React from "react";

export default function ChatLayout({ children }) {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex-initial sm:flex w-full sm:w-5/6 lg:w-3/5 space-y-8 h-full lg:divide-y lg:divide-gray-300">
          <div className="flex h-full antialiased w-full text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
              <div className="flex flex-col flex-auto h-full">
                <div className="flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
