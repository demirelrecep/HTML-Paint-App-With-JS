let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let draw = false;
let firstX = 0;
let firstY = 0;
let lastX = 0;
let lastY = 0;
let dotDraw = false;
let colorName = "black";
let brushSize = 1;

canvas.addEventListener("mousedown", function(e) {coordinate("down", e)}, false);
canvas.addEventListener("mouseup", function(e) {coordinate("up", e)}, false);
canvas.addEventListener("mouseout", function(e) {coordinate("out", e)}, false);
canvas.addEventListener("mousemove", function(e) {coordinate("move", e)}, false);


function coordinate(res, e) {   //Mouse event and mouse x,y coordinate
    if(res == "down") {
        firstX = lastX;
        firstY = lastY;
        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;
                       
        draw = true;
        dotDraw = true;
        if(dotDraw) {   //One click, dot
            ctx.beginPath();
            ctx.fillStyle = colorName;
            ctx.arc(lastX, lastY, brushSize / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();            
            dotDraw = false;
        }
    }
    if(res == "move") {
        if(draw) {
            firstX = lastX;
            firstY = lastY;
            lastX = e.clientX - canvas.offsetLeft;
            lastY = e.clientY - canvas.offsetTop;
            drawing();
        }
    }
    if(res == "up" || res == "out") {
        draw = false;
    }
}

function drawing() {
    ctx.beginPath();
    ctx.moveTo(firstX, firstY);
    ctx.lineTo(lastX, lastY);
    ctx.strokeStyle = colorName;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round"
    ctx.stroke();
    ctx.closePath();
    // ctx.arc(e.x-canvas.offsetLeft, e.y-canvas.offsetTop, brushSize, 0,2 * Math.PI);
    // ctx.fill();
}

//Pen Tool
function pen() {
    brushSize = 1;
    colorName = "black";
}

//Brush Tool
function brush() {
    brushSize = 10;
    colorName = "black";
}

//Erase
function erase() {
    drawingStyle = "brush";
    brushSize = 15;
    colorName = "white";
}

//Color Change
function changeColor(colorNum) {
    colorName = "#" + colorNum;
}

//Clear Canvas
function clearCanvas() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = colorName;
}

//Save 
function save() {
    let dataURL = canvas.toDataURL();
    document.getElementById("canvasImage").src = dataURL;
    document.getElementById("canvasImage").style.display = "block";
}