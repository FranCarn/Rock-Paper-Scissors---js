let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const containerChoices = document.getElementById("choices-container");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  result_p.innerHTML = "Wait while computer decides...";
  setTimeout(() => {
    userScore++;
    askWin();
    containerChoices.classList = "choices";
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(
      userChoice
    )} ${smallUserWord} beats ${convertToWord(
      computerChoice
    )} ${smallCompWord}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
  }, 1000);
}
// Wait while computer decides...
function lose(userChoice, computerChoice) {
  result_p.innerHTML = "Wait while computer decides...";
  setTimeout(() => {
    computerScore++;
    askWin();
    containerChoices.classList = "choices";
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(
      userChoice
    )} ${smallUserWord} lose to ${convertToWord(
      computerChoice
    )} ${smallCompWord}. You lose`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
  }, 1000);
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = "Wait while computer decides...";
  setTimeout(() => {
    containerChoices.classList = "choices";
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(
      userChoice
    )} ${smallUserWord} equals ${convertToWord(
      computerChoice
    )} ${smallCompWord}. Its a Draw.`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  containerChoices.classList = "none";
  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function askWin() {
  if (computerScore === 10) {
    alert("IA beats you");
    userScore = 0;
    computerScore = 0;
  }
  if (userScore === 10) {
    alert("Congrats you wins!");
    userScore = 0;
    computerScore = 0;
  }
}
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
