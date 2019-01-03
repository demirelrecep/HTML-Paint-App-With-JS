let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;  
// canvas.height = window.innerHeight;
let colorName;
let mousePressed = false;

canvas.addEventListener("mousedown", function() {mousePressed = true});
canvas.addEventListener("mouseup", function() {mousePressed = false});
canvas.addEventListener("mouseout", function() {mousePressed = false});


canvas.addEventListener("mousemove", drawing);

function drawing(e) {
    if(mousePressed) {
        ctx.beginPath();
        ctx.fillStyle = colorName;
        ctx.arc(e.x-canvas.offsetLeft,e.y-canvas.offsetTop,10, 0,2 * Math.PI);
        ctx.fill();
        console.log(e.x,e.y);
    }
}


//Renk seçimi
function changeColor(colorNum) {
    colorName = "#" + colorNum;
    console.log(colorName);
}