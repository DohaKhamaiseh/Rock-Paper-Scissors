let userName = "";
rounds = 1
let userScore = 0;
let computerScore = 0;


async function getRounds() {
    rounds = await eel.getRounds()()
}
getRounds()


async function getName() {
    userName = await eel.getUserName()()
}
getName()


async function userChoiceRock() {
    const result = await eel.mouseClassic("Rock")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    document.getElementById("result").textContent = result;
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice;
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";
    rounds -= 1;

    if (rounds === 0) {
        window.location.href = './endMouse.html';
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }
}

async function userChoicePaper() {
    const result = await eel.mouseClassic("Paper")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    document.getElementById("result").textContent = result;
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice;
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";
    rounds -= 1;

    if (rounds === 0) {
        window.location.href = './endMouse.html';
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }

}

async function userChoiceScissor() {
    const result = await eel.mouseClassic("Scissors")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    document.getElementById("result").textContent = result;
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice;
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";

    rounds -= 1;

    if (rounds === 0) {
        window.location.href = './endMouse.html';
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }
}

document.getElementById("btnRock").onclick = userChoiceRock;
document.getElementById("btnPaper").onclick = userChoicePaper;
document.getElementById("btnScissor").onclick = userChoiceScissor;