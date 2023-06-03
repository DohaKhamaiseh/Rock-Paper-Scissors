
async function userChoiseRock() {
    const result = await eel.Streak_Mode("Rock")();
    let user_score = await eel.userScoreStreakMode()()
    let computer_score = await eel.computerScoreStreakMode()()
    document.getElementById("userChoise").textContent = result;
    if ((computer_score == 1)){

        window.location.href = './endStreak.html'
    }

    console.log(user_score)
    console.log(computer_score)
}

async function userChoisePaper() {
    const result = await eel.Streak_Mode("Rock")();
    let user_score = await eel.userScoreStreakMode()()
    let computer_score = await eel.computerScoreStreakMode()()
    document.getElementById("userChoise").textContent = result;

    if ((computer_score == 1)){

        window.location.href = './endStreak.html'
    }

   
    console.log(user_score)
    console.log(computer_score)

}

async function userChoiseScissor() {
    const result = await eel.Streak_Mode("Rock")();
    let user_score = await eel.userScoreStreakMode()()
    let computer_score = await eel.computerScoreStreakMode()()
    document.getElementById("userChoise").textContent = result;

    if ((computer_score == 1)){

        window.location.href = './endStreak.html'
    }

    console.log(user_score)
    console.log(computer_score)
}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;