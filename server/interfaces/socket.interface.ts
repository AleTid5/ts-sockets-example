// @ts-nocheck
import { Socket as SocketNet } from "net";

export default interface Socket extends SocketNet {
  id: number;
}
