rounds = 1


async function getRounds() {
    rounds = await eel.getRounds()()
}
getRounds()



let userScore = 0;
let computerScore = 0;
let userName = "";
let roundResults = [];

async function userChoiceWind() {
    const result = await eel.Avatar("Wind")();
    
    const computerChoice = await eel.computerChoiceAvatarMode()();
    const userName = await eel.getUserName()();
    
    document.getElementById("userChoise").textContent = userName + " played Wind";
    document.getElementById("computerChoise").textContent = "The Computer played " + computerChoice;
    document.getElementById("result").textContent = result;
    // document.getElementById("result").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("round").textContent = (rounds - 1) + " Round left";
    rounds-=1
    roundResults.push(result);


    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endAvatar.html?result=${encodeURIComponent(totalResult)}`;
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }

  
}



async function userChoiceWater() {
    const result = await eel.Avatar("Water")();
    

    const computerChoice = await eel.computerChoiceAvatarMode()();
    const userName = await eel.getUserName()();
    
    document.getElementById("userChoise").textContent = userName + " played Water";
    document.getElementById("computerChoise").textContent = "The Computer played " + computerChoice;
    document.getElementById("result").textContent = result;
    // document.getElementById("result").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("round").textContent = (rounds - 1) + " Round left";
    rounds-=1
    roundResults.push(result);


    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endAvatar.html?result=${encodeURIComponent(totalResult)}`;
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }
    
}

async function userChoiceFire() {
    const result = await eel.Avatar("Fire")();
   

    const computerChoice = await eel.computerChoiceAvatarMode()();
    const userName = await eel.getUserName()();
    
    document.getElementById("userChoise").textContent = userName + " played Fire";
    document.getElementById("computerChoise").textContent = "The Computer played " + computerChoice;
    document.getElementById("result").textContent = result;
    // document.getElementById("result").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("round").textContent = (rounds - 1) + " Round left";
    rounds-=1
    roundResults.push(result);

    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endAvatar.html?result=${encodeURIComponent(totalResult)}`;
    }

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }

  
}


async function userChoiceEarth() {
    const result = await eel.Avatar("Earth")();
   

    const computerChoice = await eel.computerChoiceAvatarMode()();
    const userName = await eel.getUserName()();
    
    document.getElementById("userChoise").textContent = userName + " played Earth";
    document.getElementById("computerChoise").textContent = "The Computer played " + computerChoice;
    document.getElementById("result").textContent = result;
    // document.getElementById("result").style.display = "block";
    document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("round").textContent = (rounds - 1) + " Round left";
    rounds-=1
    roundResults.push(result);

    if (result === "You win!") {
        userScore += 1;
        document.getElementById("userScore").textContent = userName + " score: " + "" + userScore;

    } else if (result === "Computer wins!") {
        computerScore += 1;
        document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;

    }

    if (rounds === 0) {
        const totalResult = calculateTotalResult();
        window.location.href = `./endAvatar.html?result=${encodeURIComponent(totalResult)}`;
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



document.getElementById("btnFire").onclick = userChoiceFire;
document.getElementById("btnWater").onclick = userChoiceWater;
document.getElementById("btnWind").onclick = userChoiceWind;
document.getElementById("btnEarth").onclick = userChoiceEarth;