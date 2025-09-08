
// Step 1: Get the start button from the page
let start = document.querySelector("button");

// Step 2: Get the heading where we show the level
let heading = document.querySelector(".main-heading");

// Step 3: Make a list of colors for the game
let colors = ["green", "yellow", "red", "blue"];

// Step 4: Make some variables to keep track of the game
let started = false; 
let level = 0; 
let userSequence = []; 
let gameSequence = []; 

// Step 5: When start button is clicked, start the game if not already started
start.addEventListener("click", function () {
  if (started == false) { 
    console.log("game started");
    started = true; 
    levelUp();
  }
});

// Step 6: This function goes to the next level
function levelUp() {
  userSequence = []; 
  level++; 
  heading.innerText = `Level ${level}`; 

  let randIdx = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSequence.push(randColor);
  gameFlash(randBtn);
}

// Step 7: This function makes a button flash (for game sequence)
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}


// Step 8: This function makes a button flash (for user click)
function userFlash(btn) {
  btn.classList.add("userFlash"); 
  setTimeout(function () {
    btn.classList.remove("userFlash"); 
  }, 1000);
}

// Step 9: Get all color buttons from the page
let allBtns = document.querySelectorAll(".btn");

// Step 10: Add a click event to each color button
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// Step 11: This function runs when user clicks a color button
function btnPress() {
  let btn = this; // this is element who trigger the event 
  userFlash(btn); 
  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSequence.push(userColor);
  console.log("userColor", userSequence);
  checkAns(userSequence.length - 1);
}

// Step 12: This function checks if user's answer is correct
function checkAns(idx) {
  console.log("current level", level);

  // If user's color matches the game's color at this position
  if (userSequence[idx] === gameSequence[idx]) {
    console.log("same value");

    // If user finished the whole sequence for this level
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 1000); 
    }
  } else {
 
    heading.innerHTML = `Game over ! Your score was <b> ${level}</b>  Press Start to satrt the game`;
    document.querySelector("body").style.backgroundColor = "red"; // Show red background

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#222"; // Change back to normal background
    }, 150);

    reset(); 
  }
}

// Step 13: This function resets all values to start a new game
function reset() {
  started = false; 
  gameSequence = []; 
  userSequence = []; 
  level = 0; 
}














// let start = document.querySelector("button");
// let heading = document.querySelector(".main-heading");
// let colors = ["green", "yellow", "red", "blue"];


// let started = false;
// let level = 0;
// let userSequence = [];
// let gameSequence = [];



// start.addEventListener("click", function () {
//   if (started == false) {
//     console.log("game started");
//     started = true;
//     levelUp();
//   }
// });




// function levelUp() {
//   userSequence = [];
//   level++;
//   heading.innerText = `Level ${level}`;
//   let randIdx = Math.floor(Math.random() * colors.length);
//   let randColor = colors[randIdx];
//   let randBtn = document.querySelector(`.${randColor}`);
//   gameSequence.push(randColor);
//   gameFlash(randBtn);

// }

// function gameFlash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 1000);
// }

// function userFlash(btn) {
//   btn.classList.add("userFlash");
//   setTimeout(function () {
//     btn.classList.remove("userFlash");
//   }, 1000);
// }



// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//   btn.addEventListener("click", btnPress);
// }


// function btnPress() {
//   let btn = this;
//   userFlash(btn);

// userColor = btn.getAttribute("id");
// console.log(userColor);
// userSequence.push(userColor);
// console.log( "userColor",userSequence);

// checkAns(userSequence.length-1);

// }


// function checkAns( idx ){
//     console.log("current level", level);
//     if(userSequence[idx] === gameSequence[idx]){
//         console.log("same value");
//           if(userSequence.length == gameSequence.length){
//                setTimeout(levelUp , 1000);
//           }
//     } else {
//         heading.innerHTML = `Game over ! Your score was <b> ${level}</b>  Press Start to satrt the game`;
//         document.querySelector("body").style.backgroundColor ="red";
//         setTimeout(function(){
//          document.querySelector("body").style.backgroundColor ="#222";
//         } , 150);
//          reset();
//     }
// }




// function reset(){
//     started = false;
//     gameSequence = [];
//     userSequence = [];
//     level = 0;
// }

