class Quiz{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                contestent = new Contestent();
                var contestentCountRef = await database.ref('contestentCount').once("value");
                if (contestentCountRef.exists()) {
                    contestentCount = contestentCountRef.val();
                    contestent.getCount();
                }
              question = new Question();
                question.display();
            }
   

        }
    
    play(){
        
                question.hide();


                Contestent.getContestentInfo();
            
                if(allContestent !== undefined){
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                        text(allPlayers[plr].name,x-25,y+25);
                         
                     }
                 
                 }
                  }


    }

    end(){
       console.log("Game Ended");
    }
}

    
