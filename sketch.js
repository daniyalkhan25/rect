var engine,world;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var options= {
isStatic:true
  }
  var op = {
restitution:0.5
  }
  object = Bodies.circle(150,300,20,op);
  World.add(world,object);
  console.log(object);
  console.log(object.position.y);
 
 ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);
  
}

function draw() {
  background(0);  
Engine.update(engine);
  rectMode(CENTER);
ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20);
rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}