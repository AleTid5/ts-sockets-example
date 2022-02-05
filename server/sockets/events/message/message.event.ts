import SocketIo from "../../../models/socket-io.model";
import { Socket } from "net";

const onMessage = (socket: Socket): void => {
  socket.on("message", (data) => {
    SocketIo.getSocket().emit("message", data);
  });
};

export default onMessage;
