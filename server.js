const express = require("express");
const app = express();
const PORT = 3000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const socketio = new Server(server);

let users = [];
let theSame = false;

app.use(express.json());
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("./index.html");
  console.log(users);
});

app.post("/ADD_USER", (req, res) => {
  theSame = false;
  console.log(users);
  if (users.length === 2) {
    res.send({ response: "full", users: users });
    return;
  } else {
    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        if (users[i] === req.body.user) {
          theSame = true;
        }
      }
    }
    if (theSame === false) {
      users.push(req.body.user);
      res.send({ response: "ok", users: users, user: req.body.user });
      return;
    } else {
      res.send({ response: "error", users: users });
      return;
    }
  }
});

app.post("/RESET", (req, res) => {
  users = [];
  res.send({ response: "ok" });
});

socketio.on("connection", (client) => {
  console.log("klient podłączył się z id: " + client.id);

  client.on('disconnect', () => {
    
  }
)});

server.listen(PORT, () => console.log(`server works at ${PORT}`));
