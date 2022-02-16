import io from "socket.io-client";

// export default function MainSocket (){
//     const newSocket = io(`http://${window.location.hostname}:9000`)
//     return newSocket;
// }
// const MainSocket =  io(`http://${window.location.hostname}:9000`);
const MainSocket =  io(`/`);
export default MainSocket 