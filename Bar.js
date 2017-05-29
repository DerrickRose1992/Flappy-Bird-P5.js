var maxHeight = 300;
var minHeight = 100;
var barWidth = 30;
var speed = 5;
var barColor = '#1abc9c';

var Bar = function() {

    this.gap = Math.floor(Math.random() * maxHeight) + minHeight;

    this.xBarUp = width;
    this.yBarUp = 0;
    this.hBarUp = Math.floor(Math.random() * 300) + 20;

    this.xBarDown = width;
    this.yBarDown = this.gap + this.hBarUp;
    this.hBarDown = height - this.yBarDown;


    this.draw = function() {
        fill(barColor);
        noStroke();

        rect(this.xBarDown, this.yBarDown, barWidth, this.hBarDown);
        rect(this.xBarUp, this.yBarUp, barWidth, this.hBarUp);
    }

    this.update = function() {
        this.xBarDown -= speed;
        this.xBarUp -= speed;
    }

    this.isHitByPlayer = function(player) {
      if (player.y < this.hBarUp || (player.y + player.height) > height - this.hBarDown) {
            if (player.x + player.width> this.xBarDown && player.x < (this.xBarDown + barWidth)) {
                return true;
            }
        }
        return false;
    }

    this.isScore = function(player) {
        if (player.x === this.xBarDown + barWidth) {
            return true;
        }
        return false;
    }
}
