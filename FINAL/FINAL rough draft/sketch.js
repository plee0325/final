let text0 = "Please type the text below. You're allowed a total of 60 mistakes.";
let text1 = "";
let typed = "";
let mistyped = "";
let rTyped = ""; // for robot
let bla = 0;
let whi = 255;
let w;
let currentPage = 0;
let wrongscore = 0; // total mistypes 
let a = 0;
let b = 0; // both a and b are for round three; random variables that will make it shake.
let c = 0;
let tickeR;
let congrats = "";
// function preload(){
//   click = loadSound('clicked.wav')
// }
function setup(){
  createCanvas(windowWidth, windowHeight);  
  textFont('georgia');
  tickeR = new Ticker();
}

function draw(){
  if(currentPage == 0){
    startPage();
  }

  if(currentPage == 1){
    roundOne(); // normal without any challenges 
  }
  if(currentPage == 2){
    roundTwo(); // competing with robot
  }
  if(currentPage == 3){
    roundThree(); // screen will start to shake 
  }
  if(currentPage == 4){
    roundFour(); 
  }
  if(currentPage == 5){
    roundFive();
  }
  if(currentPage == 6){
    gameWon();
  }
  if(wrongscore >= 60 || c == 1){
    gameOver();
  }
}

function keyTyped(){
  
  if(key == text1[typed.length] && w == 0){ // if the key is correct, it will add to the typed array
    typed += key;
    whi = 255;
// click.play();
  }else{ // if the key is incorrect, it will add to the mistyped array
    typed += key; 
    whi = 100;
    mistyped += key;
    wrongscore += 1;
// click.play();
  }
}

function keyReleased(){
  if (keyCode == BACKSPACE){
    typed = typed.substring(0, typed.length - 1); //when clicking backspace, the typed string will decrease
    whi = 255;
  }
  if (keyCode == BACKSPACE && w >= 1){ //when clicking backspace while there are mistyped letters, the mistyped string will decrease
    mistyped = mistyped.substring(0, mistyped.length - 1);
  }
}

function startPage(){
  
  background(bla);
  if(frameCount % 60 < 30){
    fill(whi);
    rect(width/2, height/2 - 20, 5, 60, 20); // the marker for where the typing takes place will blink when nothing is written
    } 
textSize(30);
textAlign(CENTER);
text("THE TYPING GAME", width/2, height/3);
textSize(25);
text("Click here to play!", width/2, height/3 + 40);
  
  if (mouseIsPressed == true){
    currentPage = currentPage + 1;
  } 
}


function roundOne(){
  
  background(whi);
  fill(bla);
  textSize(20);
textAlign(CENTER);
text(text0, width/2, height/6); // Instructions to type the prompt
  
  text1 = "This is a typing test. You must type without making too many mistakes. Each level will get harder with new challenges. Good luck.";
  
typMechs();
}


function roundTwo(){
  background(whi);
  text1 = "Welcome to round 2! There's a robot that's competing against you. It's not too fast right now so it shouldn't really be a problem.";

typMechs();
  
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 30 == 15){ // during these frames, the robot will add a letter to it's string.
    rTyped += text1[rTyped.length]
  }
  
  
}

function roundThree(){
  
background(whi);
  text1 = "Do you feel that? It seems like there's an earthquake. Luckily, it's not too bad. Hopefully it doesn't get any worse. Imagine if the lights went out.";

  if(frameCount % 6 < 3){
    a = -0.5;
  }else{
    a = 0.5;
  }
  if(frameCount % 8 < 4){
    b = -0.5;
  }else{
    b = 0.5;
  }
  
typMechs(); 
  
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 25 == 12){ // during these frames, the robot will add a letter to it's string.
    rTyped += text1[rTyped.length]
  }
  
  
}

function roundFour(){
  
background(whi);
if(frameCount % 60 < 20){
  background(bla);
}
  text1 = "Oh no! The lights! They're flickering and the earthquake is getting even stronger! Don't stop typing though! Stay strong and you'll be able to overcome anything that comes in your way!";

   if(frameCount % 6 < 3){
    a = -2;
  }else{
    a = 2;
  }
  if(frameCount % 8 < 4){
    b = -2;
  }else{
    b = 2;
  }
  
 typMechs();
  
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 20 == 10){ // The speed is even faster
    rTyped += text1[rTyped.length]
  }
}

function roundFive(){

background(whi);
if(frameCount % 60 < 25){
  background(bla);
}
  text1 = "Yikes! It's looking like one of the strongest earthquakes known to man: A Magnitude 10! That's ten as in 1-0! Holy f$%*!";

   if(frameCount % 6 < 3){
    a = -3;
  }else{
    a = 3;
  }
  if(frameCount % 8 < 4){
    b = -3;
  }else{
    b = 3; 
  }
  
 typMechs();
  
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 10 == 5){ // The speed is even faster
    rTyped += text1[rTyped.length]
  }
}


function gameOver(){

whi = 255;
background(bla);
fill(whi);
textAlign(CENTER);
textSize(25);
  text("Click here try again.", width/2, height/3 + 40);
  if(wrongscore == 60){
    fill(whi);
    textAlign(CENTER);
    textSize(30);
    text("You made too many mistakes.", width/2, height/3);
  }else{
    fill(whi);
    textAlign(CENTER);
    textSize(30);
    text("You were too slow.", width/2, height/3);
  }
  
  
  
  if (mouseIsPressed == true){
    currentPage = 0;
    wrongscore = 0;
     typed = ''; // resets both the typed and mistyped array. 
  mistyped = '';
    rTyped = "";
    c = 0;
  }
  
}

function typMechs(){
  
  rectMode(CENTER);
textSize(30);
noStroke();
fill(208,39,67);
w = textWidth(mistyped);
rect(width/2 - w/2,height/2,w,50);  // highlight the incorrect letters
  
fill(bla);
textSize(12);
textAlign(CENTER);
text(text1, width/2 + a, height/5 + a); // the prompt text
  
textAlign(RIGHT);
textSize(30);
fill(36,194,255);
text(typed, width/2, height/2); // the text that has been typed

// print(w);
  if(frameCount % 60 < 30 && w < 1){
fill(0);
rect(width/2, height/2 - 10, 2.5, 30, 10); // the marker for where the typing takes place will blink when nothing is written
  } 
if(textWidth(typed) > 0){
fill(0);
rect(width/2, height/2 - 10, 2.5, 30, 10); // the marker will stop blinking when something is typed
  
}
  
  if(rTyped == text1){
    c = 1; // if the robot finishes the prompt, it'll be game over.
  }
  
  if(typed == text1){ // if the typed string is the exact same as the text, then it will move to the next page
    currentPage = currentPage + 1;
    typed = ''; // resets both the typed and mistyped array. 
    mistyped = '';
    rTyped = "";
  }
  
  tickeR.show();
}

function gameWon(){
  
background(whi);
fill(bla);
textAlign(CENTER);
textSize(50);
  text(congrats, width/2, height/2 - 100);
  if(frameCount % 6 == 3 && congrats.length < "Congratulations! You've won!".length ){ // The speed is even faster
    congrats += "Congratulations! You've won!"[congrats.length];
  }
  if(congrats.length == "Congratulations! You've won!".length){
    textAlign(CENTER);
    textSize(25);
    text("Click to play again!", width/2, height/2 + 40);
      if(wrongscore > 50){
        text("Your score is: " + wrongscore + "/60. You can do better than that! Aim for 0!", width/2, height/2) // will give different comments according to the score that the player scores.
      }
      if(wrongscore > 40 && wrongscore <= 50){
        text("Your score is: " + wrongscore + "/60. Not too bad! Aim for 0!", width/2, height/2)
      }
      if(wrongscore > 30 && wrongscore <= 40){
        text("Your score is: " + wrongscore + "/60. Good job! Aim for 0!", width/2, height/2)
      }
      if(wrongscore > 20 && wrongscore <= 30){
        text("Your score is: " + wrongscore + "/60. That's really good! Aim for 0!", width/2, height/2)
      }
      if(wrongscore > 10 && wrongscore <= 20){
        text("Your score is: " + wrongscore + "/60. So close to single digits! Aim for 0!", width/2, height/2)
      }
      if(wrongscore > 0 && wrongscore <= 10){
        text("Your score is: " + wrongscore + "/60. You're insane... Aim for 0!", width/2, height/2)
      }
      if(wrongscore == 0){
        text("Your score is: " + wrongscore + "/60. YOU'RE A TYPING MASTER. ALL WILL KNEEL BEFORE YOU!", width/2, height/2)
      }
  }
  if (mouseIsPressed == true){
    currentPage = 0;
  } 
}




class Ticker{
  
  constructor(){
  }

  show(){
  fill(bla);
  textSize(20);
  textAlign(LEFT);
  text('Mistakes: ' + wrongscore + '/60', 100, height - 100)
  }
}
// I'm struggling with the game aspects - making a menu, making a score
// making it so that you can lose to a robot

//maybe make it so that each level, something new pops up. Like the screen starts shaking
// or maybe the screen goes black for a little bit so you can't see what you're typing. 
// or the text flashes for a bit and you have to memorize it after the fact. 


// update: I'm starting to add the new levels with new challenges, would like to add sounds to the earthquake and the lights flickering.