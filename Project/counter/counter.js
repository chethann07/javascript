let count = 0;

const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const counter = document.getElementById("counterLabel");

decreaseBtn.onclick = function () {
  count--;
  counter.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  counter.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  counter.textContent = count;
};
