var PLAY = 1;
var END = 0;
var gameState = PLAY;

var runnerboy,runnerboyImg
var gameOver,gameOverImg
var birds,birdsImg
var cone,coneImg
var wood,woodImg
var ground,groundImg
var background,backgroundImg
var coin,coinImg


var score=0;

var gameOver, restart;


function preload(){
  runnerboyImg =   loadAnimation("runnerboy.gif");
  birdsImg = loadAnimation("birds.gif");
  coneImg = loadImage("cone.png");
  woodImg = loadImage("wood.png");
  groundImg = loadImage("background-min.jpg")
  gameOverImg = loadImage("gameover11.png");
  coinImg = loadImage("coin.png");
  backgroundImg = loadImage("backgroundimg.jpg")
  
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(backgroundImg)


  runnerboy = createSprite(60,500,20,50);
  runnerboy.addAnimation("running", runnerboyImg);
  runnerboy.scale = 0.25
  
  ground = createSprite(550,550,400,20);
  ground.addImage(groundImg);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  ground.scale = 0.25

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
 cone = createSprite(400,200,12,12)
 cone.addImage(coneImg)
 cone.scale = 0.10

 coin = createSprite(390,200,12,12)
 coin.addImage(coinImg)
 coin.scale = 0.10
 
 wood = createSprite(600,200,12,12)
 wood.addImage(woodImg)
 wood.scale = 0.10


 gameOver.scale = 0.05;
 gameOver.visible = true;
 ground.visible = true;
   
  coinGroup = new Group();
  coneGroup = new Group();
  
  score = 0;

}

function draw() {
  runnerboy.debug = true;
  drawSprites()
  
}