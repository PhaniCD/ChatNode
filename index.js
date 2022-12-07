var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

// Archivos estáticos
app.use(express.static('public'));

server.listen(process.env.PORT || 3000, () => {
    console.log('Recibiendo requests', process.env.PORT || 3000);
});

// Socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('Conexión al socket completa.', socket.id);

    //Manejador de eventos chat
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data)
    });
});