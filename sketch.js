
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbinLeft,dustbinRight,dustbinBottom;

function preload()
{

}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(450,height,2000,20)

	paperObject=new Paper(100,300,30);
	dustbinLeft=new Dustbin(600,600,10,80);
	dustbinRight=new Dustbin(500,400,10,100);
	dustbinBottom=new Dustbin(520,400,100,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paperObject.display();
  dustbinLeft.display();
  dustbinRight.display();
  dustbinBottom.display();
  ground.display();
 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:200});
	}
}



