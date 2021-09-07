var bg,bgImg;
var bottomground,topground;
var balloon,balloonImg;

function preload(){
bgImg = loadImage("assets/bg.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

}

function setup(){
//creating a sprite for background
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3;

//creating a sprite for bottom ground 
bottomground = createSprite(200,390,800,20);
bottomground.visible = false;

//creating a sprite for top ground 
topground = createSprite(200,10,800,20);
topground.visible = false;

//creating a sprite for balloon
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloonImg",balloonImg);
balloon.scale = 0.2;
}

function draw() {
 //when space key is pressed the ballon should move upwards
  if(keyDown("space")){
    balloon.velocityY = -6;
  }
  //adding the gravity
  balloon.velocityY+=2;

   drawSprites();     
}