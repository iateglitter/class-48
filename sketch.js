var backgroundImage;
var balloon;
var GROUND;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

createCanvas(800,600);
 backgroundImage = createSprite(400,300,400,400)
backgroundImage.addImage(bgImg);
 balloon = createSprite(400,300,20,20);
balloon.addAnimation("ballonAnimation", balloonImg);
balloon.scale = 0.5;
//balloon.velocityX = 1;
GROUND = createSprite(400,590,800,50);





//creating top and bottom grounds



      
//creating balloon     




}

function draw() {

  background("black");
  drawSprites();
  if(keyDown("space")){
    balloon.velocityY = -6;
  }
  balloon.velocityY = balloon.velocityY+0.5;
  balloon.collide(GROUND);
  spawnObstacles();
  
          //making the hot air balloon jump
       
}

function spawnObstacles() {
if(frameCount%100 === 0)  {
obstacle = createSprite(750,300,100,100);
obstacle.velocityX = -5;
}
}