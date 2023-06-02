rounds = 1

async function getRounds() {
    rounds = await eel.getRounds()()
}
getRounds()



async function userChoiseRock() {
    const result = await eel.mouseClassic("Rock")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endMouse.html'
    }
}

async function userChoisePaper() {
    const result = await eel.mouseClassic("Paper")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endMouse.html'
    }
}

async function userChoiseScissor() {
    const result = await eel.mouseClassic("Scissors")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endMouse.html'
    }
}

document.getElementById("btnRock").onclick = userChoiseRock;
document.getElementById("btnPaper").onclick = userChoisePaper;
document.getElementById("btnScissor").onclick = userChoiseScissor;




