rounds = document.getElementById("rounds")
startBtn = document.getElementById("startBtn")
startBtn.onclick = startGame

function startGame() {
    eel.setRounds(rounds.value)

    if (parseInt(rounds.value) > 0) {
        window.location.href = './startReverse.html';
    }
    else {
        alert("Enter Availble Number")
    }
}