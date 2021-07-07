
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

//Change the canvas values and increase the size of the canvas.

//Create a variable i.e. ball.


//*In setup(), create a balls_option variable and assign properties.
//Make sure you set the density of the paper to 1.2 as shown below.*



//The ball object will be the moving object in the game. (See Hint 1)
//You have to create a circular body for the ball and add it to the World.

//Create a blueprint for the Ground, on which the trash can stands, and the crumpled paper ball may fall on.
//To display ground on the canvas create a display() in the ground.js class.
//Call display() inside draw().


//To create a bucket create two more objects for ground class i.e. leftSide and rightSide.
//Call display() of ground.js with leftSide and rightSide class.


//Make the crumpled paper ball jump and fall into the bucket with the up arrow key. (See Hint 2)

//Make sure the project works before you submit it.
//*Refer to the images given above for reference.



