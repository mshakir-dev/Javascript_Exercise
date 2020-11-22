let min = 1;
let max = 10;
let guessLeft = 5;
// Just Check the Game, convert the winningNumber by using the Random Function
let winningNumber = Math.floor(Math.random() * 10) + 1;
console.log(winningNumber);
let guessTaken = 0;

// UserInterface Elements
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");
const message = document.getElementById("message");

// Change the value of min and max in the UI Dynamically.
minNum.textContent = min;
maxNum.textContent = max;

guessButton.addEventListener('click', guessGame);
function guessGame() {
  console.log(guessInput.value);
  // console.log(typeof guessInput.value); // String
  // console.log(typeof parseInt(guessInput.value)); // Number
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  guessTaken ++;
  if (guess===winningNumber) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    guessInput.value = '';
    setMessage(`You WON, Attempted ${guessTaken} times`, 'green');
  }
  else {
    guessLeft -= 1;
    if(guessLeft === 0){
      // Game over - lost
      setMessage(`Game Over, you lost. The correct number was ${winningNumber}.`);
    }
    else {

      if(guess < winningNumber) {
        setMessage(`${guess} is too Low, Try Again. ${guessLeft} guesses left`, 'red');
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
      }

      else if (guess > winningNumber) {
        setMessage(`${guess} is too High, Try Again. ${guessLeft} guesses left`, 'red');
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
      }
    }
  }

}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}