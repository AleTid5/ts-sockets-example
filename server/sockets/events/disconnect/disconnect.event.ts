import Socket from "../../../interfaces/socket.interface";

const onDisconnect = (socket: Socket): Promise<void> =>
  new Promise((res) => {
    socket.on("disconnect", () => {
      res();
    });
  });

export default onDisconnect;
