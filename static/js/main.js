import Game from "./Game.js";
import Net from "./Net.js";
import Ui from "./Ui.js";

let game;
let net;
let ui;
window.onload = () => {
  game = new Game();
  net = new Net();
  ui = new Ui(game.camera, game.generateWhitePawns, game.generateBlackPawns);

  game.generateBoard();
  // game.generateWhitePawns();
  // game.generateBlackPawns();

  window.addEventListener("resize", () => {
    game.camera.aspect = window.innerWidth / window.innerHeight;
    game.camera.updateProjectionMatrix();
    game.renderer.setSize(window.innerWidth, window.innerHeight);
  });
};
