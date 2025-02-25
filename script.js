let userscore = 0;
let computerscore = 0;
 const choices = document.querySelectorAll(".choice");
 let msg = document.querySelector("#msg");
 let userScorepara = document.querySelector("#user-score");
 let compScorepara = document.querySelector("#computer-score");
 let userScore = 0;
 let  compScore = 0;  // for js to access the div we made other column for updation of value
 let themeChange = document.querySelector("#theme-change");
 let body = document.querySelector("body");
 let score = document.querySelector(".me");
 let score1 = document.querySelector(".my");


 const gencomputerChoice=()   =>{               
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() *3)            // imports any random no . which
    //is between 0 and 1 but for we have to get the choice from 1,2,3 then we multiply it by 3 
    // and floor give  us the integer value only
    return options [randidx];

 }
 const drawGame=()=>{
    console.log("The game is drawn");
    msg.innerText = ("Match drawn !! Play again");
      // innerText is the value giving functuion always put = there.
       msg.style.backgroundColor = "violet";
 }
 const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){  // by default the value of userWin is true then only the if consition works
        console.log("You win the game ");
        userScore ++;
        userScorepara.innerText = userScore; 
        msg.innerText = (`You win !! as ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor = "green";

    }else{
        console.log("You loose the game ");
        compScore ++;
        compScorepara.innerText = compScore;

        msg.innerText = (`You loose !! as ${compChoice} beats ${userChoice} `);
        //alert("please try more to win !!");
        msg.style.backgroundColor = "red";
    }
 }

const playGame = (userChoice) =>{  // as after user gets his choice then only the game starts //
    console.log("UserChoice will be = ",userChoice);
    // now computer generated code
    const compChoice = gencomputerChoice();
    console.log("compchoice is",compChoice);
    if(userChoice===compChoice){
        //draw game conditon
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //compChoice can only be scissor and paper
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice ==="paper"){
            //compChoice has only be scissor and rock
            userWin = compChoice ==="Scissor"  ?false : true;
                }
                else{
                    //compChoice can only have rock and paper
                    userWin = compChoice ==="rock" ? false: true;
                }
                showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)  =>{
    //console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
       // console.log("button was clicked",userChoice);
        playGame(userChoice);                         // function call par bhi attribute daalta hai 
    })
});
themeChange.addEventListener("click",()=>{
    body.style.backgroundColor = "black";
    userScorepara.style.color = "green";
    compScorepara.style.color= "green";
    score.style.color= "green";
    score1.style.color= "green";


});
