let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

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
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "(user)".fontsize(3).sub().fontcolor("green");
  const smallCompWord = "(computer)".fontsize(3).sub().fontcolor("red");

  result_p.innerHTML = `
    ${convertToWord(userChoice)}${smallUserWord}
     beats  
    ${convertToWord(computerChoice)}${smallCompWord} 
    . You win!`;

  document.getElementById(userChoice).classList.add("green-glow");
  document.getElementById(computerChoice).classList.add("red-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);

  setTimeout(function () {
    document.getElementById(computerChoice).classList.remove("red-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "(user)".fontsize(3).sub().fontcolor("green");
  const smallCompWord = "(computer)".fontsize(3).sub().fontcolor("red");
  result_p.innerHTML = `
    ${convertToWord(userChoice)}${smallUserWord}
     beats  
    ${convertToWord(computerChoice)}${smallCompWord} 
    . You Lost!`;
  document.getElementById(userChoice).classList.add("green-glow");
  document.getElementById(computerChoice).classList.add("red-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);

  setTimeout(function () {
    document.getElementById(computerChoice).classList.remove("red-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "(user)".fontsize(3).sub().fontcolor("purple");
  const smallCompWord = "(computer)".fontsize(3).sub().fontcolor("purple");
  result_p.innerHTML = `
    ${convertToWord(userChoice)}${smallUserWord}
     Matches  
    ${convertToWord(computerChoice)}${smallCompWord} 
    . Its a draw!`;
  document.getElementById(userChoice).classList.add("purple-glow");
  document.getElementById(computerChoice).classList.add("purple-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("purple-glow");
  }, 500);

  setTimeout(function () {
    document.getElementById(computerChoice).classList.remove("purple-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
