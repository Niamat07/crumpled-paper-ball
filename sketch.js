
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var groundObj;
var leftSide;
var rightSide;


var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2

	};

	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	groundObj= new Ground(width/2,670,width,20);

	leftSide= new Ground(1100,600,20,120);
  



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  Engine.update(engine);



  groundObj.display();
  ball.display();
  leftSide.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		function vForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
			}
	}
}
