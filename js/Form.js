class Form
{
    constructor()
    {
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }

    display()
    {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(450,0);


        this.input.position(400,160);
        this.button.position(450,200);

        
         this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();
                
                player.name = this.input.value();
                playercount= playercount + 1;;
                player.index = playercount;

                player.update();
                player.updateCount(playercount);

                this.greeting.html("Hello " + player.name)
                this.greeting.position(450, 100);

        }
        );

    }
}