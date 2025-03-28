console.log("JavaScript file is loaded and running!");



// ringing
document.addEventListener("DOMContentLoaded", function () {
    const phone = document.querySelector(".phone");
    const ringtone = new Audio("assets/audio/ringtone.mp3"); // Ringtone file
    
    function startRinging() {
        ringtone.loop = true;
        ringtone.play();
        phone.classList.add("ringing");
    }

    function stopRinging() {
        ringtone.pause();
        ringtone.currentTime = 0;
        phone.classList.remove("ringing");
    }

    setTimeout(startRinging, 2000);
    phone.addEventListener("click", stopRinging);
});





// scrolling
const container = document.querySelector(".Room");

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
});



// drawing
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = "black";


function resizeCanvas() {
    const whiteboard = document.querySelector(".whiteboard-bg");
    canvas.width = whiteboard.clientWidth * 0.8;  // Adjusting to fit
    canvas.height = whiteboard.clientHeight * 0.7;
}
resizeCanvas();
console.log("Canvas Size:", canvas.width, canvas.height);




canvas.addEventListener("mousedown", () => {
    drawing = true;
    ctx.beginPath(); 
});
canvas.addEventListener("mouseup", () => {
    drawing = false;
});
canvas.addEventListener("mouseleave", () => {
    drawing = false;
});
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;
    console.log("Drawing at:", event.offsetX, event.offsetY); // Debugging
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}



function changeColor(color) {
    currentColor = color;
}


document.getElementById("clearBoard").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
