import { Server } from "socket.io";
import http from 'http'
import express from "express";
import { Socket } from "socket.io";

const app=express()

const server=http.createServer(app)
//creating a new server to listen for the requests
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
    }
})

export const getreceiverId=(receiverId)=>
{
    return (
        userSocketMap[receiverId]
    )
}

//each socket represents a user with a ID and diff properties
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") 
    userSocketMap[userId] = socket.id; //mapping the user id with the socket id

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});


export {app,io,server}
