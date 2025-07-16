let humanScore = 0
let computerScore = 0
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

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

// function getHumanChoice() {
//   const humanChoice = prompt("rock, paper, scissors?")
//   return humanChoice.toLowerCase()
// }

rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw! Both chose rock")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw! Both chose paper")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Draw! Both chose scissors")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock")
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors")
        computerScore++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors")
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock")
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper")
        humanScore++
    }
}


// function playGame() {
//     humanScore = 0
//     computerScore = 0
//     for(let i=0; i<5; i++) {
//         const humanSelection = getHumanChoice()
//         const computerSelection = getComputerChoice()
//         playRound(humanSelection, computerSelection)
//     }
//     console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`)
// }



// playGame()