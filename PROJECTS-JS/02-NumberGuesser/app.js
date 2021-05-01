/*
GAME RULES
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI Min and Max

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
// if it was a click, then it would reload without
// we were able to see the question of play again
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    // reload the page and start over, if you wish to play again
    window.location.reload();
    }
  } 
)

// listen for guess
guessBtn.addEventListener('click', function(){
  // because the input is a string from the form
  let guess = parseInt(guessInput.value);

    // Validate
    // it's not a number if it's a string
    if(isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {

    // check if won
    if(guess === winningNum) {

        gameOver(true, `${winningNum} is correct! YOU WIN!`)

    } else {
      guessesLeft -= 1;

      if(guessesLeft === 0) {
        // game over - lost
        guessInput.disabled = true;
        gameOver(false, `${guessInput.value} Game Over - You Lost. The correct number was ${winningNum}`);

      } else {
        // game continues - answer wrong
        setMessage(`${guessInput.value} is not correct, ${guessesLeft} guesses left`, 'red');

        guessInput.disabled = false;

        // clear input
        guessInput.value ='';
      }
    }
  }
});


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
      let color;
      won === true ? color = 'green' : color = 'red';
      // change border
      guessInput.style.borderColor = color;
      guessInput.style.color = color;
      message.style.color = color;
      // set message
      setMessage(msg);

      // play again?
      guessBtn.value = 'Play Again?';
      guessBtn.className += 'play-again';
}


