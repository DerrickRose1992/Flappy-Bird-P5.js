var gravity = 0.8;
var velocity = 0;
var lift = -20;
var playerColor = '#9b59b6'

var PlayerModel = function () {
  
    this.x = 120;
    this.y = height / 2;
    this.height = 30;
    this.width = 30;

    this.draw = function () {
        fill(playerColor);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    this.moveUp = function () {
        velocity += lift;
    }

    this.update = function () {
        if (this.y < 650) {
            velocity += gravity;
            velocity *= 0.9;
            this.y += velocity;
        }
    }

    this.isTopOrBottomHit = function () {
        if (this.y === 0 || this.y === height) {
            return true;
        }
        else {
            return false;
        }
    }
}
