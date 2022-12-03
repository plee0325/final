let typed = [];
let texT = 'This is a typing test. You must type perfectly without any mistakes and finish typing before the game beats you. After each level, the robot will get faster and faster. Good luck.'
let black = 0;
let white = 255;

function setup(){
createCanvas(windowWidth, windowHeight);

}

function draw(){
background(white);
fill(black);
text(texT, width/2, height/2);
text(sizeof(texT),10,10);

}