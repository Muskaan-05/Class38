class Form{
    constructor(){
        this.input=createInput("Enter your name");
        this.button=createButton("PLAY");
        this.greeting=createElement("h4");
    }
    display(){
        var title=createElement("h3");
        title.html("Car Racing Game");
        title.position(130,100);

        
        this.input.position(130,150);

        
        this.button.position(130,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            count=count+1;
            player.index=count;
           
           player.update();

          player.updateCount(count);
           
            
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(130,200);
        })

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
   
}