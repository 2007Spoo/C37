class Game {
    constructor()
    {
        
    }
    
    getState(){
      var gameStateRef  = database.ref('gamestate');
      //listener
      gameStateRef.on("value",function(data){
         gamestate = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
  
    async start(){
      if(gamestate === 0){
        player = new Player();
        var playerCountRef = await database.ref('playercount').once("value");

        if(playerCountRef.exists()){
          playercount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      }

      play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100)
        // Get all player data and display on the form 
        Player.getPlayerInfo();
    
        if(allPlayers !== undefined){
          var display_position = 130;

          // the current player should be highlighted in red 
          for(var plr in allPlayers){
            if (plr === "player" + player.index)
              fill("red")
            else
              fill("black");
    
              //Display Player Name and Distance in the Form 
            display_position+=20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
        }

        // Increment distance on pressing Up arrow key

        if (keyIsDown(UP_ARROW) && player.index !== null)
        {
          player.distance = player.distance + 50;
          player.update();
        }

    }
  }