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

console.log(getComputerChoice())

// get 3 values
// choose them randomly