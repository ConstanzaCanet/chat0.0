const express = require('express');
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 8081;
const server= app.listen(PORT, ()=>{
    console.log('escuchando')
})

const io= new Server(server);
let message=[];
app.use(express.static(__dirname+'/public'));

socket.on('connection',socket=>{
    console.log('se conecto alguien');
    socket.emit('Welcome','BIENVENIDO AL SERVIDOR');

    socket.on('message',data=>{
        message.push(data)
        io.emit('log',message);
    })
});
