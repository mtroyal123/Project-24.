
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

var paper;
var ground;
var leftSide;
var rightSide;
var bottomSide;


//function preload(){
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(400,100,100);
    ground = new Ground(400,650,800,10);
    
    leftSide= new Dustbin(605,612,12,50);
    bottomSide = new Dustbin(650,640,90,10);
    rightSide = new Dustbin(695,612,12,50);

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
  drawSprites();
 
}



