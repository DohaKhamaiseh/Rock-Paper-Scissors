let total_user_score = 0;
let computerScore = 0;


async function userChoiseRock() {
    const result = await eel.Streak_Mode("Rock")();
    let user_score = await eel.userScoreStreak()()
    let computer_score = await eel.computerScoreStreak()()
    const computerChoice = await eel.computerChoiceStreak()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Rock";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";


    if (result === "You win!") {
        total_user_score += user_score
        document.getElementById("user_score").textContent = total_user_score;
        document.getElementById("userName").textContent = userName;
    }


    else if ((computer_score == 1)) {

        window.location.href = './endStreak.html'
    }

    console.log(user_score)
    console.log(computer_score)
}

async function userChoisePaper() {
    const result = await eel.Streak_Mode("Paper")();
    let user_score = await eel.userScoreStreak()()
    let computer_score = await eel.computerScoreStreak()()
    const computerChoice = await eel.computerChoiceStreak()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";

    // console.log(result)

    if (result === "You win!") {
        total_user_score += user_score
        document.getElementById("user_score").textContent = total_user_score;
        document.getElementById("userName").textContent = userName;
    }


    else if ((computer_score == 1)) {

        window.location.href = './endStreak.html'
    }

    console.log(user_score)
    console.log(computer_score)
}

async function userChoiseScissor() {
    const result = await eel.Streak_Mode("Scissors")();
    let user_score = await eel.userScoreStreak()()
    let computer_score = await eel.computerScoreStreak()()
    const computerChoice = await eel.computerChoiceStreak()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";

    // console.log(result)

    if (result === "You win!") {
        total_user_score += user_score
        document.getElementById("user_score").textContent = total_user_score;
        document.getElementById("userName").textContent = userName;
    }


    else if ((computer_score == 1)) {

        window.location.href = './endStreak.html'
    }

    console.log(user_score)
    console.log(computer_score)
}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;