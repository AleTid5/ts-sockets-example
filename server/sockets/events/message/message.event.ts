import Socket from "../../../interfaces/socket.interface";
import SocketIo from "../../socket-io";

const onMessage = (socket: Socket): void => {
  socket.on("message", (data) => {
    SocketIo.getSocket().emit("message", data);
  });
};

export default onMessage;
