let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else if (computerChoice === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
  const humanChoice = prompt("rock, paper, scissors?")
  return humanChoice.toLowerCase()
}




function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw! Both chose rock")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw! Both chose paper")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Draw! Both chose scissors")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper")
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)