// Helper function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function for the guessing game
  function guessingGame() {
    const minNumber = 1;
    const maxNumber = 10;
    const secretNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;
  
    alert(`Welcome to the Guessing Game! Try to guess the number between ${minNumber} and ${maxNumber}.`);
  
    while (true) {
      const playerInput = prompt(`Enter your guess:`);
      const playerGuess = parseInt(playerInput);
  
      if (isNaN(playerGuess)) {
        alert("Invalid input. Please enter a valid number.");
        continue;
      }
  
      attempts++;
  
      if (playerGuess < secretNumber) {
        alert("Too low! Try again.");
      } else if (playerGuess > secretNumber) {
        alert("Too high! Try again.");
      } else {
        alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        break;
      }
    }
  }
  
  // Run the guessing game
  guessingGame();