import { Server } from "http";
import { onConnection } from "./events";
import SocketIo from "../models/socket-io.model";

const startSocketListener = (server: Server) => {
  SocketIo.initialize(server);
  onConnection();
};

export default startSocketListener;
