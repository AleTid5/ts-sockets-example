import { Socket } from "net";

const onDisconnect = (socket: Socket): Promise<void> =>
  new Promise((res) => {
    socket.on("disconnect", () => {
      res();
    });
  });

export default onDisconnect;
