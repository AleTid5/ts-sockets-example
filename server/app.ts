import express from "express";
import cors from "cors";
import routes from "./routes";
import socketInitializer from "./sockets";

const port = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(routes);

const server = require("http").createServer(app);

socketInitializer(server);

server.listen(port, () => console.log(`Listening on port ${port}`));
