const randomBtn = document.getElementById("randomBtn");
const randomLabel = document.getElementById("randomLabel");

randomBtn.onclick = function () {
  randomLabel.textContent = Math.floor(Math.random() * 100) + 1;
};
