// Wait for the DOM elements to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
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

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown game type:${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
}

/**
 * Check the answer against the first element in
 * the returned calculateCorrectAnswers array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedCorrectAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedCorrectAnswer[0];

    if(isCorrect){
        alert("Hey! You got it right! :D");
    } else {
        alert(`Aww....you answered ${userAnswer}. The correct answer was ${calculatedCorrectAnswer[0]}`);
    }

    runGame(calculatedCorrectAnswer[1]);
}

/**
 * Gets the operands and the operator directly from the DOM and returns the correct answer.
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}.Aborting!`;
  }
}

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
