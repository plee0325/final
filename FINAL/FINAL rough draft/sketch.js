let text0 = "Please type the text below"
let text1 = ""
let typed = "";
let mistyped = "";
let rTyped = ""; // for robot
let bla = 0;
let whi = 255;
let w;
let currentPage = 0;
let wrongscore = 0; // total mistypes 
let a;
let b; // both a and b are for round three; random variables that will make it shake.
let c = 0;
let message = "";

// function preload(){
//   click = loadSound('clicked.wav')
// }

function setup(){
  createCanvas(windowWidth, windowHeight);  
  textFont('georgia');
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
  if(wrongscore >= 50 || c == 1){
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
text(text0, width/2, height/6);
  
  text1 = "This is a typing test. You must type without making too many mistakes. Each level will get harder with new challenges. Good luck.";
  
  
rectMode(CENTER);
noStroke();
fill(208,39,67);
w = textWidth(mistyped);
rect(width/2 - w/2,height/2,w,50); // highlight the incorrect letters
  
fill(bla);
textSize(12);
textAlign(CENTER);
text(text1, width/2, height/5); // the prompt text
  
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
  
  if(typed == text1){ // if the typed string is the exact same as the text, then it will move to the next page
    currentPage = currentPage + 1;
    typed = ''; // resets both the typed and mistyped array. 
    mistyped = '';
    rTyped = "";
  }
}


function roundTwo(){
  background(whi);
  text1 = "Welcome to round 2! There's a robot that's competing with you. It's not too fast right now so it shouldn't really be a problem.";

rectMode(CENTER);
noStroke();
fill(208,39,67);
w = textWidth(mistyped);
rect(width/2 - w/2,height/2,w,50); // highlight the incorrect letters
  
fill(bla);
textSize(12);
textAlign(CENTER);
text(text1, width/2, height/5); // the prompt text
  
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
  
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 30 == 25){ // during these frames, the robot will add a letter to it's string.
    rTyped += text1[rTyped.length]
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
  
  
}

function roundThree(){
  
background(whi);
  text1 = "Do you feel that? It seem's like there's an earthquake. Luckily, it's not too bad. Hopefully it doesn't get any worse. Imagine if the lights went out.";

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
  
rectMode(CENTER);
noStroke();
fill(208,39,67);
w = textWidth(mistyped);
rect(width/2  - w/2,height/2,w,50); // highlight the incorrect letters
  
fill(bla);
textSize(12);
textAlign(CENTER);
text(text1, width/2 + a, height/5 + b); // the prompt text
  
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
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 30 == 22){ // during these frames, the robot will add a letter to it's string.
    rTyped += text1[rTyped.length]
  }
  
  if(rTyped == text1){
    c = 1;
  }
  
  if(typed == text1){ // if the typed string is the exact same as the text, then it will move to the next page
  currentPage = currentPage + 1;
  typed = ''; // resets both the typed and mistyped array. 
  mistyped = '';
    rTyped = "";
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
  
rectMode(CENTER);
noStroke();
fill(208,39,67);
w = textWidth(mistyped);
rect(width/2 - w/2,height/2,w,50); // highlight the incorrect letters
  
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
 
  textAlign(RIGHT);
textSize(30);
fill(255,194,36);
text(rTyped, width/2, height/2 + 100); 
  if(frameCount % 30 == 15){ // The speed is even faster
    rTyped += text1[rTyped.length]
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
  
  
}


function gameOver(){
  if(wrongscore >= 50){
    message = "You made too many mistakes."
  }
  if(c == 1){
    message = "You were too slow."
  }
  
  background(bla);
  fill(whi);
  textSize(30);
textAlign(CENTER);
text(message, width/2, height/3);
textSize(25);
text("Click here try again.", width/2, height/3 + 40);
  
  if (mouseIsPressed == true){
    currentPage = 0;
    wrongscore = 0;
     typed = ''; // resets both the typed and mistyped array. 
  mistyped = '';
    rTyped = "";
    c = 0;
  }
  
}

// I'm struggling with the game aspects - making a menu, making a score
// making it so that you can lose to a robot

//maybe make it so that each level, something new pops up. Like the screen starts shaking
// or maybe the screen goes black for a little bit so you can't see what you're typing. 
// or the text flashes for a bit and you have to memorize it after the fact. 


// update: I'm starting to add the new levels with new challenges, would like to add sounds to the earthquake and the lights flickering.