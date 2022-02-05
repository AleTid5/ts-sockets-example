import { Server } from "http";
import Socket from "../interfaces/socket.interface";
import { onConnection, onDisconnect, onFromApi, onMessage } from "./events";
import SocketIo from "./socket-io";

const startSocketListener = (server: Server): void => {
  SocketIo.initialize(server);

  onConnection((socket: Socket) => {
    onMessage(socket);

    onFromApi(socket);

    onDisconnect(socket).then(() => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

export default startSocketListener;
