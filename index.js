const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleup);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleup);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = false;
    
})

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = "Key is down"
}

function handleup(e) {
    logDiv.textContent = `Key ${e.key} pressed up`;
    stateDiv.textContent = "Key is up"
}