const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');
});

setInterval(()=>{
    io.emit('mensaje', 'Hola les escribo a todos');
},3000)


server.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});
