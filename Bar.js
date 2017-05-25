const MAX_HEIGHT = 300;
const MIN_HEIGHT = 100;
const BAR_WIDTH = 30;
const SPEED = 5;

var Bar = function() {

    this.gap = Math.floor(Math.random() * MAX_HEIGHT) + MIN_HEIGHT;

    this.xBarUp = width;
    this.yBarUp = 0;
    this.hBarUp = Math.floor(Math.random() * 300) + 20;

    this.xBarDown = width;
    this.yBarDown = this.gap + this.hBarUp;
    this.hBarDown = height - this.yBarDown;


    this.draw = function() {
        fill('#e74c3c');
        noStroke();

        rect(this.xBarDown, this.yBarDown, BAR_WIDTH, this.hBarDown);
        rect(this.xBarUp, this.yBarUp, BAR_WIDTH, this.hBarUp);
    }

    this.update = function() {
        this.xBarDown -= SPEED;
        this.xBarUp -= SPEED;
    }

    this.isHitByPlayer = function(player) {

      if (player.y < this.hBarUp || (player.y + player.height) > height - this.hBarDown) {
            if (player.x + player.width> this.xBarDown && player.x < (this.xBarDown + BAR_WIDTH)) {
                return true;
            }
        }
        return false;
    }

    this.isScore = function(player) {
        if (player.x === this.xBarDown + BAR_WIDTH) {
            return true;
        }
        return false;
    }
}
