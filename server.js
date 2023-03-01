const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const socketio = new Server(server);