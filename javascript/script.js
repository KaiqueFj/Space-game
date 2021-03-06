var canvas = document.getElementById("space-game");
var ctx = canvas.getContext("2d");

var sizeAsteroid = 40;
var step = 10;
var xSpaceship = Math.floor(canvas.width / 2);
var ySpaceship = Math.floor(canvas.height / 2);
var widthSpaceship = 50;
var heightSpaceship = 50;
console.log(xSpaceship, ySpaceship);
console.log(widthSpaceship, heightSpaceship);

var t0 = new Date().getTime();
var t, deltaT;

var fps = 2;
var level = 1;

var image = new Image();
image.src = "./images/shipUp.jpeg";

ctx.font = "20px Arial";

function newAsteroid(x, y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, sizeAsteroid, sizeAsteroid);
    console.log("New asteroid: " + xAsteroid + ", " + yAsteroid);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSpaceship(x, y, widthSpaceship, heightSpaceship) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, widthSpaceship, heightSpaceship);
}

function drawSpaceship(x, y, widthSpaceship, heightSpaceship) {
    ctx.drawImage(image, x, y, widthSpaceship, heightSpaceship);
}

function move(key) {
    switch(key.keyCode) {
        case 38:
            if(ySpaceship > step) {
                ySpaceship -= step;
            } else {
                ySpaceship = 0;
            }
            image.src = "./images/shipUp.jpeg";
            break;
        case 40:
            if(ySpaceship < canvas.height - step - heightSpaceship) {
                ySpaceship += step;
            } else {
                ySpaceship = canvas.height - heightSpaceship;
            }
            image.src = "./images/ship-down.jpeg";
            break;
        case 37:
            if(xSpaceship > step) {
                xSpaceship -= step;
            } else {
                xSpaceship = 0;
            }
            image.src = "./images/ship-left.jpeg";
            break;
        case 39: 
            if(xSpaceship < canvas.width - step - widthSpaceship) {
                xSpaceship += step;
            } else {
                xSpaceship = canvas.width - widthSpaceship;
            }
            image.src = "./images/ship-right.jpeg";
            break;
    }
    console.log("Key pressed: " + key.keyCode);
}

function detectColision(xSpaceship, ySpaceship, widthSpaceship, heightSpaceship, xAsteroid, yAsteroid, widthAsteroid, heightAsteroid) {
    if(((xSpaceship + widthSpaceship) > xAsteroid && (xAsteroid + widthAsteroid) > xSpaceship) && ((ySpaceship + heightSpaceship) > yAsteroid && (yAsteroid + heightAsteroid) > ySpaceship)) {
        console.log("Colision!");
        return true;
    } else {
        console.log("Safe");
        return false;
    }
}

function scoreboard(score, level) {
    ctx.strokeText("PONTOS: " + score, 10, canvas.height - 10);
    ctx.strokeText("LEVEL: " + level, 10, 30);
}

function calculateScore() {
    t = new Date().getTime();
    deltaT = Math.floor((t - t0) / 1000);
    return deltaT;
}

function gameOver() {
    ctx.font = "40px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", canvas.width/2 - 120, canvas.height/2);
}

function gameLoop() {
    clearCanvas();

    // add score
    score = calculateScore();
    scoreboard(score, level);

    // create asteroids at random places
    xAsteroid = Math.floor(Math.random() * canvas.width);
    yAsteroid = Math.floor(Math.random() * canvas.height);
    newAsteroid(xAsteroid, yAsteroid);

    // draw spaceship
    drawSpaceship(xSpaceship, ySpaceship, widthSpaceship, heightSpaceship);

    // check colision
    if(detectColision(xSpaceship, ySpaceship, widthSpaceship, heightSpaceship, xAsteroid, yAsteroid, sizeAsteroid, sizeAsteroid)) {
        gameOver();
    } else {
        if(score > 0 && score % 10 == 0) {
            //     fps = fps*1.5;
            //     level += 1;
            // }
            level = Math.floor(score / 5) + 1;
            fps = 2 + level * 0.5;

}
        setTimeout(function() {
            requestAnimationFrame(gameLoop);
        }, 1000 / fps);
    }
}

requestAnimationFrame(gameLoop);

window.onkeydown = move;   