const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;
 

rock.addEventListener("click", () => {
    resultText.innerHTML = playRound("rock");
}); 
paper.addEventListener("click", () => {
    resultText.innerHTML = playRound("paper");
}); 
scissors.addEventListener("click", () => {
    resultText.innerHTML = playRound("scissors");
}); 

function playRound(playerChoice) {
    const computerChoice = computerPlay();
    const result = resultCalculator(playerChoice, computerChoice);
    roundCounter(result, playerChoice, computerChoice);
    return result;
}

computerPlay = () => {
    const objects = ["rock", "paper", "scissors"];
    return objects[Math.floor(Math.random() * objects.length)];
}

resultCalculator = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "Its an tie";
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        return `The Computer Played ${computerChoice}! You cant stop winning!🎰🎰🎰` ;
    } else {
        return `The Computer Played ${computerChoice}! You cant stop losing!📉📉`;
    }
}



roundCounter = (result, playerChoice, computerChoice) => {
    if (result.includes("winning")) {
        playerScore++;
    } else if (result.includes("losing")) {
        computerScore++;
    }
    scoreText.innerHTML = `player: ${playerScore} computer: ${computerScore}`;
    console.log(playerScore)
    if (playerScore === 5) {
        resultCalculator(playerChoice, computerChoice);
        resetScore();
        alert("You have won the game!");
    } else if(computerScore === 5){
        resultCalculator(playerChoice, computerChoice);
        resetScore();
        alert("You have lost the game you fat beta");
    }
}


resetScore = () => {
    playerScore = 0 ;
    computerScore = 0;
    resultText.innerHTML = "";
    scoreText.innerHTML = `player: ${playerScore} computer: ${computerScore}`;
}