import { useEffect, useState } from "react";
// import io from "socket.io-client";
import Chat from "./components/Chat";
import "./App.css";
import FrontPage from "./components/FrontPage";
// import joinNS from "./socket/joinNS";
// import { joinRoom } from "./socket/joinRoom";
// import ChatLayout from "./components/ChatLayout";
// import ChatHeader from "./components/ChatHeader";
// import UserCard from "./components/UserCard";

import MainSocket from "./socket/MainSocket";

function App() {
  // const [ newSocket , setNewSocket ] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currUserId, setCurrUserId] = useState();
  const [ inChatRoom , setInChatRoom ] = useState(false);

  // const [ userChattingTo,setUserChattingTo ] = useState();

  // var newSocket;
  var mainSocket;
  // var [ mainSocket ,setMainSocket ] = useState();

  useEffect(() => {
    mainSocket = MainSocket
    // var newSocket = io(`http://${window.location.hostname}:9000`);
    // mainSocket = io(`http://${window.location.hostname}:9000`);

    // setMainSocket( io(`http://${window.location.hostname}:9000`) );

    // setMainSocket( (mainSocket)=>{
      mainSocket.on("users", (users) => {
        // console.log(users);
        setOnlineUsers(users);
        setCurrUserId(mainSocket.id);
        // console.log("current id ",mainSocket.id)
        // renderOnlineUsers(mainSocket.id)
        return mainSocket
      });

    // })
    // setMainSocket(newSocket)
    // const newSocket1 = io(`http://${window.location.hostname}:9000/wiki`);

    // const newSocket2 = io(`http://${window.location.hostname}:9000/linux`);

    // mainSocket.on("connect", () => {
    //   console.log(mainSocket.id); // x8WIv7-mJelg7on_ALbx

    // });
    // console.log("hello")
    // mainSocket.on('nsList',(nsData)=>{

    //   // console.log("The list of .rooms has arrived!!")
    //   // console.log(nsData)

    //   // let namespacesDiv = document.querySelector('.namespaces');
    //   // namespacesDiv.innerHTML = "";
    //   // nsData.forEach((ns)=>{
    //   //     namespacesDiv.innerHTML += `<div class="namespace" ns=${ns.endpoint} ><img src="${ns.img}" /></div>`
    // })

    // joinNS("/linux",newSocket ,setNewSocket );
    // joinRoom("Debian",newSocket,setNewSocket );
    // const res = fetch("http://localhost:4000/api/transhistory");
  }, []);

  // newSocket.on("messageToClients",(msg)=>{
  //   console.log("msy aya ",msg)
  // })
  // const join = () => {
  //   // joinRoom("Debian",newSocket,setNewSocket );
  // };

  //helleo 
  //asdlkjf
  return (
    <div className="App">
      {
        (inChatRoom)?
        <Chat selectedUser={selectedUser} sendSocket={mainSocket} currUserId={currUserId}  />
        :
        <FrontPage onlineUsers={onlineUsers} currUserId={currUserId} setSelectedUser={setSelectedUser} setInChatRoom={setInChatRoom} />
      }
    </div>
  );
}

export default App;
