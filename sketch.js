
var database;

var form,game,player;
var count=0,state=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
  game.getState();
  game.start();
  //form.display();

  

  
}

function draw(){
  background("white");
  
   
}


