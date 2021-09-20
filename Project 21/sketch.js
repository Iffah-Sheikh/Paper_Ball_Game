
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(500,600,20,120);
	rightSide = new Ground(700,600,20,120);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,400,30, ball_options);
	World.add(world, ball);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(51);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,30)

  drawSprites();
}

function keyPressed() {
	console.log("key press");
	if(keyCode === UP_ARROW) {
		console.log("KEYUP");
		Matter.Body.applyForce(ball,ball.position, {x:130,y: -130});
		//ball.isStatic = false;
		//ball.collided(groundObj);
	}
}





