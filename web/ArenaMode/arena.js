let userScore = 0;
let computerScore = 0;
let userName = "";


async function userChoiceRock() {
    const result = await eel.arenaMode("Rock")();
    const computerChoice = await eel.computerChoiceArena()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Rock";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    if (result === "You win!") {
        userScore += 1;
    } else if (result === "Computer wins!") {
        computerScore += 1;
    }
}


async function userChoicePaper() {
    const result = await eel.arenaMode("Paper")();
    const computerChoice = await eel.computerChoiceArena()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;;

    if (result === "You win!") {
        userScore += 1;
    } else if (result === "Computer wins!") {
        computerScore += 1;
    }
}

async function userChoiceScissor() {
    const result = await eel.arenaMode("Scissors")();
    const computerChoice = await eel.computerChoiceArena()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    if (result === "You win!") {
        userScore += 1;
    } else if (result === "Computer wins!") {
        computerScore += 1;
    }
}


document.getElementById("btnRock").onclick = userChoiceRock;
document.getElementById("btnPaper").onclick = userChoicePaper;
document.getElementById("btnScissor").onclick = userChoiceScissor;