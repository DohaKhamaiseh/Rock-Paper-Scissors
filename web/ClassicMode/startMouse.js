let userName = "";
let rounds = 1;
let userScore = 0;
let computerScore = 0;
let roundResults = []; // Array to store the results of each round

async function getRounds() {
    rounds = await eel.getRounds()();
}
getRounds();

async function getName() {
    userName = await eel.getUserName()();
}
getName();

function playSoundEffect(soundEffectPath) {
    const soundEffect = new Audio(soundEffectPath);
    soundEffect.play();
}

async function userChoiceRock() {
    playSoundEffect("../Assets/Sounds/RockSound.mp3");

    const result = await eel.mouseClassic("Rock")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    updateResult(result);
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice;
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    updateScores();
    updateRoundCounter();

    rounds -= 1;
    roundResults.push(result); // Store the result of the current round

    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endMouse.html?result=${encodeURIComponent(totalResult)}`;
    }

    if (result === "You win!") {
        userScore += 1;
        updateScores();
    } else if (result === "Computer wins!") {
        computerScore += 1;
        updateScores();
    }
}

async function userChoicePaper() {
    playSoundEffect("../Assets/Sounds/PaperSound.mp3");

    const result = await eel.mouseClassic("Paper")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    updateResult(result);
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice;
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    updateScores();
    updateRoundCounter();

    rounds -= 1;
    roundResults.push(result); // Store the result of the current round

    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endMouse.html?result=${encodeURIComponent(totalResult)}`;
    }

    if (result === "You win!") {
        userScore += 1;
        updateScores();
    } else if (result === "Computer wins!") {
        computerScore += 1;
        updateScores();
    }
}

async function userChoiceScissors() {
    playSoundEffect("../Assets/Sounds/ScissorsSound.mp3");

    const result = await eel.mouseClassic("Scissors")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    updateResult(result);
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice;
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    updateScores();
    updateRoundCounter();

    rounds -= 1;
    roundResults.push(result); // Store the result of the current round

    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endMouse.html?result=${encodeURIComponent(totalResult)}`;
    }

    if (result === "You win!") {
        userScore += 1;
        updateScores();
    } else if (result === "Computer wins!") {
        computerScore += 1;
        updateScores();
    }
}

function updateResult(result) {
    document.getElementById("result").textContent = result;
}

function updateScores() {
    document.getElementById("userScore").textContent = userName + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
}

function updateRoundCounter() {
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";
}

function calculateTotalResult() {
    const userWins = roundResults.filter(result => result === "You win!").length;
    const computerWins = roundResults.filter(result => result === "Computer wins!").length;
    const ties = roundResults.filter(result => result === "It's a tie!").length;

    if (userWins > computerWins) {
        return "Overall Result: You win!";
    } else if (userWins < computerWins) {
        return "Overall Result: Computer wins!";
    } else {
        return "Overall Result: It's a tie!";
    }
}

document.getElementById("btnRock").onclick = userChoiceRock;
document.getElementById("btnPaper").onclick = userChoicePaper;
document.getElementById("btnScissor").onclick = userChoiceScissors;