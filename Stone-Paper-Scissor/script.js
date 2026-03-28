let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const genCompChoice = () =>{
    const options = ["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerHTML = "Game was draw.Play again";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        // console.log("You Win");
        msg.innerHTML = "You win!";
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        // console.log("You lose");
        msg.innerHTML = "You lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice is", userChoice);
    const compChoice = genCompChoice();
    // console.log("user choice is", compChoice);
    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor,paper
            userWin = compChoice === "scissor" ? true : false;
        } else if(userChoice === "paper"){
            // rock,scissor
            userWin = compChoice === "rock" ? true : false;
        }else{
            // paper,rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);

    }
};
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        // console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});