import React, { useState } from "react";
import io from "socket.io-client";
import ChatFooter from "../components/ChatFooter";
import ChatHeader from "../components/ChatHeader";
import ChatLayout from "../components/ChatLayout";
import ReceiveingMsg from "../components/ReceiveingMsg";
import SendingMsg from "../components/SendingMsg";

import MainSocket from "../socket/MainSocket";

export default function Chat({joinRoom,selectedUser,sendSocket,currUserId }) {
    const [ socketId , setSocketId ] = useState("");
    const [ chatHistory ,setChatHistory ] = useState([]);
    const [ sendingMsg , setSendingMsg ]= useState("");

    // console.log("mainSocket of Chat,hs ",MainSocket)

    const sendMsg = (sendedMsg) =>{
      // msg="Hello World"
      // console.log(sendedMsg)
      setChatHistory([...chatHistory ,{ msg:sendedMsg,type:"send"  } ])
      MainSocket.emit("sendPrivateMsg",selectedUser,sendedMsg)
    }
    MainSocket.on("recievePrivateMsg",(recievedMsg)=>{
      msgRecieved(recievedMsg)
      console.log("Message Recieved ",recievedMsg)
    })
    const msgRecieved =(msg)=>{
      setChatHistory([...chatHistory ,{ msg,type:"recieved"  } ])
      // return(
      //   <ReceiveingMsg  msg={msg} />
      // )
    }

  return (
    <ChatLayout>
      {/* Chating Header */}
      <ChatHeader chattingWithUser={selectedUser} socketId={socketId} setSocketId={setSocketId} currUserId={currUserId} />

      <div className="scroll-chatting flex flex-col h-full overflow-x-auto my-3">
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-12 gap-y-0">            {
              chatHistory.map((msg,index)=>{
                // console.log("msg is",msg)
                if(msg.type === "send"){
                  return(
                    <SendingMsg key={index} msg={msg.msg} />
                    )
                  }else{
                    return(
                    <ReceiveingMsg key={index} msg={msg.msg} />
                  )
                }
              })
            }
            {/* <SendingMsg /> */}
            {/* <ReceiveingMsg />

            <SendingMsg seen="true" />
            <SendingMsg msg="Hello Form the user " seen={false} sender="A" />
            <SendingMsg />
            <SendingMsg />
            <ReceiveingMsg fromUser="J" /> */}

          </div>
        </div>
      </div>

      <ChatFooter setSendingMsg={setSendingMsg} sendingMsg={sendingMsg} sendMsg={sendMsg} />
    </ChatLayout>
  );
}
