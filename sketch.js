var s;
var scl = 50;

var food;//it must be an object

function setup() {
  createCanvas(600, 600);//frame
  s = new Snake();
  frameRate(10);
  pickLocation();
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

// function mousePressed() {
//   ellipse(mouseX, mouseY, scl, scl);
// }

function draw() {
  background(51);
  if (s.eat(food)){
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(255, 0, 100);
  ellipse(food.x, food.y, scl, scl);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  }else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
}
