class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }

    getCount(){
    var locInDb=database.ref("playerCount");
    locInDb.on("value",readCount);
    function readCount(value){
        
        count=value.val();

    }
    }
    updateCount(count){
    database.ref("/").update({
    playerCount:count
    })
    }
  
   
update(){
    var playerNum="Players/Player"+ this.index;
    database.ref(playerNum).set({
        Name:this.name, Distance: this.distance
    })
    
}

static getPlayerInfo(){
    var location=database.ref("Players")
    location.on("value", (data)=> {
        allPlayers=data.val();
    })
}

}