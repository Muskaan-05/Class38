class Game{
    constructor(){

    }

    getState(){
    var stateinDb=database.ref("gameState");
    stateinDb.on("value",readState);
    function readState(value){
        
        state=value.val();
    }
    
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })

    }

    start(){
        if(state===0){
            
            player=new Player();
           player.getCount();
            form=new Form();
            form.display();
        }

        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);

        cars=[car1, car2, car3, car4];


    }

   async play(){
        form.hide();
        textSize(5);
        text ("Game Start", 130,50);
        var j=100;
        if(keyDown("UP")){
            player.distance=player.distance+50;
            player.update();
        }
        
        for(var i=1;i<=4;i=i+1){
            var playerNo="Player"+ i;
            cars[i-1].x=j;
            cars[i-1].y=displayHeight-allPlayers[playerNo].Distance;
            j=j+200;


        }


        drawSprites();

        
    }
}