var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var score = 0;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cactiImage0 = loadImage("obstacle1.png")
  cactiImage1 = loadImage("obstacle2.png")
  cactiImage2 = loadImage("obstacle3.png")
  cactiImage3 = loadImage("obstacle4.png")
  cactiImage4 = loadImage("obstacle5.png")
  cactiImage5 = loadImage("obstacle6.png")
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("Score: "+score,500,20);
  score = score +Math.round(frameCount / 60);
  
  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -12.5;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnCacti();
  drawSprites();
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 205
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnCacti () {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    obstacle.scale = 0.5;
    obstacle.lifetime = 155;

    var zuko = Math.round(random (1,6));
    switch (zuko) {
      case 1 : obstacle.addImage(cactiImage0);
      break;
      case 2 : obstacle.addImage(cactiImage1);
      break;
      case 3 : obstacle.addImage(cactiImage2);
      break;
      case 4 : obstacle.addImage(cactiImage3);
      break;
      case 5 : obstacle.addImage(cactiImage4);
      break;
      case 6 : obstacle.addImage(cactiImage5);
      break;
      default : break;
    }
  }
}

