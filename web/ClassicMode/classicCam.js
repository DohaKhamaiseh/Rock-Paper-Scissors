btnCam = document.getElementById("btnCam")
btnCam.onclick = Cam

async function Cam() {
    cam = await eel.camFun()();

}