class Game {
  constructor() {}
//collect the gameState value from the database
  getState(){
    database.ref("gameState").on("value",function(data){
      gameState = data.val()
    })
  }
  //writing the gameState value to the database
  updateState(count){
  database.ref("/").update({
       gameState:count
  })
  }

//start screen
  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1=createSprite(width/2-150,height-100)
    car1.addImage(car1Img)
    car1.scale=0.07
    car2=createSprite(width/2+150,height-100)
    car2.addImage(car2Img)
    car2.scale=0.07
    cars=[car1,car2]
  }
  //!== not equal to
  //play screen
  play(){
  form.hide()
  
  Player.getPlayersInfo()
  if(players!==undefined){
    image(trackImg,0,-height*5,width,height*6)
    var index=0
    for(var i in players){
      index=index+1
      var x=players[i].positionX
      var y=players[i].positionY
      cars[index-1].position.x=x
      cars[index-1].position.y=y
      if(index===player.index){
        camera.position.y=cars[index-1].position.y
      }
    }
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.updateDistance();
    }
    drawSprites()
}
  
}

}
