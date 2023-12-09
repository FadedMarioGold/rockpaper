let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("userscore");
const compscore_span=document.getElementById("compscore");
const score_div=document.querySelector(".score");
const message_p=document.querySelector(".message");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convert(letter){
    if(letter=="r")return"Rock";
    if(letter=="p")return"Paper";
    return "Scissor";
}
function win(userchoice,computerchoice){
    userscore++;
   userscore_span.innerHTML=userscore;
   compscore_span.innerHTML=compscore;
   message_p.innerHTML=convert(userchoice) + " beats "+ convert(computerchoice) + " you win.";
}
function loose(userchoice,computerchoice){
    compscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    message_p.innerHTML=convert(userchoice) + " defeated by  "+ convert(computerchoice) + " you lose.";
    
}

function draw(userchoice,computerchoice){
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    message_p.innerHTML=convert(userchoice) + " Ties with "+ convert(computerchoice) + " its a draw.";
}
function game(userchoice){
    const computerchoice=getcomputerchoice();
    switch(userchoice+computerchoice ){
        case "rs":
        case "pr":
        case "sp":
            console.log("User Wins")
            win(userchoice,computerchoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("Computer Wins")
            loose(userchoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Its A Tie");
            draw(userchoice,computerchoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click',function() 
{
game("r");
}
)

paper_div.addEventListener('click',function() 
{
    game("p");
}
)

scissor_div.addEventListener('click',function() 
{
    game("s");
}
)
}
main();
