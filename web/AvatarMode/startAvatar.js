rounds = 1

async function getRounds() {
    rounds = await eel.getRounds()()
}
getRounds()



async function userChoiseWind() {
    const result = await eel.Avatar("Wind")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endAvatar.html'
    }
}

async function userChoiseEarth() {
    const result = await eel.Avatar("Earth")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endAvatar.html'
    }
}

async function userChoiseFire() {
    const result = await eel.Avatar("Fire")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endAvatar.html'
    }
}

async function userChoiseWater() {
    const result = await eel.Avatar("Water")();
    document.getElementById("userChoise").textContent = result;
    rounds -= 1
    if (rounds == 0) {
        window.location.href = './endAvatar.html'
    }
}

document.getElementById("btnFire").onclick = userChoiseFire;
document.getElementById("btnWater").onclick = userChoiseWater;
document.getElementById("btnWind").onclick = userChoiseWind;
document.getElementById("btnEarth").onclick = userChoiseEarth;

