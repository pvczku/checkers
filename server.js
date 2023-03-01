const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const socketio = new Server(server);

app.use(express.json());
app.use(express.static('static'));

app.get('/', (req, res) => res.render("./index.html"));

server.listen(PORT, () => console.log(`server works at ${PORT}`));