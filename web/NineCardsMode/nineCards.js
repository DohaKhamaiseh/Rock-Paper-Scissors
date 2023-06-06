let rounds = 9;
let rock_count = 0;
let paper_count = 0;
let scissor_count = 0;
let userScore = 0;
let computerScore = 0;
let roundResults = [];


function playSoundEffect(soundEffectPath) {
    const soundEffect = new Audio(soundEffectPath);
    soundEffect.play();
}

async function userChoiseRock() {
    playSoundEffect("../Assets/RockSound.mp3");

    const result = await eel.nineCards_mode("Rock")();
    rounds -= 1;

    rock_count = await eel.create_rock_button()();
    const user_name = await eel.getUserName()();
    computerChoice = await eel.computerChoiceNine()();

    document.getElementById("whatUserPlayed").textContent = user_name + " played Rock";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = user_name + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    if (rock_count >= 3) {
        document.getElementById("btnRock").disabled = true;
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = user_name + " Score: " + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }

    roundResults.push(result);

    checkOverallResult();
}

async function userChoisePaper() {

    playSoundEffect("../Assets/PaperSound.mp3");

    const result = await eel.nineCards_mode("Paper")();
    rounds -= 1;

    paper_count = await eel.create_paper_button()();
    const user_name = await eel.getUserName()();
    computerChoice = await eel.computerChoiceNine()();

    document.getElementById("whatUserPlayed").textContent = user_name + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = user_name + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    if (paper_count >= 3) {
        document.getElementById("btnPaper").disabled = true;
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = user_name + " Score: " + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }

    roundResults.push(result);

    checkOverallResult();
}

async function userChoiseScissor() {

    playSoundEffect("../Assets/ScissorsSound.mp3");

    const result = await eel.nineCards_mode("Scissors")();
    rounds -= 1;

    scissor_count = await eel.create_scissors_button()();
    const user_name = await eel.getUserName()();
    computerChoice = await eel.computerChoiceNine()();

    document.getElementById("whatUserPlayed").textContent = user_name + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = user_name + " Score: " + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    if (scissor_count >= 3) {
        document.getElementById("btnScissor").disabled = true;
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = user_name + " Score: " + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }

    roundResults.push(result);

    checkOverallResult();
}

function checkOverallResult() {
    if (
        document.getElementById("btnRock").disabled &&
        document.getElementById("btnPaper").disabled &&
        document.getElementById("btnScissor").disabled
    ) {
        const totalResult = calculateTotalResult();
        setTimeout(() => {
            window.location.href = `./endNineCards.html?result=${encodeURIComponent(totalResult)}`;
        }, 0);
    }
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

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;