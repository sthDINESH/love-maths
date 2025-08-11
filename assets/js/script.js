// Wait for the DOM elements to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
  });
  runGame("addition");
});

// Get the button elements and add event listeners to them

/**
 * The main game "loop", called when the script is first 
 * loaded and after the user's answer has been processed
 */
function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if(gameType === "addition"){
    displayAdditionQuestion(num1,num2);
  } else {
    alert(`Unknown game type:${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").innerText = operand1;
    document.getElementById("operand2").innerText = operand2;
    document.getElementById("operator").innerText = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
