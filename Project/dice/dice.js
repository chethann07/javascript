function rollDice() {
  const numOfRolls = document.getElementById("numOfRolls").value;
  const diceResult = document.getElementById("diceResult");
  const diceResultImg = document.getElementById("diceResultImg");

  let array = [];
  let images = [];

  for (let index = 0; index < numOfRolls; index++) {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    array.push(diceNum);
    images.push(
      `<img src = "images/${diceNum}.png" width=100px alt="Dice:${diceNum}"/>`
    );
  }
  console.log(array);
  diceResult.textContent = `DiceRolls: ${array.join(", ")}`;
  diceResultImg.innerHTML = `${images.join(" ")}`;
}
