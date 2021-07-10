
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(400, 50, 400, 15);
	 bobObject1 = new Bob(280, 200, 30);
	 bobObject2 = new Bob(340, 200, 30);
	 bobObject3 = new Bob(400, 200, 30);
	 bobObject4 = new Bob(460, 200, 30);
	 bobObject5 = new Bob(520, 200, 30);
	 rope1 = new Rope(bobObject1.body, roof.body, -120 , 0);
	 rope2 = new Rope(bobObject2.body, roof.body, -60 , 0);
	 rope3 = new Rope(bobObject3.body, roof.body, 0 , 0);
	 rope4 = new Rope(bobObject4.body, roof.body, 60 , 0);
	 rope5 = new Rope(bobObject5.body, roof.body, 120 , 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();  
}



