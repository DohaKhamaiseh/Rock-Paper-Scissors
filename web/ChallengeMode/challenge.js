rounds = 3

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
    else {
        rounds += 1;
    }
    console.log(user_score)
    console.log(computer_score)
    console.log(coins)
}

async function userChoisePaper() {
    const result = await eel.challenge_mode("Paper")();
    let user_score = await eel.userScoreChallengeMode()()
    let computer_score = await eel.computerScoreChallengeMode()()
    let coins = await eel.coinsChallengeMode()()
    document.getElementById("userChoise").textContent = result;
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
    let user_score = await eel.userScoreChallengeMode()()
    let computer_score = await eel.computerScoreChallengeMode()()
    let coins = await eel.coinsChallengeMode()()
    document.getElementById("userChoise").textContent = result;
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