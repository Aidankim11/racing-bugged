var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var players, playerCount, gameState,car1,car2,car1Img,car2Img,trackImg,cars

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1Img=loadImage("assets/car1.png")
  car2Img=loadImage("assets/car2.png")
  trackImg=loadImage("assets/track.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()
  game = new Game();
  game.start();
  game.getState()

}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }
}

