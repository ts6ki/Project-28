
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree;
var boy, boyImage;
var sling, stone;
var mangoBodyPosition, stoneBodyPosition;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 800);

	boy = createSprite(200,688);
	boy.addImage(boyImage);
	boy.scale = 0.075;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750, 750, 1600, 25);
	tree = new Tree(1200,600,50,250)
	stone = new Stone(170,645);
	var pointB ={
        x: 170,
        y: 645
    }
	sling = new Sling(stone.body, pointB);
  mango1 = new Mango(1100,450, 25);
	mango2 = new Mango(1000,550, 25);
	mango3 = new Mango(1200,535, 25);
	mango4 = new Mango(1176,480, 25);
	mango5 = new Mango(1065,540, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);

  ground.display();
  tree.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 


  function detectCollision(lstone, lmango)
{
var mangoPos = lmango.body.position;
var stonePos = lstone.body.position;

  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);

	if(distance <= lmango.r + lstone.r)
	{
    console.log("this is working");
		Matter.Body.setStatic(lmango.body,false)
	}
}

}


function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{ 
    sling.fly();
}

