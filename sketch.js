var movingRect
var fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "pink"
  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor = "red"
  movingRect.velocityX = -4
  fixedRect.velocityX = 4
}

function draw() {
  background(255,255,255);
  bounce(fixedRect,movingRect)
  


  drawSprites();
}
