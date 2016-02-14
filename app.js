// Shim for RequestAnimationFrame
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var ele = document.querySelector('#animation');
ele.height = window.innerHeight;
ele.width = window.innerWidth;
var ctx = ele.getContext('2d');
var x = 10;
var y = 10;
var duration = 0;
var width = 50;
var height = 50;
var heading_x = Math.random() * 360;
var heading_y = Math.random() * 360;
var distance_x = 0;
var distance_y = 0;

ele.addEventListener('mousemove', function(evt) {
    startX = x;
    endX = evt.clientX;
});

function degressToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function dir_x(length, angle) {
    return length * Math.cos(degressToRadians(angle));
}

function dir_y(length, angle) {
    return length * Math.sin(degressToRadians(angle));
}

function lerp(start, end, speed) {
    return start + (end - start) * speed;
}

function logic() {
    if (heading_x > 360 || heading_x < -360) heading_x = 0;
    if (heading_y > 360 || heading_y < -360) heading_y = 0;

    if (x <= 0 || x >= ele.width - width) {
        heading_x = heading_x + 180;
    }
    if (y <= 0 || y >= ele.height - height) {
        heading_y = -heading_y;
    }

    distance_x = dir_x(2, heading_x);
    distance_y = dir_y(2, heading_y);

    if (duration < 10) duration += 0.05;
    x = lerp(x, x + distance_x, duration);
    y = lerp(y, y + distance_y, duration);
    requestAnimationFrame(draw);

}

function draw() {
    ctx.clearRect(0, 0, ele.width, ele.height);
    ctx.fillStyle = "#dadada";
    ctx.fillRect(x, y, 50, 50);
}

requestAnimationFrame(draw);
setInterval(logic, 1000 / 6);
