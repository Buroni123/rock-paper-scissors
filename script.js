let humanScore = 0
let computerScore = 0
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const div = document.querySelector('.results')


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
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "Draw! Both chose rock"
        div.appendChild(p)
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "Draw! Both chose paper"
        div.appendChild(p)
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "Draw! Both chose scissors"
        div.appendChild(p)
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "You lose! Paper beats rock"
        div.appendChild(p)
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "You lose! Scissors beats paper"
        div.appendChild(p)
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "You lose! Rock beats scissors"
        div.appendChild(p)
        computerScore++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "You win! Rock beats scissors"
        div.appendChild(p)
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "You win! Paper beats rock"
        div.appendChild(p)
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        let p = document.createElement('p')
        p.classList.add('result')
        p.textContent = "You win! Scissors beats paper"
        div.appendChild(p)
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