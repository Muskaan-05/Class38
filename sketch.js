
var database;

var form,game,player;
var count=0,state=0;
var allPlayers;
var car1, car2, car3, car4;
var cars;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
game=new Game();
  game.getState();
  game.start();
  //form.display();

  

  
}

function draw(){
  background("white");
  if(count===4){
    game.updateState(1);
  }
   if(state===1){
     game.play();
   }
}


