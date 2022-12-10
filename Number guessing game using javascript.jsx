var correctAnswer = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
  var guess = prompt("Enter your guess (1-100):");


  if (guess === 'stop') {
    alert("The game has ended.");
    return;
  }

  if (guess == correctAnswer) {
    alert("You guessed the correct number! The answer was " + correctAnswer);
  } else {
    alert("Incorrect guess. Please try again.");
    guessNumber();
  }
}

guessNumber();
