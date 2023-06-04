let coins = 10

async function userChoiseRock() {
    const result = await eel.challenge_mode("Rock")();
    let user_score = await eel.userScoreChallengeMode()()
    let computer_score = await eel.computerScoreChallengeMode()()
    let coins = await eel.coinsChallengeMode()()
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if ((user_score - computer_score) >= 2 || (computer_score - user_score) >= 2 || coins == 0) {
        window.location.href = './endChallenge.html'
    }
}

async function userChoisePaper() {
    const result = await eel.challenge_mode("Paper")();
    const user_score = await eel.userScoreChallengeMode()()
    const computer_score = await eel.computerScoreChallengeMode()()
    coins = await eel.coinsChallengeMode()()
    const computerChoice = await eel.computerChoiceChallenge()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " Score:" + user_score;
    document.getElementById("computerScore").textContent = "Computer Score: " + computer_score;
    document.getElementById("coins").textContent = "Coins: " + coins;

    if ((user_score - computer_score) >= 2 || (computer_score - user_score) >= 2 || coins == 0) {
        window.location.href = './endChallenge.html'
    }
}

async function userChoiseScissor() {
    const result = await eel.challenge_mode("Scissors")();
    const user_score = await eel.userScoreChallengeMode()()
    const computer_score = await eel.computerScoreChallengeMode()()
    coins = await eel.coinsChallengeMode()()
    const computerChoice = await eel.computerChoiceChallenge()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " Score:" + user_score;
    document.getElementById("computerScore").textContent = "Computer Score: " + computer_score;
    document.getElementById("coins").textContent = "Coins: " + coins;

    if ((user_score - computer_score) >= 2 || (computer_score - user_score) >= 2 || coins == 0) {
        window.location.href = './endChallenge.html'
    }
}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;