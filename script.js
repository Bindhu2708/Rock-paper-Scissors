
// localStorage.setItem('score', currentScore);

// // Retrieve the score from local storage
// const storedScore = localStorage.getItem('score');

// function retrieveScore() {
//     const storedScore = localStorage.getItem('score');
//     if (storedScore === null) {
//       console.log('Score not found in local storage');
//     } else {
//       console.log(`Score found in local storage: ${storedScore}`);
//       // Do something with the score, such as displaying it on the page
//     }
//   }
  
//   // Call the retrieveScore function when the page loads
//   window.onload = function() {
//     retrieveScore();
//   };

  // Retrieve the element with id "myNumber"
// const myNumberElement = document.getElementById('myNumber');

// // Extract the integer value from the element's text content
// const myNumber = parseInt(myNumberElement.textContent);

// var cs=document.getElementById("cs");
// var ys=document.getElementById("ys");
// var compScore=cs;
// var yourScore=ys;
// cs.innerHTML

// =localStorage.getItem("computer");
function openPopup(){
    popup.classList.add("open-popup");
    
}
// let cpopup=document.getElementById("close");

function closePopup(){
    popup.classList.remove("open-popup");
}

let computer =['fist','Hand','Scissor'];
function generateNumber(min,max){
    let a=max-min+1;
    let b= Math.random()*a;
    let result=Math.floor(b)+min;    
    return result;

}

function scoreUpdate1(){


    
    if(localStorage.score1){
        localStorage.score1=Number(localStorage.score1)+1;
    }
    else{
        localStorage.setItem("score1",0);
    }
}
document.getElementById("cs").innerHTML=localStorage.score1;

function scoreUpdate(){
    if(localStorage.score){
        localStorage.score=Number(localStorage.score)+1;
    }
}
document.getElementById("ys").innerHTML=localStorage.score;

function userScissorCompFist(){
   
    initial.classList.add("remove");
    // prompt("HI");
   
    right6.classList.add("display");
    left6.classList.add("display");
    middle6.classList.add("display");
    scoreUpdate1();
    
}




function userScissorCompHand(){
    initial.classList.add("remove"); 
    next.classList.add("display");
    right2.classList.add("display");
    left2.classList.add("display");
    middle2.classList.add("display");
    scoreUpdate();
    
    
}
function userScissorCompScissor(){
    initial.classList.add("remove");
        right7.classList.add("display");
    left7.classList.add("display");
    middle7.classList.add("display");
    
    
}

function randomGenerator(){
     let ans = generateNumber(0,2);
     let value=computer[ans];
     if(value==="fist"){
        userScissorCompFist();
     }
     if(value==="Hand"){
        userScissorCompHand();
     }
     if(value==="Scissor"){
        userScissorCompScissor();
     }
     }
     function userHandCompFist(){
        next.classList.add("display");
      initial.classList.add("remove");        
        right1.classList.add("display");
       left1.classList.add("display");
       middle1.classList.add("display");
       scoreUpdate();
      
     }
     function userHandCompHand(){
        initial.classList.add("remove");
        right9.classList.add("display");
    left9.classList.add("display");
    middle9.classList.add("display");
    c9++;
    
     }

    function  userHandCompScissor(){
        initial.classList.add("remove");
        right3.classList.add("display");
    left3.classList.add("display");
    middle3.classList.add("display");
    scoreUpdate1();
    
     }

function randomGenerator2(){
    let ans = generateNumber(0,2);
    let value=computer[ans];
    if(value==="fist"){
        userHandCompFist();
     }
     if(value==="Hand"){
        userHandCompHand();
     }
     if(value==="Scissor"){
        userHandCompScissor();
     }
}

function userFistCompFist(){
    initial.classList.add("remove");

    right8.classList.add("display");
    left8.classList.add("display");
    middle8.classList.add("display");
    
    
}
function userFistCompHand(){
    
    initial.classList.add("remove");
    right4.classList.add("display");
    left4.classList.add("display");
    middle4.classList.add("display");
    scoreUpdate1();
    
    
}

function userFistCompScissor(){
    scoreUpdate();
    next.classList.add("display");
    initial.classList.add("remove");
    right3.classList.add("display");
    left3.classList.add("display");
    middle3.classList.add("display");
   

    
}
function randomGenerator1(){
    let ans = generateNumber(0,2);
    let value=computer[ans];
    if(value==="fist"){
        userFistCompFist();
     }
     if(value==="Hand"){
        userFistCompHand();
     }
     if(value==="Scissor"){
        userFistCompScissor();
     }
}

function backToHomePage(){
    window.location.reload();
//     // right3.classList.add("remove");
//     // left3.classList.add("remove");
//     // middle3.classList.add("remove");
//     // right1.classList.add("remove");
//     // left1.classList.add("remove");
//     // middle1.classList.add("remove");
//     // right2.classList.add("remove");
//     // left2.classList.add("remove");
//     // middle2.classList.add("remove");
//     // right4.classList.add("remove");
//     // left4.classList.add("remove");
//     // middle4.classList.add("remove");
//     // right5.classList.add("remove");
//     // left5.classList.add("remove");
//     // middle5.classList.add("remove");
//     // right6.classList.add("remove");
//     // left6.classList.add("remove");
//     // middle6.classList.add("remove");
//     // right7.classList.add("remove");
//     // left7.classList.add("remove");
//     // middle7.classList.add("remove");
//     // // right8.classList.add("remove");
//     // left8.classList.add("remove");
//     // middle8.classList.add("remove");
//     // right9.classList.add("remove");
//     // left9.classList.add("remove");
//     // middle9.classList.add("remove");
//     // initial.classList.add("display");
 
//     right1.classList.remove("display");
//     left1.classList.remove("display");
//     middle1.classList.remove("display");
//     initial.classList.add("display");
//     right2.classList.remove("display");
//     left2.classList.remove("display");
//     middle2.classList.remove("display");
//     initial.classList.add("display");
//     right3.classList.remove("display");
//     left3.classList.remove("display");
//     middle3.classList.remove("display");
//     initial.classList.add("display");
//     right4.classList.remove("display");
//     left4.classList.remove("display");
//     middle4.classList.remove("display");
//     right5.classList.remove("display");
//     left5.classList.remove("display");
//     middle5.classList.remove("display");
//     right6.classList.remove("display");
//     left6.classList.remove("display");
//     middle6.classList.remove("display");
//     right7.classList.remove("display");
//     left7.classList.remove("display");
//     middle7.classList.remove("display");
//     right8.classList.remove("display");
//     left8.classList.remove("display");
//     middle8.classList.remove("display");
//     right9.classList.remove("display");
//     left9.classList.remove("display");
//     middle9.classList.remove("display");
//    initial.classList.add("display");
}

function backToHomePage1(){
    window.location.href = 'index.html';
}


