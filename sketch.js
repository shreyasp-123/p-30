const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = []
var divisionsHeight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k<=innerWidth; k = k + 80){
    divisions.push(new Divisions(k, height - divisionsHeight/2, 10, divisionsHeight))
  }
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j, 75))
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175))
  }
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j, 275))
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375))
  }

  ground = new Ground(240, 800, 480, 10)



  
}

function draw() {
  Engine.update(engine);
  background(0); 
  
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10))
  }


  for(var j = 0; j < particles.length; j++){
    particles[j].display();

  }

  for(var j = 0; j < divisions.length; j++){
    divisions[j].display();

  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();

  }
  
  ground.display();

  drawSprites();
}