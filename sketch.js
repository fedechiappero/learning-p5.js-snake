var s;
var scl = 40;

var playing = false;
var dead = false;

var food;//it must be an object

function setup() {
  createCanvas(600, 600);//frame
  frameRate(10);
  s = new Snake();
  
}

function draw() {
  background(51);
  
  s.show();
  
  if (playing){
    if (s.eat(food)){
      pickLocation();
    }
    s.death();
    s.update();
    fill(255, 0, 100);
    ellipse(food.x, food.y, scl, scl);
  } else if (dead){
    textSize(32);
    fill(255, 0, 0);
    text("YOU LOSE :( press enter to play again", 10, 30);
  } else{
    textSize(32);
    fill(255);
    text("Welcome, press enter to start", 10, 30);
  }
}

function initialize(){
  s = new Snake();
  pickLocation();
}

function keyPressed(){
  if (keyCode === UP_ARROW && !s.checkDir(0, 1)){
    s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW && !s.checkDir(0, -1)){
    s.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW && !s.checkDir(-1, 0)){
    s.dir(1, 0);
  }else if (keyCode === LEFT_ARROW && !s.checkDir(1, 0)){
    s.dir(-1, 0);
  }else if (keyCode === ENTER){
    playing = true;
    initialize();
  }
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  //because the circle is drawn from his center
  food.x+= scl / 2;
  food.y+= scl / 2;
}