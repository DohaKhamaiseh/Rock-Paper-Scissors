let rounds = 1;
let userName = ""; 
let roundsCounter = 0; 

async function getRounds() {
    rounds = await eel.roundsClassic()();
    userName = await eel.getUserName()();
    roundsCounter = rounds;
}
getRounds();

async function userChoiceRock() {
    const result = await eel.mouseClassic("Rock")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    document.getElementById("userChoise").textContent = result;
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice; 
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    document.getElementById("roundCounter").textContent = "Round " + (roundsCounter - rounds + 1); 
    rounds -= 1;

    if (rounds === 0) {
        window.location.href = './endMouse.html';
    }
}

async function userChoicePaper() {
    const result = await eel.mouseClassic("Paper")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    document.getElementById("userChoise").textContent = result;
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice; 
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    document.getElementById("roundCounter").textContent = "Round " + (roundsCounter - rounds + 1);
    rounds -= 1;

    if (rounds === 0) {
        window.location.href = './endMouse.html';
    }
}

async function userChoiceScissor() {
    const result = await eel.mouseClassic("Scissors")();
    const userChoice = await eel.userChoiceClassic()();
    const computerChoice = await eel.computerChoiceClassic()();
    document.getElementById("userChoise").textContent = result;
    document.getElementById("whatUserPlayed").textContent = userName + " chose " + userChoice; 
    document.getElementById("whatComputerPlayed").textContent = "The Computer chose " + computerChoice;
    document.getElementById("roundCounter").textContent = "Round " + (roundsCounter - rounds + 1); 
    rounds -= 1;

    if (rounds === 0) {
        window.location.href = './endMouse.html';
    }
}

document.getElementById("btnRock").onclick = userChoiceRock;
document.getElementById("btnPaper").onclick = userChoicePaper;
document.getElementById("btnScissor").onclick = userChoiceScissor;
