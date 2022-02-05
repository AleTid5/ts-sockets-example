import express from "express";
import cors from "cors";
import routes from "./routes";
import startSocketListener from "./sockets";

const port = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(routes);

const server = require("http").createServer(app);

startSocketListener(server);

server.listen(port, () => console.log(`Listening on port ${port}`));
