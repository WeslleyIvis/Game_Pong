"use strict";
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const HOST = '192.168.15.9';
app.use(express.static('../'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
});
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