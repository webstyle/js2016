// Shim for RequestAnimationFrame
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var ele = document.querySelector('#animation');
var ctx = ele.getContext('2d');
var x = 10;
var y = 10;
var width = 150;
var height = 150;

function logic() {
    x += 10;
    if (x < ele.width - width) {
        requestAnimationFrame(draw);
    }
}

function draw() {
    ctx.clearRect(0, 0, ele.width, ele.height);
    ctx.fillStyle = "#dadada";
    ctx.fillRect(x, y, 150, 150);
}

requestAnimationFrame(draw);
setInterval(logic, 100 / 6);
