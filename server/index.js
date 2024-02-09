import express from "express";
import { config } from "dotenv";
import { Server } from "socket.io";

config({
    path: "./.env"
});

const app = express();
const io = new Server({
    cors: true
});

/* DB */
const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
    console.log("New Connection");
    socket.on("join-room", (data) => {
        const { roomId, emailId } = data;
        console.log(`User ${emailId} joined room ${roomId}`);
        emailToSocketMapping.set(emailId, socket.id);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-joined", { emailId });
    })
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port http://localhost:${process.env.PORT}`)
})

// io.listen(process.env.SOCKET_PORT, () => {
//     console.log(`Socket.io listening on port http://localhost:${process.env.SOCKET_PORT}`)
// })
io.listen(8003)