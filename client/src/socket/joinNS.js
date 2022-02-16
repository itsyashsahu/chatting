// import io from "socket.io-client";

// export default function joinNS(endpoint, newSocket, setNewSocket) {
//   // const newSocket = io(`http://${window.location.hostname}:9000`);

//   // newSocket = io(`http://${window.location.hostname}:9000${endpoint}`);

//   // const newSocket = io(`http://${window.location.hostname}:9000${endpoint}`);
//   const nsSocket = io(`http://${window.location.hostname}:9000${endpoint}`);
//   setNewSocket(nsSocket);
//   // const newSocket = io(`http://${window.location.hostname}:9000/linux`);
//   // const
//   setNewSocket((newSocket) => {
//     // console.log("lkasjdf new oscket",newSocket)
//     newSocket.on("nsRoomLoad", (nsRooms) => {
//       console.log("list of nsRoomsL");
//       console.log(nsRooms);
//     });

//     newSocket.on("messageToClients", (msg) => {
//       console.log("msy aya ", msg);
//       // console.log(nsSocket.rooms)
//     });

//     newSocket.on("users", (users) => {
//       console.log("users Recieved");
//       users.forEach((user) => {
//         // user.self = user.userID === nsSocket.id;
//         // initReactiveProperties(user);
//       });
//       // put the current user first, and then sort by username
//       this.users = users.sort((a, b) => {
//         if (a.self) return -1;
//         if (b.self) return 1;
//         if (a.username < b.username) return -1;
//         return a.username > b.username ? 1 : 0;
//       });
//       console.log("hello users ", users);
//     });

//     return newSocket;
//   });
//   // console.log("lkasjdf",endpoint)
//   // if(newSocket){
//   //     // check to see if newSocket is actually a socket
//   //     newSocket.close();
//   //     // remove the eventListener before it's added again
//   //     // document.querySelector('#user-input').removeEventListener('submit',formSubmission)
//   // }

//   // newSocket.on('nsRoomLoad',(nsRooms)=>{
//   //     console.log("list of nsRoomsL")
//   //     console.log(nsRooms)
//   //     // let roomList = document.querySelector('.room-list');
//   //     // roomList.innerHTML = "";
//   //     // nsRooms.forEach((room)=>{
//   //     //     let glyph;
//   //     //     if(room.privateRoom){
//   //     //         glyph = 'lock'
//   //     //     }else{
//   //     //         glyph = 'globe'
//   //     //     }
//   //     //     roomList.innerHTML += `<li class="room"><span class="glyphicon glyphicon-${glyph}"></span>${room.roomTitle}</li>`
//   //     // })

//   //     // add click listener to each room
//   //     // let roomNodes = document.getElementsByClassName('room');
//   //     // Array.from(roomNodes).forEach((elem)=>{
//   //     //     elem.addEventListener('click',(e)=>{
//   //     //         // console.log("Somone clicked on ",e.target.innerText);
//   //     //         joinRoom(e.target.innerText)
//   //     //     })
//   //     // })

//   //     // add room automatically... first time here
//   //     // const topRoom = document.querySelector('.room')
//   //     // const topRoomName = topRoom.innerText;
//   //     // console.log(topRoomName);
//   //     // joinRoom(topRoomName)

//   // })

//   // newSocket.on('messageToClients',(msg)=>{
//   //     console.log(msg)
//   //     // const newMsg = buildHTML(msg);
//   //     // document.querySelector('#messages').innerHTML += newMsg
//   // })
//   // document.querySelector('.message-form').addEventListener('submit',formSubmission)
// }
