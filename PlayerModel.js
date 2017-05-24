var gravity = 0.6;
var velocity = 0;
var lift =-25;

var PlayerModel = function(){
    this.x = 120;
    this.y = height/2;
    this.draw = function(){
      fill('#2ecc71');
      noStroke();
      rect(this.x,this.y, 30, 30);
    }

    this.moveUp = function(){
      velocity += lift;
    }

    this.update = function(){
      if(this.y < 650){
      velocity += gravity;
      velocity *=0.9;
      this.y += velocity;
      }
    }

    this.isTopOrBottomHit = function(){
      if(this.y === 0 || this.y === height){
        return true;
      }
      else{
        return false;
      }
    }
}
