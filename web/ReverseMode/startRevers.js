rounds = 1
let userScore = 0;
let computerScore = 0;

async function getRounds() {
    rounds = await eel.getRounds()()
}
getRounds()


async function userChoiseRock() {
    const result = await eel.reversMode("Rock")();
    const computerChoice = await eel.computerChoiceReverse()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Rock";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " Score:" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";

  

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " Score:" + userScore;
    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    }

    rounds -= 1
    if (rounds == 0) {
        if (userScore > computerScore){
            result === "You win!"
            localStorage.setItem("result", result);
        }
        else if (userScore < computerScore){
            result === "Computer wins!"
            localStorage.setItem("result", result);
        }
        else{
            result === "It's a tie!"
            localStorage.setItem("result", result);
        }
        
        window.location.href = './endReverse.html'
    }
}

async function userChoisePaper() {

    const result = await eel.reversMode("Paper")();
    const computerChoice = await eel.computerChoiceReverse()();
    const userName = await eel.getUserName()();

    document.getElementById("whatUserPlayed").textContent = userName + " played Paper";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " Score:" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";

    rounds -= 1
    if (rounds == 0) {
        if (userScore > computerScore){
            result === "You win!"
            localStorage.setItem("result", result);
        }
        else if (userScore < computerScore){
            result === "Computer wins!"
            localStorage.setItem("result", result);
        }
        else{
            result === "It's a tie!"
            localStorage.setItem("result", result);
        }
        
        window.location.href = './endReverse.html'
    }
}

async function userChoiseScissor() {
    const result = await eel.reversMode("Scissors")();
    const computerChoice = await eel.computerChoiceReverse()();
    const userName = await eel.getUserName()();
    document.getElementById("whatUserPlayed").textContent = userName + " played Scissors";
    document.getElementById("whatComputerPlayed").textContent = "The Computer played " + computerChoice;
    document.getElementById("roundResult").textContent = result;
    document.getElementById("roundResult").style.display = "block";
    document.getElementById("userScore").textContent = userName + " Score:" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("roundCounter").textContent = (rounds - 1) + " Round left";

    rounds -= 1
    if (rounds == 0) {
        if (userScore > computerScore){
            result === "You win!"
            localStorage.setItem("result", result);
        }
        else if (userScore < computerScore){
            result === "Computer wins!"
            localStorage.setItem("result", result);
        }
        else{
            result === "It's a tie!"
            localStorage.setItem("result", result);
        }
        
        window.location.href = './endReverse.html'
    }
}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;