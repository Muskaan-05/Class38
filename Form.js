class Form{
    constructor(){

    }
    display(){
        var title=createElement("h3");
        title.html("Car Racing Game");
        title.position(130,100);

        var input=createInput("Enter your name");
        input.position(130,150);

        var button=createButton("PLAY");
        button.position(130,250);

        button.mousePressed(click);
        function click(){
            input.hide();
            button.hide();
            var name=input.value();
            count=count+1;

           
           player.updateName(name);

          player.updateCount(count);
           
            var greeting=createElement("h4");
            greeting.html("Hello "+ name);
            greeting.position(130,200);

        }
    }
   
}