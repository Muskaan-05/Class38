class Form{
    constructor(){
        this.input=createInput("Enter your name");
        this.button=createButton("PLAY");
        this.greeting=createElement("h4");
    }
    display(){
        var title=createElement("h3");
        title.html("Car Racing Game");
        title.position(displayWidth/4+5, displayHeight/5);

        
        this.input.position(displayWidth/4+5,displayHeight/4+25);

        
        this.button.position(displayWidth/4+5,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            count=count+1;
            player.index=count;
           
           player.update();

          player.updateCount(count);
           
            
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/4+5,displayHeight/2-25);
        })

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
   
}