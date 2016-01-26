//5. snowman

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  background("lightblue");

  stroke("Grey");
  strokeWeight(2);
  ellipse(100,175,110,110);
  ellipse(100,100,75,75);
  ellipse(100,50,50,50);

  noStroke();
  fill("black");
  ellipse(90,45,10,10);
  ellipse(110,45,10,10);

  fill("orange");
  triangle(97,50,103,50,100,68);

  //your drawing goes here

}
