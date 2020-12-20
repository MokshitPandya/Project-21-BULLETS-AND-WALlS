var bullet1, wall1;
var speed1, weight1;
var wall1;
var thickness1;
var line
var bullet2, wall3;
var speed2, weight2;
var wall2;
var thickness2;

function setup() {
  createCanvas(1400,600);

  line = createSprite(600,300,1600,20);
  line.shapeColor = "white";

speed1 = random(223,321);
weight1 = random(30,52);
thickness1 = random(22,83);

bullet1 = createSprite(50,150,50,6);
bullet1.shapeColor = "white";
bullet1.velocityX = speed1;

wall1 = createSprite(1200,150,thickness1,200)
wall1.shapeColor = color(80,80,80);

speed2 = random(223,321);
weight2 = random(30,52);
thickness2 = random(22,83);

bullet2 = createSprite(50,450,50,6);
bullet2.shapeColor = "white";
bullet2.velocityX = speed2;

wall2 = createSprite(1200,450,thickness2,200)
wall2.shapeColor = color(80,80,80);

}


function draw() {
  background("black");  
  
  isTouching1();
  isTouching2();
  
  drawSprites();
}

function isTouching1(){
if(wall1.x - bullet1.x < (bullet1.width + wall1.width)/2){
  bullet1.velocityX = 0;
var damage1 = 0.5 * weight1 * speed1 * speed1 / thickness1 * thickness1 * thickness1;


if(damage1 < 5){
  wall1.shapeColor = color(0,255,0);
}

if(damage1 < 10 && damage > 5){
  wall1.shapeColor = color(0,0,255);
}

if(damage1 > 10){
  wall1.shapeColor = color(255,0,0);
}

}

}

function isTouching2(){
  if(wall2.x - bullet2.x < (bullet2.width + wall2.width)/2){
    bullet2.velocityX = 0;
    var damage2 = 0.5 * weight2 * speed2 * speed2 / thickness2 * thickness2 * thickness2;

  if(damage2 < 5){
    wall2.shapeColor = color(0,255,0);
  }
  
  if(damage2 < 10 && damage2 > 5){
    wall2.shapeColor = color(0,0,255);
  }
  
  if(damage2 > 10){
    wall2.shapeColor = color(255,0,0);
  
  }
  
  }

}
