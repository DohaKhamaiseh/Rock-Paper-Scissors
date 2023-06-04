rounds = 3
// let userScore = 0;
// let computerScore = 0;
let coins = 10

async function userChoiseRock() {
    const result = await eel.challenge_mode("Rock")();
    const user_score = await eel.userScoreChallengeMode()()
    const computer_score = await eel.computerScoreChallengeMode()()
    coins = await eel.coinsChallengeMode()()
    const computerChoice = await eel.computerChoiceChallenge()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Rock";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " Score:" + user_score;
    document.getElementById("computerScore").textContent = "Computer Score: " + computer_score;
    document.getElementById("coins").textContent = "Coins: " + coins;
    rounds -= 1
    if ((user_score - computer_score) >= 2 || (computer_score - user_score) >= 2 || coins == 0) {
        window.location.href = './endChallenge.html'
    }
    else {
        rounds += 1;
    }
    console.log(user_score)
    console.log(computer_score)
    console.log(coins)
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
    rounds -= 1
    if ((user_score - computer_score) >= 2 || (computer_score - user_score) >= 2 || coins == 0) {
        window.location.href = './endChallenge.html'
    }
    else {
        rounds += 1;
    }
    console.log(user_score)
    console.log(computer_score)
    console.log(coins)
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
    rounds -= 1
    if ((user_score - computer_score) >= 2 || (computer_score - user_score) >= 2 || coins == 0) {
        window.location.href = './endChallenge.html'
    }
    else {
        rounds += 1;
    }
    console.log(user_score)
    console.log(computer_score)
    console.log(coins)
}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;