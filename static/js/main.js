import Game from "./Game.js";
import Net from "./Net.js";
import Ui from "./Ui.js";

let game;
let net;
let ui;
window.onload = () => {
  const client = io();
  game = new Game();
  net = new Net(client);
  ui = new Ui(game.camera, game.generateWhitePawns, game.generateBlackPawns);

  game.generateBoard();

  window.addEventListener("resize", () => {
    game.camera.aspect = window.innerWidth / window.innerHeight;
    game.camera.updateProjectionMatrix();
    game.renderer.setSize(window.innerWidth, window.innerHeight);
  });
};
