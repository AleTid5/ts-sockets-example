import { Socket } from "net";
import onDisconnect from "../disconnect/disconnect.event";
import onMessage from "../message/message.event";
import SocketIo from "../../../models/socket-io.model";

const emitEvent = (socket: Socket) => {
  const response = new Date();
  socket.emit("from-api", response);
};

const onConnection = (): void => {
  SocketIo.getSocket().on("connection", (socket: Socket) => {
    console.log("New client connected");

    const interval = setInterval(() => emitEvent(socket), 1000);

    onMessage(socket);

    onDisconnect(socket).then(() => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });
};

export default onConnection;
