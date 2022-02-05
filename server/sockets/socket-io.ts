import { Server } from "http";
import Socket from "../interfaces/socket.interface";

const socketBuilder = (server: Server): Socket =>
  require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

abstract class SocketIo {
  static socket: Socket | null = null;

  static initialize(server: Server): void {
    if (this.socket === null) {
      this.socket = socketBuilder(server);
    }
  }

  static getSocket(): Socket {
    return <Socket>this.socket;
  }
}

export default SocketIo;
