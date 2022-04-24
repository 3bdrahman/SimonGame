// alert("working good sir")
let gamePattern=[];
let userPattern=[];
let level =0;
let inGame=false;
const colors=["red", "blue", "green", "yellow"];


$(".play_button").click(function(){
    if(!inGame){
        getSequence();
        updateH1();
        inGame=true;
        console.log(gamePattern);
    }else{
        level=0;
        updateH1();
        playSound("wrong");
        gamePattern=[];
        $("body").toggleClass("game-over");
        setTimeout(function(){
            $("body").toggleClass("game-over");
        }, 100);
        inGame=false;
}
})

function getSequence(){
   
    userPattern = [];
    level++;
    updateH1();
    let rando = Math.floor(Math.random()* 4);
    let randoColor=colors[rando];
    gamePattern.push(randoColor);
    $("#"+ randoColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randoColor);
}

$(".btn").click(function() {
    var userChosenColor=$(this).attr('id');
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    pressAnimation(userChosenColor);
    checkAnswer(userPattern.length);
});
// $("#"+ gamePattern[0]).toggle(10)
// $("#"+ gamePattern[0]).toggle(10)
// flash animation

function playSound(targert){
    var audio = new Audio("sounds/"+ targert +".mp3");
    audio.play();
}

function pressAnimation(target){
    $("#"+target).toggleClass("pressed");
    setTimeout(function(){
        $("#"+target).toggleClass("pressed")},50);
}
function updateH1(){
     if(level===0){
        $("h1").text("Game Over !! Press play to restart");
     }else{
        $("h1").text("Level  " + level.toString());
     }
    
}

function  checkAnswer(startLevel){
    
    if (gamePattern[startLevel-1] === userPattern[startLevel-1]){
        if(userPattern.length === gamePattern.length){
            getSequence();
            userPattern=[];
            console.log("success");
            
        }
    }
    else{
        level=0;
        updateH1();
        playSound("wrong");
        gamePattern=[];
        $("body").toggleClass("game-over");
        setTimeout(function(){
            $("body").toggleClass("game-over");
        }, 100);
    }
    
}
