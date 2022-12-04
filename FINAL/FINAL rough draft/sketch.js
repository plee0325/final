let text1 = 'This is a typing test. You must type perfectly without any mistakes and finish typing before the game beats you. After each level, the robot will get faster and faster. Good luck.'
let typed = '';
let mistyped = '';
let bla = 0;
let whi = 255;
let w;


function setup(){
createCanvas(windowWidth, windowHeight);

}

function draw(){


background(whi);
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
}

function keyTyped(){
  
if(key == text1[typed.length] && w == 0){ // if the key is correct, it will add to the typed array
typed += key;
whi = 255;
  
}else{ // if the key is incorrect, it will add to the mistyped array
  
typed += key; 
whi = 100;
mistyped += key;

}
// if (key == text1[typed.length] && w >= 0.1){ // makes sure that after a letter was mistyped, that the mistyped array will continue even if the next letters are correct
// mistyped += key;
  
// }
}



function keyReleased(){
  if (keyCode == BACKSPACE){
  typed = typed.substring(0, typed.length - 1);
  whi = 255;
  }
  if (keyCode == BACKSPACE && w >= 1){
  mistyped = mistyped.substring(0, mistyped.length - 1);
  }
}



// I'm struggling with the game aspects - making a menu, making a score
// making it so that you can lose to a robot, making a clinking sound when typing.