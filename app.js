/* eslint-disable */
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const h = c.height;
const pyramidHeight = 176;
let group1, group2, group3, group4, group5, group6;
let ceil2, ceil3, ceil4, ceil5, ceil6;
let sum;
let notification = document.getElementById("notification");;

function drawInitalPyramid() {
   ctx.beginPath();
   ctx.moveTo(0,200);
   ctx.lineTo(200,200);
   ctx.lineTo(100,26);
   ctx.fillStyle = "grey";
   ctx.fill();
}

function drawPyramid() {

    group1 = parseInt(document.getElementById("input1").value) / 10;
    group2 = parseInt(document.getElementById("input2").value) / 10;
    group3 = parseInt(document.getElementById("input3").value) / 10;
    group4 = parseInt(document.getElementById("input4").value) / 10;
    group5 = parseInt(document.getElementById("input5").value) / 10;
    group6 = parseInt(document.getElementById("input6").value) / 10;

    sum = (group1 + group2 + group3 + group4 + group5 + group6);

    if (sum === 1) {

        drawInitalPyramid();

        notification.hidden = true;

        ceil6 = h - Math.floor(pyramidHeight * group6);
        ceil5 = ceil6 - Math.floor(pyramidHeight * group5);
        ceil4 = ceil5 - Math.floor(pyramidHeight * group4);
        ceil3 = ceil4 - Math.floor(pyramidHeight * group3);
        ceil2 = ceil3 - Math.floor(pyramidHeight * group2);
        ceil1 = h - pyramidHeight;

        // pyramid segments

        drawRect(0, 200, 200, ceil6, "magenta");
        drawRect(0, ceil6 + 1, 200, ceil5, "cyan");
        drawRect(0, ceil5 + 1, 200, ceil4, "magenta");
        drawRect(0, ceil4 + 1, 200, ceil3, "cyan");
        drawRect(0, ceil3 + 1, 200, ceil2, "magenta");
        drawRect(0, ceil2 + 1, 200, ceil1, "cyan");

        // outer area fills

        drawRect2(0, 0, 100, 200, 27, "white");
        drawRect2(200, 0, 100, 200, 27, "white");

        drawRect(0, 0, 200, 27, "white");

    } else {
        notification.hidden = false;
        notification.innerHTML = "Vaata protsendid üle - summa peab olema 100%";
    }
}

function drawRect(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x1, y1);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawRect2(x1, y1, x2, y2, y3, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y3);
    ctx.lineTo(x1, y1);
    ctx.fillStyle = color;
    ctx.fill();
}

function calculateSum() {
    
}

drawInitalPyramid();