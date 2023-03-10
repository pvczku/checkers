import Pawn from "./Pawn.js";
import BoardPart from "./BoardPart.js";

export default class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, 4 / 3, 0.1, 10000);
    this.renderer = new THREE.WebGLRenderer();
    this.axes = new THREE.AxesHelper(1000);
    this.board = [
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
    ];
    this.pawns = [
      [0, 2, 0, 2, 0, 2, 0, 2],
      [2, 0, 2, 0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
    ];
    this.renderer.setClearColor(0x282828);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("root").append(this.renderer.domElement);

    this.scene.add(this.axes);
    this.camera.position.set(400, 400, 400);
    this.camera.lookAt(this.scene.position);

    this.render(); // wywołanie metody render

    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  render = () => {
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
    console.log("render leci");
  };

  generateBoard = () => {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        let boardPart = new BoardPart().generateBoardPart(this.board[i][j]);
        boardPart.position.z = -175 + i * 50;
        boardPart.position.x = -175 + j * 50;
        boardPart.position.y = -5;
        boardPart === null ? {} : this.scene.add(boardPart);
      }
    }
  };

  generateWhitePawns = () => {
    for (let i = 0; i < this.pawns.length; i++) {
      for (let j = 0; j < this.pawns[i].length; j++) {
        if (this.pawns[i][j] === 1) {
          const pawn = new Pawn().generatePawn(this.pawns[i][j]);
          if (!pawn) {
          } else {
            pawn.position.z = -175 + i * 50;
            pawn.position.x = -175 + j * 50;
            pawn.position.y = 10;
            this.scene.add(pawn);
          }
        }
      }
    }
  };

  generateBlackPawns = () => {
    for (let i = 0; i < this.pawns.length; i++) {
      for (let j = 0; j < this.pawns[i].length; j++) {
        if (this.pawns[i][j] === 2) {
          const pawn = new Pawn().generatePawn(this.pawns[i][j]);
          if (!pawn) {
          } else {
            pawn.position.z = -175 + i * 50;
            pawn.position.x = -175 + j * 50;
            pawn.position.y = 10;
            this.scene.add(pawn);
          }
        }
      }
    }
  };
}
