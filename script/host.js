"use strict";
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3333 });
server.on('connection', (socket) => {
    console.log('Um novo cliente se conectou!');
    socket.send('Olá, cliente!');
    socket.on('message', (message) => {
        console.log(`Recebi uma mensagem: ${message}`);
    });
    socket.on('close', () => {
        console.log('Um cliente se desconectou.');
    });
});
//# sourceMappingURL=host.js.map