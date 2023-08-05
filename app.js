let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","blue"];
let highScore = 0;
let buttons = document.querySelectorAll(".button");
let level = 0;
let start =false;
let h2 = document.querySelector("h2");
let highScor = document.querySelector("#highScore");
document.addEventListener("keydown",function(){
    if(start==false){
        start = true;
        console.log("Game starts");
        levelUp();
    }
    
})

function gameFlash(butn){
    butn.classList.add("gameFlash");
    setTimeout(function(){
        butn.classList.remove("gameFlash");
    },250);
}

function userFlash(butn){
    butn.classList.add("userFlash");
    setTimeout(function(){
        butn.classList.remove("userFlash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    if(level>highScore){
        highScore++;
        highScor.innerHTML = `HighScore :- ${highScore}`;
    }
    
    console.log(level);
    h2.innerText = `Level ${level}`;
    let randomColorIdx = Math.floor(Math.random()*3) ;
    let randomColor = btns[randomColorIdx];
    let butn = document.querySelector(`.${randomColor}`);
 
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(butn);
    
}

function userPress(){
    userFlash(this);
    let butnColor = this.getAttribute("id");
    userSeq.push(butnColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
    
}

for(btn of buttons){
    btn.addEventListener("click",userPress);
}

function checkAns (index) {
    
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else {
        h2.innerHTML = `Game Over <br> Your score was ${level} <br> Press any key to start`;
        reset();
    }
}

function reset(){
    userSeq = [];
    gameSeq = [];
    start = false ;
    level = 0;
}