// // import { Socket } from "socket.io-client";


// export function joinRoom(roomName,newSocket,setNewSocket){
//     var nsSocket
//     // console.log(nsSocket)
//     setNewSocket((newSocket)=>{
//         nsSocket = newSocket;
        
//         // Send this roomName to the server!
//         nsSocket.emit('joinRoom', roomName,(newNumberOfMembers)=>{
//             console.log("joined the room ")
//             // we want to update the room member total now that we have joined!
//             // document.querySelector('.curr-room-num-users').innerHTML = `${newNumberOfMembers} <span class="glyphicon glyphicon-user"></span>`
    
//             // console.log("new number of members ",newNumberOfMembers);
//         })

        
        
//         nsSocket.on("users", (users) => {
//             users.forEach((user) => {
//             user.self = user.userID === nsSocket.id;
//             // initReactiveProperties(user);
//             });
//             // put the current user first, and then sort by username
//             this.users = users.sort((a, b) => {
//             if (a.self) return -1;
//             if (b.self) return 1;
//             if (a.username < b.username) return -1;
//             return a.username > b.username ? 1 : 0;
//             });
//         });

//         nsSocket.on("nsRoomLoad",(ns)=>{
//             console.log("nsnsRoomLoad  ",ns)
//         })

//         nsSocket.emit("newMsgToServer","Can anyone hear me");

//         // newSocket.emit("privateMessage","OSCBq3j20A75M0pmAAAg","helllo world from person 1");

//         // newSocket.on("private-message",(id,msg)=>{
//         //     console.log("hello is recieved")
//         // } )

//         nsSocket.on("privateMsg",(msg)=>{
//             console.log("private message",msg)
//         })

//         return newSocket;
//     })

//     // nsSocket.on('historyCatchUp',(history)=>{
//     //     // console.log(history)
//     //     const messagesUl = document.querySelector('#messages');
//     //     messagesUl.innerHTML = "";
//     //     history.forEach((msg)=>{
//     //         const newMsg = buildHTML(msg)
//     //         messagesUl.innerHTML += newMsg;
//     //     })
//     //     messagesUl.scrollTo(0,messagesUl.scrollHeight);
//     // })

//     // nsSocket.on('updateMembers',(numMembers)=>{
//     //     document.querySelector('.curr-room-num-users').innerHTML = `${numMembers} <span class="glyphicon glyphicon-user"></span>`
//     //     document.querySelector('.curr-room-text').innerText = `${roomName}`
//     // })

//     // let searchBox = document.querySelector('#search-box');
//     // searchBox.addEventListener('input',(e)=>{
//     //     console.log(e.target.value)
//     //     let messages = Array.from(document.getElementsByClassName('message-text'));
//     //     console.log(messages);
//     //     messages.forEach((msg)=>{
//     //         if(msg.innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1){
//     //             // the msg does not contain the user search term!
//     //             msg.style.display = "none";
//     //         }else{
//     //             msg.style.display = "block"
//     //         }
//     //     })
//     // })

// };