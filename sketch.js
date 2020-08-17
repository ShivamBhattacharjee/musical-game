var player;
var gameState;
var obstaclesGroup;
var obstacle;
var intro;
var music;
var gameOver;
var gameOverImg;
var restart;
var restartImg;

function preload(){
intro=loadImage("introduction page.png");
Shivam=loadSound("song.mp3");
gameOverImg=loadImage("game over.png");
restartImg=loadImage("restart.png");


}

function setup() {
  createCanvas(displayWidth-20,displayHeight);
  player = createSprite(displayWidth/2, 650, 20, 20);
  gameState=1;
  obstaclesGroup=new Group();
  restart=createSprite(600,390,20,20);
  restart.visible=false;
  gameOver=createSprite(600,450,20,20);
  gameOver.visible=false;
}

function draw() {
 

  if(gameState===1){
    background(intro);
   player.visible=false;
   gameOver.visible=false;
   restart.visible=false;
    if(keyDown("space")&&gameState===1){
      gameState="PLAY";
    }

  }

  if(gameState==="PLAY"){
    restart.visible=false;
    gameOver.visible=false;
    player.visible=true;

    Shivam.play();

    obstacles();

    background("black");

    if(keyDown(LEFT_ARROW)){
      player.velocityX=-4;
    }

    if(keyDown(RIGHT_ARROW)){
      player.velocityX=4;
    }

if(obstaclesGroup.isTouching(player)){
  gameState="END";
  }   

  }
  
  if(gameState==="END"){
    player.visible=false;
    obstaclesGroup.setVisibleEach(false);
    music.stop();
    gameOver.addImage(gameOverImg);
    gameOver.visible=true;
    restart.addImage(restartImg);
    restart.visible=true;
  
    if(mousePressedOver(restart)) {
      gameState=1;
    }
  }
  
  
  

  drawSprites();
}

function obstacles(){
  if(frameCount%20==0){
   var obstacle=createSprite(displayWidth/2,20,15,15);
    obstacle.x=random(50,1500);
    obstacle.y=random(10,600);
    obstacle.width=random(30,90);
    obstacle.height=random(50,160);
    obstacle.velocityY=4;
    obstacle.shapeColor=(rgb(random(0,255),random(0,255),random(0,255)));
    obstaclesGroup.add(obstacle);
    obstacle.lifetime=100;
  }
}