import React from "react";

export default function UserCard({ id, setSelectedUser,setInChatRoom }) {
    const startChatting = () =>{
        setSelectedUser(id);
        setInChatRoom(true);
    }
  // console.log(userid,id)
//   if (id && userid) {
//     if (id === userid) {
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
  return (
    <div className="shadow-lg rounded-2xl w-full m-2  bg-white p-4 cursor-pointer">
      <button onClick={startChatting} >

      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          <a href="#" className="block relative">
            {/* <img
              alt="profil"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="mx-auto object-cover rounded-full h-16 w-16 "
            /> */}
            User With Id -- {id}
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-gray-600 text-lg font-medium">User Name</span>
        </div>
      </div>
          
      </button>
    </div>
  );
}
