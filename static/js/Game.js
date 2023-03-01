export default class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 4 / 3, 0.1, 10000);
    this.renderer = new THREE.WebGLRenderer();
    this.axes = new THREE.AxesHelper(1000);
    this.renderer.setClearColor(0x0066ff);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("root").append(this.renderer.domElement);

    this.scene.add(this.axes);
    this.camera.position.set(100, 100, 100);
    this.camera.lookAt(this.scene.position);

    this.render(); // wywołanie metody render
  }

  render = () => {
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
    console.log("render leci");
  };
}
