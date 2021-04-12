
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new bob(555, 450, 85);
  bob2 = new bob(300, 450, 85);
	bob3 = new bob(385, 450, 85);
	bob4 = new bob(470, 450, 85);
	bob5 = new bob(215, 450, 85);

	roof = new roof(385, 150, 400, 50);

  rope1 = new rope(bob1.body, roof.body, 170, 20);
	rope2 = new rope(bob2.body, roof.body, -85, 20);
	rope3 = new rope(bob3.body, roof.body, 0, 20);
	rope4 = new rope(bob4.body, roof.body, 85, 20);
	rope5 = new rope(bob5.body, roof.body, -170, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
	
  drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -250, y: -250})
    Matter.Body.applyForce(bob5.body, bob5.body.position, {x: 250, y: -250})
	}
}