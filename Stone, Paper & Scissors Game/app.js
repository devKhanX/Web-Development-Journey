let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    console.log("User choice=", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice", computerChoice);
    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31"; 
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice, "was clicked");
        playGame(userChoice);
    });
})
resetBtn.addEventListener("click", resetGame);
