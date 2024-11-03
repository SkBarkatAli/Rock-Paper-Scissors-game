let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const option =["rock","paper","scissors"];
    const randInx= Math.floor(Math.random()*3);
    return option[randInx];
}
const drawGame = ()=>{
    console.log("game was draw")
    msg.innerText="game was draw"
    msg.style.backgroundColor = "#081b31";
}
const showwinner = (userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you are win! ");
        msg.innerText=`you win your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose ")
        msg.innerText=`you lose ${compChoice} beasts your ${userchoice}`
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice)=>{
    console.log("user choise =",userchoice);
    //Genaret Computer Choise
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    if(userchoice===compChoice){
       drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
            userwin=compChoice==="paper"?false:true;
        }else if (userchoice==="paper"){
            //rock,scissor
            userwin=compChoice==="scissor"?false:true;
        }else{
            //rock,paper
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compChoice);
    }
 
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame (userchoice);
    });
});