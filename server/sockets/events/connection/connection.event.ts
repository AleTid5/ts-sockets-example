import SocketIo from "../../socket-io";
import Socket from "../../../interfaces/socket.interface";

const onConnection = (callback: Function): void => {
  SocketIo.getSocket().on("connection", (socket: Socket) => {
    console.log(`Socket connection established: ${socket.id}`);
    callback(socket);
  });
};
export default onConnection;
