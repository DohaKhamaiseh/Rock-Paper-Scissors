userNameInput = document.getElementById("userNameInput")
startGame = document.getElementById("startGame")
startGame.onclick = userNameData


function userNameData() {
    let name = userNameInput.value
    eel.setUserName(name)
    window.location.href = './modes.html';
}

