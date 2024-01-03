// script.js
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    attempts++;

    if (userGuess == secretNumber) {
        displayMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    } else if (userGuess < secretNumber) {
        displayMessage(`Too low! Try again.`);
    } else {
        displayMessage(`Too high! Try again.`);
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
}
