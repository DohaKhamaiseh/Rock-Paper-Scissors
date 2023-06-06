let roundResults = [];
let userScore = 0;
let computerScore = 0;
let userName = "";
let totalcoins = 10;

function playSoundEffect(soundEffectPath) {
    const soundEffect = new Audio(soundEffectPath);
    soundEffect.play();
}

async function userChoiseRock() {
    playSoundEffect("../Assets/Sounds/RockSound.mp3");

    const result = await eel.challenge_mode("Rock")();
    const user_score = await eel.userScoreChallengeMode()()
    const computer_score = await eel.computerScoreChallengeMode()()
    coins = await eel.coinsChallengeMode()()
    totalcoins += coins
    const computerChoice = await eel.computerChoiceChallenge()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Rock";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("coins").textContent = "Coins: " + totalcoins;
    roundResults.push(result);

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }

    if ((userScore - computerScore) > 2 || (computerScore - userScore) > 2 || totalcoins == 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endChallenge.html?result=${encodeURIComponent(totalResult)}`;
    }
}

async function userChoisePaper() {

    playSoundEffect("../Assets/Sounds/PaperSound.mp3");

    const result = await eel.challenge_mode("Paper")();
    const user_score = await eel.userScoreChallengeMode()()
    const computer_score = await eel.computerScoreChallengeMode()()
    coins = await eel.coinsChallengeMode()()
    totalcoins += coins
    const computerChoice = await eel.computerChoiceChallenge()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("coins").textContent = "Coins: " + totalcoins;
    roundResults.push(result);

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }

    if ((userScore - computerScore) > 2 || (computerScore - userScore) > 2 || totalcoins == 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endChallenge.html?result=${encodeURIComponent(totalResult)}`;
    }
}

async function userChoiseScissor() {

    playSoundEffect("../Assets/Sounds/ScissorsSound.mp3");

    const result = await eel.challenge_mode("Scissors")();
    const user_score = await eel.userScoreChallengeMode()()
    const computer_score = await eel.computerScoreChallengeMode()()
    coins = await eel.coinsChallengeMode()()
    totalcoins += coins
    const computerChoice = await eel.computerChoiceChallenge()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("coins").textContent = "Coins: " + totalcoins;
    roundResults.push(result);

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }

    if ((userScore - computerScore) > 2 || (computerScore - userScore) > 2 || totalcoins == 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endChallenge.html?result=${encodeURIComponent(totalResult)}`;
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