const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var olaf,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15;
var back,poly;

function preload(){

back = loadImage("frozen.png");
poly = loadImage("polygon.png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

   
   
   block1 = new Box(600,260,30,40);
  block2 = new Box(570,260,30,40);
  block3 = new Box(540,260,30,40);
  block4 = new Box(630,260,30,40);
  block5 = new Box(660,260,30,40);



  block6 = new Box(585,220,30,40);
  block7 = new Box(555,220,30,40);
  block8 = new Box(615,220,30,40);
  block9 = new Box(645,220,30,40);



  block10 = new Box(600,170,30,60);
  block11 = new Box(570,180,30,40);
  block12 = new Box(630,180,30,40);


  block13 = new Box(600,140,30,40);


  block14 = new Box(900,170,30,40);
  block15 = new Box(930,170,30,40);
  block16 = new Box(870,170,30,40);
  block17 = new Box(840,170,30,40);
  block18 = new Box(960,170,30,40);

  block19 = new Box(900,130,30,40);
  block20 = new Box(930,130,30,40);
  block21 = new Box(870,130,30,40);

  block22 = new Box(900,90,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 30);

  Polygon = Bodies.circle(50,200,20,6);
  World.add(world,Polygon);

  slingShot = new Rope(this.Polygon, { x: 100, y: 200 });

}

function draw() {
  background(back);
  Engine.update(engine);

  
  ground1.display();
  ground2.display();
  ground3.display();
  fill ("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  imageMode(CENTER);
  image(poly, Polygon.position.x, Polygon.position.y, 300, 300);

  slingShot.display();
 
  
}

function mouseDragged() {
  Matter.Body.setPosition(this.Polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(Polygon);
  }
}







