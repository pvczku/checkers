export default class Ui {
  constructor(camera, generateWhitePawns, generateBlackPawns) {
    this.camera = camera;
    this.generateWhitePawns = generateWhitePawns;
    this.generateBlackPawns = generateBlackPawns;
    this.createLogin();
    this.createOverlay();
  }

  createOverlay = () => {
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.className = "overlay";
    let overlayText = document.createElement("div");
    overlayText.id = "overlayText";
    overlayText.className = "overlayText";
    overlayText.innerHTML = "<span style='color: lime;'>STATUS: OK</span>";
    overlay.append(overlayText);
    document.body.append(overlay);
  };

  createLogin = () => {
    let loginWrapper = document.createElement("div");
    loginWrapper.id = "loginWrapper";
    loginWrapper.className = "loginWrapper";
    let loginBackground = document.createElement("div");
    loginBackground.className = "loginBackground";
    loginBackground.id = "loginBackground";
    let nicknameInput = document.createElement("input");
    nicknameInput.id = "nicknameInput";
    nicknameInput.className = "nicknameInput";
    let loginButton = document.createElement("button");
    loginButton.id = "loginButton";
    loginButton.className = "loginButton";
    loginButton.innerHTML = "Login";
    loginButton.onclick = () => {
      let nickname = document.getElementById("nicknameInput").value;
      if (nickname.length > 0) {
        const body = JSON.stringify({ user: nickname }); // body czyli przesyłane na serwer dane

        const headers = { "Content-Type": "application/json" }; // nagłowek czyli typ danych

        fetch("/ADD_USER", { method: "post", body, headers }) // fetch
          .then((response) => response.json())
          .then((data) => {
            if (data.response === "error") {
              nicknameInput.value = "";
              alert("Person with this nickname already exists");
            } else if (data.response === "ok") {
              this.closeLogin();
              if (data.users.length === 1) {
                document.getElementById(
                  "overlayText"
                ).innerHTML = `Witaj, ${data.user}, <br> grasz <span style='color: violet'>białymi</span>`;
                this.camera.position.set(0, 350, 250);
                this.camera.lookAt(0, 0, 0);
                this.generateWhitePawns();
              } else if (data.users.length === 2) {
                document.getElementById(
                  "overlayText"
                ).innerHTML = `Witaj, ${data.user}, <br> grasz <span style='color: red'>czarnymi</span>`;
                this.camera.position.set(0, 350, -250);
                this.camera.lookAt(0, 0, 0);
                this.generateBlackPawns();
              }
            } else if (data.response === "full") {
              alert("The game is full");
            }
          });
      } else {
        alert("Please enter a nickname");
      }
    };
    let resetButton = document.createElement("button");
    resetButton.id = "resetButton";
    resetButton.className = "resetButton";
    resetButton.innerHTML = "Reset";
    resetButton.onclick = () => {
      const body = JSON.stringify({ reset: true }); // body czyli przesyłane na serwer dane

      const headers = { "Content-Type": "application/json" }; // nagłowek czyli typ danych

      fetch("/RESET", { method: "post", body, headers }) // fetch
        .then((response) => response.json())
        .then((data) => {});
    };
    loginBackground.appendChild(nicknameInput);
    loginBackground.appendChild(loginButton);
    loginBackground.appendChild(resetButton);
    loginWrapper.appendChild(loginBackground);
    document.body.appendChild(loginWrapper);
  };

  closeLogin = () => {
    document.getElementById("loginWrapper").remove();
  };
}
