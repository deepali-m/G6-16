//boilerplate
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;

var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
//
function preload(){
  ///boilerplate
  //Animation:TA1:seperate game C16

  
  groundImage = loadImage("ground.png");//boilerplate
  
  cloudImage = loadImage("cloud.png");//boilerplate
  //boilerplate
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  //boilerplate
  restartImg = loadImage("restart.png")//project?
  gameOverImg = loadImage("gameOver.png")
  //boilerplate
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  //
}

function setup() {
  createCanvas(600, 200);
  //trex: SA1 : animation :C16

 
  //ground:boilerplate
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;//infinite ground:boilerplate
  //game over:SA-C17
 
  //restart:project?
  
  //to set a boundary:
  /*
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  */
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();//
  cloudsGroup = createGroup();//boilerplate
  //trex skin:boundary
  //trex.setCollider("circle",0,0,40);
  //trex.debug = true //debugger
  //score
}

function draw() {
  //setting the background
  background(255);
  //displaying score
  text("Score: "+ score, 500,50);
    gameOver.visible = false;//boilerplate
    restart.visible = false;//boilerplate
    
    //boilerplate
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    //:SA2:C16
    
    //add gravity:SA2:C16
  
  
    //spawn the clouds
    spawnClouds();//boilerplate
  
    //spawn obstacles on the ground
    
    //boilerplate
    if(obstaclesGroup.isTouching(trex)){
        dieSound.play();
        gameState = END;
    }
  
  trex.collide(ground);//boilerplate
  
  drawSprites();
}
function restart1(){////boilerplate?project
  gameOver.visible=false;
  restart.visible=false;
  
  gameState=PLAY;
  
  trex.changeAnimation("running", trex_running);//boilerplate
  trex.scale=0.5;
  
  cloudsGroup.destroyEach();//boilerplate
  obstaclesGroup.destroyEach();//boilerplate
  Score=0;
}

//SA
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(800,165,10,40);//boilerplate
   obstacle.velocityX = -6;
   obstacle.addImage(obstacle1);//boilerplate
    //generate random obstacles
   
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;//boilerplate
    obstacle.lifetime = 300;//boilerplate
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);//boilerplate
 }
}
//boilerplate
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 == 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //assign lifetime to the variable
    cloud.lifetime = 300;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adding cloud to the group
    cloudsGroup.add(cloud);
  }
}

