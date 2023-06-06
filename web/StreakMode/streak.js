let total_user_score = 0;
let computerScore = 0;


function playSoundEffect(soundEffectPath) {
    const soundEffect = new Audio(soundEffectPath);
    soundEffect.play();
}


async function userChoiseRock() {

    playSoundEffect("../Assets/RockSound.mp3");


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
        document.getElementById("user_score").textContent = userName + " score: " + "" + total_user_score;
       
    }


    else if ((computer_score == 1)) {
          window.location.href = `./endStreak.html?user_score=${encodeURIComponent(total_user_score)}`;
     
    }

   
}

async function userChoisePaper() {

    playSoundEffect("../Assets/PaperSound.mp3");

    const result = await eel.Streak_Mode("Paper")();
    let user_score = await eel.userScoreStreak()()
    let computer_score = await eel.computerScoreStreak()()
    const computerChoice = await eel.computerChoiceStreak()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";

    if (result === "You win!") {
        
        total_user_score += user_score
        document.getElementById("user_score").textContent = userName + " score: " + "" + total_user_score;
       
    }


    else if ((computer_score == 1)) {
          window.location.href = `./endStreak.html?user_score=${encodeURIComponent(total_user_score)}`;
     
    }

}

async function userChoiseScissor() {

    playSoundEffect("../Assets/ScissorsSound.mp3");

    const result = await eel.Streak_Mode("Scissors")();
    let user_score = await eel.userScoreStreak()()
    let computer_score = await eel.computerScoreStreak()()
    const computerChoice = await eel.computerChoiceStreak()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";

    if (result === "You win!") {
        
        total_user_score += user_score
        document.getElementById("user_score").textContent = userName + " score: " + "" + total_user_score;
       
    }


    else if ((computer_score == 1)) {
          window.location.href = `./endStreak.html?user_score=${encodeURIComponent(total_user_score)}`;
     
    }


}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;