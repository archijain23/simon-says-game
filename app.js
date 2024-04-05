let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","blue"];

let started=false;
let level=0;
let max =0;

let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
   if(started==false){
    console.log("game started");
    started=true;
   

   levelup();
   }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
    }


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    //choose random button
    let ranidx=Math.floor(Math.random()*3);
    let rancol=btns[ranidx];
    let ranbtn=document.querySelector(`.${rancol}`);
    
    gameseq.push(rancol);
    console.log(gameseq);
    gameflash(ranbtn);
}




function checkans(idx){
   // console.log("curr level:",level);
   
   if(userseq[idx]===gameseq[idx]){
      if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
      }
   }else{
    if(max<level){
        max=level;
    }
    h2.innerHTML=`Game over ! your score was <b>${level}</b> <br> Press any key to start<br>
    your highest score is ${max}`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="";   
    },150)
    reset();
   }
}


function btnPress(){
  
    let btn=this;
    gameflash(btn);

    usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   
   checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(butn of allbtns){
    butn.addEventListener("click",btnPress);
}


function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    level=0;
}