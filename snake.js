function Snake(){
  this.x = 0;
  this.y = 40;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.checkDir = function(x, y){
    return (x === this.xspeed && y === this.yspeed);
  }

  this.death = function(){
    for(var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1){//you loos
        this.xspeed = 0;
        this.yspeed = 0;
        playing = false;
        dead = true;
      }
    }
  }

  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos){//if dist<1 then eat
    var d = dist(this.x + scl / 2, this.y + scl / 2, pos.x, pos.y)
    if (d < 1){
      this.total++;//increase the tail
      return true;
    }else{
      return false;
    }
  }

  this.show = function (){
    fill(255);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  this.update = function(){
    for(var i = 0; i < this.tail.length - 1; i++){
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1){
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
  
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    //constrain the snake inside the frame
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }
}