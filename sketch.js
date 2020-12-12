var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(200, 200, 20, 20);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  if (keyDown(space)){
    car.velocityX = 30;
  }
  if (car.X > 700){
    car.velocityX = 0;
  }
  if (0.5*weight*speed*speed/22500 > 180){
    car.shapeColor(255,0,0);
  }
  if (0.5*weight*speed*speed/22500 < 180 && 0.5*weight*speed*speed/22500 > 100) {
    car.shapeColor(230,230,0)
  }
  if (0.5*weight*speed*speed/22500 < 100){
    car.shapeColor = (0,255,0);
  }
  
  drawSprites();
}


