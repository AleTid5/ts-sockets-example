import Socket from "../../../interfaces/socket.interface";

const onFromApi = (socket: Socket) =>
  setInterval(() => socket.emit("from-api", new Date()), 1000);

export default onFromApi;
