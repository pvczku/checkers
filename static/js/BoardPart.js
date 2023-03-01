export default class BoardPart extends THREE.Mesh {
  constructor() {
    super();
    this.geometry = new THREE.BoxGeometry(50, 10, 50);
    this.boardColors = ["0xffffff", "0x000000"];
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide, // dwustronny
      map: new THREE.TextureLoader().load("../img/boardTexture.png"), // plik tekstury
      transparent: false, // przezroczysty / nie
      opacity: 1, // stopień przezroczystości
    });
  }

  generateBoardPart = (i) => {
    if (i === 1) {
      this.material.color.setHex(this.boardColors[0]);
      return new THREE.Mesh(this.geometry, this.material);
    } else if (i === 0) {
      this.material.color.setHex(this.boardColors[1]);
      return new THREE.Mesh(this.geometry, this.material);
    } else {
      return null;
    }
  };
}
