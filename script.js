function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    if (random === 0) {
        return "Rock"
    } else if (random === 1) {
        return "Paper"
    } else if (random === 2) {
        return "Scissors"
    }
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, Papers, Scissors?")
  return humanChoice
}

console.log(getHumanChoice())
console.log(getComputerChoice())

// get 3 values
// choose them randomly