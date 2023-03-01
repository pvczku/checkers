export default class Pawn extends THREE.Mesh {
  constructor() {
    super();
    this.geometry = new THREE.CylinderGeometry(25, 25, 25, 50, 50);
    this.pawnColors = ["0xff0000", "0xffffff"];
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide, // dwustronny
      map: new THREE.TextureLoader().load("img/pawnTexture.jpg"), // plik tekstury
      transparent: false, // przezroczysty / nie
      opacity: 1, // stopień przezroczystości
    });
  }

  generatePawn = (i) => {
    if (i === 1) {
      this.material.color.setHex(this.pawnColors[1]);
      this.color = "white";
      return new THREE.Mesh(this.geometry, this.material);
    } else if (i === 2) {
      this.color = "black";
      this.material.color.setHex(this.pawnColors[0]);
      return new THREE.Mesh(this.geometry, this.material);
    } else return null;
  };
}
