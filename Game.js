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
    }

    play(){
        form.hide();
        textSize(5);
        text ("Game Start", 130,50);
        if(keyDown("UP")){
            player.distance=player.distance+50;
            player.update();
        }
    }
}