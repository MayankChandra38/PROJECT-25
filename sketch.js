
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;

function preload() {
	dustbinImage = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);

	dustbinObj = createSprite(1200,550,10,10);
	dustbinObj.addImage(dustbinImage);
	dustbinObj.scale = 0.7;

	paper = new Paper(400,650,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paper.display();

  keyPressed();

  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position ,{	
		x = 12,
		y = -13
});
}
}