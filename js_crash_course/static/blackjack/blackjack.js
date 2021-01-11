let blackjackgame = {
    "you": { "scoreSpanId": "#your-score-span" , "DivId" : "#your-box" , "Score" : 0, "isBursted" : false},
    "enemy": { "scoreSpanId": "#enemy-score-span" , "DivId" : "#enemy-box" , "Score" : 0, "isBursted" : false },
    "win" : 0,
    "loss" : 0,
    "draw" : 0,
    "isResultDeclayer" : false 
};
let hitEnable = true , standEnable = false , dealEnalble = false;
let AtZeroStandEnable = false;

const you = blackjackgame["you"];
const enemy = blackjackgame["enemy"];

//  sounds
const hitsound = new Audio('../static/blackjack/sounds/swish.m4a')
const awwsound = new Audio('../static/blackjack/sounds/aww.mp3')
const winsound = new Audio('../static/blackjack/sounds/cash.mp3')


function hit(){
    AtZeroStandEnable = true;
    if (hitEnable) {
        let card = createImage(you);
        showScore(card,you);
        hitsound.play()
    }
    
}

function stand(){
    if (AtZeroStandEnable) {
        standEnable = true;
        if (standEnable) {
            hitEnable = false;
            setInterval(()=>{
                    if (blackjackgame["isResultDeclayer"]) {
                        
                    }
                    else{
                        if (standEnable) {
                            let card = createImage(enemy);
                            showScore(card,enemy);
                            hitsound.play();

                            if (enemy["Score"] > 15 || enemy["isBursted"] == true) {
                                cumputeWinner();
                            }
                        }
                    }
            }, 1000);
        }
    
    }
}

function deal(){
    if (dealEnalble) {
        let yourImages = document.querySelector(you["DivId"]).querySelectorAll('img')

        for (let i = 0; i < yourImages.length; i++) {
                yourImages[i].remove()        
        }
        let enemyImages = document.querySelector(enemy["DivId"]).querySelectorAll('img')

        for (let i = 0; i < enemyImages.length; i++) {
                enemyImages[i].remove()        
        }
        you["Score"] = 0;
        let yourScore = document.querySelector(you["scoreSpanId"])
        yourScore.innerHTML = you["Score"]
        you["isBursted"] = false
        enemy["Score"] = 0;
        let enemyScore = document.querySelector(enemy["scoreSpanId"])
        enemyScore.innerHTML = you["Score"]
        enemy["isBursted"] = false

        document.querySelector('#let-play-span').textContent = "Let's play";
        document.querySelector('#let-play-span').style.color = "black";

        hitEnable = true ;
        AtZeroStandEnable = false;
        dealEnalble = false;
        blackjackgame["isResultDeclayer"] = false;
    }else{}
}

const image = new Array('A','2','3','4','5','6','7','8','9','10','J','Q','K')
const imageValue = new Array([1,11],2,3,4,5,6,7,8,9,10,10,10,10)

function selectRandomImage(){
    let index = Math.floor(Math.random() * 13)      // 0 to 12 index 
    return { "cardType" : image[index] ,"src" : "../static/blackjack/images/"+image[index]+".png" , "value" : imageValue[index]};
}

function createImage(activePlayer){
    if (activePlayer["isBursted"]) {
        
    }
    else{
        let cardimage = document.createElement('img')
        let randomImage = selectRandomImage();
        let source = randomImage["src"]
        let value = randomImage["value"]
        cardimage.src = source 
        cardimage.classList = "img-fluid"
        cardimage.style =" height:150px;"
        document.querySelector(activePlayer["DivId"]).appendChild(cardimage)
        return {"cardType" : randomImage["cardType"], "value" : value};
    }
    
}

function showScore(card , activePlayer){

    let scoreToAdd = card["value"];
     if (card["cardType"] ==='A') {
         if(activePlayer["Score"] + card["value"][1] <22)
         scoreToAdd = 11;
         else
         scoreToAdd = 1;
     }
     else
     scoreToAdd = card["value"];

     if (activePlayer["Score"] + scoreToAdd < 22) {
        activePlayer["Score"] += scoreToAdd; 
        document.querySelector(activePlayer["scoreSpanId"]).innerHTML = activePlayer["Score"];
        console.log(activePlayer["Score"])
     }
     else{
        activePlayer["isBursted"] = true;
        document.querySelector(activePlayer["scoreSpanId"]).innerHTML ="<p class='text-danger'> Bust ! your Score is : "+activePlayer["Score"]+" </p>"
    }
}

function cumputeWinner(){
    let winner ;
    if (you["isBursted"] == true) {
        if (enemy["isBursted"] == true) {
            winner = "no one is winner"
            blackjackgame["draw"] ++;
        }
        else{
            winner = enemy
            blackjackgame["loss"] ++;
        } 
    }
    else if (you["isBursted"] == false ) {
        if (enemy["isBursted"] == false) {
            if (you["Score"] > enemy["Score"]) {
                winner = you;
                blackjackgame["win"] ++;
            }
            else if (you["Score"] == enemy["Score"]) {
                winner = "no one is winner"
                blackjackgame["draw"]++;
            }
            else{
                winner = enemy;
                blackjackgame["loss"] ++;
            }
           
        }
        else{
            winner = you;
            blackjackgame["win"] ++;
        }
    }
    blackjackgame["isResultDeclayer"] = true;
    standEnable = false;
    showResult(winner);
    dealEnalble = true;
    return winner;
}

function showResult(winner){
    updateTable();
     if (winner == you) {
         document.querySelector('#let-play-span').textContent = "You wins !!!";
         document.querySelector('#let-play-span').style.color = "green";
         winsound.play();
     }
     else if (winner == enemy) {
        document.querySelector('#let-play-span').textContent = "You loss !!!";
        document.querySelector('#let-play-span').style.color = "red";
        awwsound.play();
     }
     else{
        document.querySelector('#let-play-span').textContent = "Game draws !!!";
         document.querySelector('#let-play-span').style.color = "yellow";
     }
}
function updateTable(){
      document.querySelector('#win').textContent = blackjackgame["win"];
      document.querySelector('#loss').textContent = blackjackgame["loss"];
      document.querySelector('#draw').textContent = blackjackgame["draw"];

}