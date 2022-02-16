import React from 'react'
import ChatHeader from './ChatHeader';
import ChatLayout from './ChatLayout';
import UserCard from './UserCard';

export default function FrontPage({currUserId,onlineUsers,setSelectedUser,setInChatRoom }) {
  return (
    <ChatLayout>
    <ChatHeader  currUserId={currUserId} />
    <div className="flex flex-row justify-center items-center h-16 rounded-xl bg-white w-full px-4">
      <div className="font-bold text-indigo-600 ">
        Basic Chatting Application
      </div>
    </div>
    <div className="h-8 rounded-xl text-sm font-medium w-full flex justify-center items-center bg-white m-2 p-4 ">
      Select any user from below online users to start Chatting
    </div>
    <div className="container my-5 mx-auto px-4 md:px-6">
      <div className="flex flex-wrap -mx-1 lg:-mx-2 justify-center">
        {onlineUsers.map((user, index) => {
          if (currUserId && user.userID && user.userID === currUserId) {
            console.log("useriD is ",user.userID)
            return null;
          }
          return <UserCard key={index} id={user.userID} setSelectedUser={setSelectedUser} setInChatRoom={setInChatRoom} />;
        })}
      </div>
    </div>
  </ChatLayout>
  )
}
