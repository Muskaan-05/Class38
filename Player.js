class Player{
    constructor(){

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
  
   
updateName(name){
    var playerNum="Player"+count;
    database.ref(playerNum).set({
        Name:name
    })
}
}