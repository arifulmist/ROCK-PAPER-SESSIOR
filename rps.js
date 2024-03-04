let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const us=document.querySelector("#user-score");
const cs=document.querySelector("#comp-score");

const gcompchoice =()=>{
  const option=["rock","paper","sessiors"];
   const randid=Math.floor(Math.random()*3)
   return option[randid];
};
const draw=()=>{
 console.log("draw the game");
 msg.innerText="Game DRAW";
 msg.style.backgroundColor="#081b31";
};
const winner=(userwin)=>{
 if(userwin)
 {
  userscore++;
  us.innerText=userscore;
msg.innerText="you win";
msg.style.backgroundColor="green";
 }
 else{
  compscore++;
  cs.innerText=compscore;
msg.innerText="you loss";
msg.style.backgroundColor="red";

 }
};
const playgame =(userchoice)=>{
 console.log("user choice=",userchoice);
 const compchoice=gcompchoice();
 console.log("computer choice=",compchoice);
 if(userchoice ===compchoice)
 {
    draw();
 }
 else
 {
  let userwin=true;
  if(userchoice==="rock")
  {
   userwin= compchoice==="paper"? false:true;
  }
  else if(userchoice==="paper")
  {
   userwin= compchoice==="sessiors"? false:true;
  }
  else if(userchoice==="sessiors")
  {
   userwin= compchoice==="rock"? false:true;
  }

  winner(userwin);
 }
};
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
  });
});