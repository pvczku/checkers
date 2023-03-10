import Game from "./Game.js";
import Net from "./Net.js";
import Ui from "./Ui.js";

let game;
let net;
let ui;
let users;
window.onload = () => {
  const client = io();
  game = new Game();
  ui = new Ui(game.camera, game.generateWhitePawns, game.generateBlackPawns, client);
  net = new Net(client);

  game.generateBoard();
};
