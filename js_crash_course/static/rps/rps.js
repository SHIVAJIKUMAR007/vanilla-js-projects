let elements = new Array("rock", "paper", "scissor");
let elementspic = new Array('../static/rps/rock.jpg','../static/rps/paper.jpg','../static/rps/scissor.jpg');
let resultmassage = new Array('you lose !','game tide.','you won !');
let resultColor = new Array('red','yellow','green');

var chooseIndex , computerIndex ;


function rpsfrontend(human , bot , massage ,masColor){
  
  var div = document.getElementById('flex-box-div');
  var mainDiv = document.getElementById('main-div')

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var human_div  = document.createElement('div');
    var massage_div = document.createElement('div');
    var bot_div = document.createElement('div');
    var playAgainDiv = document.createElement('div');


    // style="color:'+masColor+';

    human_div.innerHTML = '<img src="'+elementspic[human]+'" id="human-inResult" >';
    massage_div.innerHTML = '<h1 style="color:'+masColor+'; " id="massage-inResult">'+ massage +' </h1>' 
    bot_div.innerHTML = '<img  src="'+elementspic[bot]+'" id="bot-inResult" >';
    playAgainDiv.innerHTML = '<center> <button class="btn btn-success" onclick="playgameAgain()"> Play Again </button></center>';
    playAgainDiv.style = "margin-top: 50px;"
  //  console.log(image_bot.id,image_human.id);
    // var div = document.getElementById('flex-box-div');
    // div.style = " padding-top: 50px; padding-bottom: 50px; background-color:"+ masColor ;
    div.append(human_div);
    div.append(massage_div);
    div.append(bot_div);
    mainDiv.append(playAgainDiv);

  
}


function findWinner(choosed,computer ){
   
   if (choosed == 0) {
       if(computer == 0){
         rpsfrontend(0,0,resultmassage[1],resultColor[1]);
       }
       else if(computer == 1){
        rpsfrontend(0,1,resultmassage[0],resultColor[0]);
       }
       else{
        rpsfrontend(0,2,resultmassage[2],resultColor[2]);
       }
   }
   else if (choosed == 1) {
    if(computer == 0){
      rpsfrontend(1,0,resultmassage[2],resultColor[2]);
    }
    else if(computer ==1){
      rpsfrontend(1,1,resultmassage[1],resultColor[1]);
    }
    else{
      rpsfrontend(1,2,resultmassage[0],resultColor[0]);
    }
  }
  else if (choosed == 2) {
    if(computer == 0){
      rpsfrontend(2,0,resultmassage[0],resultColor[0]);
    }
    else if(computer ==1){
      rpsfrontend(2,1,resultmassage[2],resultColor[2]);

    }
    else{
      rpsfrontend(2,2,resultmassage[1],resultColor[1]);

    }
  }
   
}


function process(choise){
  ischoosed = true;
  console.log(choise.id);

  for(let i=0 ; i<3 ; i++){
      if(choise.id == elements[i]){
          chooseIndex = i;
      }
   }
   // generates a randome index 0 or 2 which the bot choosed
    computerIndex = Math.floor(Math.random() * 2);  
   
   findWinner(chooseIndex,computerIndex);
}

function playgameAgain(){
   location.reload();

}