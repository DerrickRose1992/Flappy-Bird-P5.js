var player;
var score = 0;
var bars = [];
var gameOver;

var backgroundColor = '#ecf0f1';
var textColor = '#7f8c8d'


function setup() {
    var canvas = createCanvas(480, 680);
    canvas.parent('game');

    background(backgroundColor);

    player = new PlayerModel()

    score = 0;
    gameOver = false;

    bars = [];
    bar = new Bar();
    bars.push(bar);

    textFont("Fjalla One");
}

function draw() {
    background(backgroundColor);

    fill(textColor);
    textSize(32);
    text("Score " + score, 10, 40);

    player.draw();
    player.update();

    if (bars[0].xBarDown == 200) {
        var bar = new Bar();
        bars.push(bar);
    }

    for (var i = bars.length - 1; i >= 0; i--) {
        bars[i].update();
        bars[i].draw();
    }


    if (bars[0].isHitByPlayer(player) || player.isTopOrBottomHit()) {
        noLoop();
        gameOver = true;
    }

    if (bars[0].isScore(player)) {
        score += 1;
        text("Score " + score, 10, 30);
    }

    if (bars[0].xBarUp === 0) {
        bars.shift();
    }
}

function keyPressed() {
    if (key == ' ') {
        if (gameOver) {
            setup();
            loop();
        }
        player.moveUp();
    }
}

function touchStarted() {
    if (gameOver) {
        setup();
        loop();
    }
    player.moveUp();
}
