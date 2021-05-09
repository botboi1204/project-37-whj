class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();



    //write code to change the background color here
  
     background("cyan");  

    //write code to show a heading for showing the result of Quiz
      fill("black");
    textSize(20);
    text("quiz result! *intense music plays*",350,30);
    

    //call getContestantInfo( ) here
            
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfo is not undefined

    if(allContestants!== undefined){
      var display_position = 230;
      fill("black");
      textSize(20);
      text("*NOTE: contestant who answered correct is highlighted in green colour",150,230);

      for(var plr in allContestants){
        var correctAnswer = "2";
        if(correctAnswer === allContestants[plr].answer){
           fill("green");
        }
          else{
            fill("red");
          }
         
          display_position = display_position + 30;
          textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_position);
      }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
