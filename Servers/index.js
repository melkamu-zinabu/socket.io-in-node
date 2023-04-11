import  Express  from 'express';// we are importing express module
import Http from "http"
import { Server } from 'socket.io';
import router from './router.js';

//in Es6 module of socket.io have not default export so use the exact module name that is server  and pass the instance server for it
// 
const app=Express()//creating a new express application instance. 
const server=Http.createServer(app)
const io = new Server(server);

// Listen for incoming socket connections
io.on('connection', (socket) => {
    //with the connection event we will have 2 or more eventlistener

    // Handle incoming messages from the client
    socket.on('message', (data) => {
      console.log('Received message: ' + data);
      
      // Broadcast the message to all connected clients
      io.emit('message', data);
    });
  
    // Handle disconnection of clients
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  
  // Start the server and listen on port 3000
  io.listen(6000);
app.use('/',router)

const PORT=process.env.PORT||5000
//server.listen(PORT,()=>console.log(`the server is running: ${PORT}`))
