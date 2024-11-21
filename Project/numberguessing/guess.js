let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let guess;
let attempts = 0;
let running = true;

while (running) {
  guess = parseInt(
    window.prompt(`Enter a number between ${minNum} - ${maxNum}`)
  );

  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    window.alert("Enter a valid number");
  } else {
    attempts++;
    if (guess > answer) {
      window.alert("Guess is too high!");
    } else if (guess < answer) {
      window.alert("Guess is too low!");
    } else {
      window.alert(
        "That's a correct number! " +
          answer +
          ". You have guessed it in " +
          attempts +
          " attempts."
      );
      running = false;
    }
  }
}
