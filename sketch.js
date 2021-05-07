var canvas;
var gameState = 0;
var contestentCount, database,quiz,question,contestent;

function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  
}
