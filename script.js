/**
 * Created by Vlad on 30.01.2017.
 */
var objLine = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    lineColor: '#000000',
    lineThickness: 1
}
var clicking = false;
var theInput = document.getElementById("myColor");
var theInputThink = document.getElementById("myLineThickness");
var canvasClear = document.getElementById("canvasClear");
var canvasSave = document.getElementById("canvasSave");
console.dir(canvasSave);
var theColor = theInput.value;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function onPaint(odjData){

    ctx.beginPath();
    ctx.moveTo(odjData.startX, odjData.startY);
    ctx.lineTo(odjData.endX, odjData.endY);
    ctx.strokeStyle = odjData.lineColor;
    ctx.lineWidth = odjData.lineThickness;
    // ctx.fill();
    ctx.stroke();
}

theInput.addEventListener("input", function() {
    objLine.lineColor = theInput.value;
    console.log(theInput.value);
}, false);


theInputThink.addEventListener("input", function() {
    objLine.lineThickness = theInputThink.value;
    console.log(theInputThink.value);
}, false);

canvas.addEventListener("mousedown", function(event) {
    console.log(event);
if (event.isTrusted == true){
    clicking = true;
}
    // objLine.startX = event.offsetX;
    // objLine.startY = event.offsetY;
    objLine.endX = event.offsetX;
    objLine.endY = event.offsetY;
}, false);

canvas.addEventListener("mouseup", function(event) {
    if (event.isTrusted == true){
        clicking = false;
            }

        }, false);

canvas.addEventListener("mousemove", function(event) {
    if (clicking == true){
        objLine.startX = objLine.endX;
        objLine.startY = objLine.endY;
        objLine.endX = event.offsetX;
        objLine.endY = event.offsetY;
        onPaint(objLine);
    }

})

theInput.addEventListener("input", function() {
    objLine.lineColor = theInput.value;
    console.log(theInput.value);
}, false);

canvasClear.addEventListener("click", function() {
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
}, false);

canvasSave.addEventListener("click", function() {
    save(canvasSave, 'file.png');
    // window.open(document.getElementById("canvas").toDataURL("image/png"),"tfract_save");
}, false);

function save(canvasSave, filename) {
    canvasSave.href = canvas.toDataURL();
    canvasSave.download = filename;
}
