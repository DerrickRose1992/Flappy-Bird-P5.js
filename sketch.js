var player;
var score = 0;
var bars = [];


function setup() {
    createCanvas(480, 680);
    background('#ecf0f1');

    player = new PlayerModel()
    bar = new Bar();

    bars.push(bar);
}

function draw() {

    background('#ecf0f1');
    textSize(32);
    text("Score " + score, 10, 40);

    player.draw();
    player.update();

    if (bars[0].xBarDown == 200) {
        var bar = new Bar();
        bars.push(bar);
    }

    for (var i = bars.length-1; i >= 0; i--) {
        bars[i].update();
        bars[i].draw();
    }


    if (bars[0].isHitByPlayer(player) || player.isTopOrBottomHit()) {
        noLoop();
    }

    if (bars[0].isScore(player)) {
        score += 1;
        text("Score " + score, 10, 30);
    }

    if (bars[0].xBarUp + BAR_WIDTH === 0) {
        bars.shift();
    }


}

function keyPressed() {
    player.moveUp();
}
