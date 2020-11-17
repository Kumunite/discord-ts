import { Server } from "socket.io";
import { io } from "socket.io-client";
import { Constants } from "../constants";
// import Http from "http";

export class SocketUtil {
    // server = Http.createServer();
    // socket = new Server(this.server);
    socket = new Server();
    client = io(Constants.gatewayBaseURL);

    constructor() {
        this.socket.on("connection", (client) => {
            client.on("event", (data: any) => {
                console.log(data);
            });
            client.on("disconnect", () => {
                console.log("disconnect");
            });
        });
        // this.server.listen(3000);

        this.socket.on("connect", function () {
            console.log("Connected");
        });

        this.client.on("connect", function () {
            console.log("Connected");
        });

        this.client.on("event", function (data: any) {
            console.log(data);
        });

        this.client.on("disconnect", function () {
            console.log("Disconnected");
        });
    }
}
