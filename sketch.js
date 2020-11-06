const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function preload(){

polygon_img = loadImage("polygon.png")


}



function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  

ground = new Ground(600,600,900,20);
stand1 = new Ground(390,300,250,10);
stand2 = new Ground(700,200,200,10);

//level 1

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//level 2
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11= new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//level 3
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
block16 = new Block(390,155,30,40);

//level 1
//for second stand

Block1 = new Block(640,175,30,40);
Block2 = new Block(670,175,30,40);
Block3 = new Block(700,175,30,40);
Block4 = new Block(730,175,30,40);
Block5 = new Block(760,175,30,40);
//level 2
Block6 = new Block(670,135,30,40);
Block7 = new Block(700,135,30,40);
Block8 = new Block(730,135,30,40);
Block9 = new Block(700,95,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);


slingshot = new Slingshot(this.polygon,{x:100,y:200});




  
}

function draw() {
   background("orange");
  Engine.update(engine);
getTime();

  text ("Score :"+score,750,40);

ground.display();
stand1.display();
stand2.display();
fill("blue");
block1.display();
block1.score()
block2.display();
block2.score()
block3.display();
block3.score()
block4.display();
block4.score()
block5.display();
block5.score()
block6.display();
block6.score()
block7.display();
block7.score()
fill("pink");
block8.display();
block8.score()
block9.display();
block9.score()
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
fill("yellow");
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
fill("grey");
block16.display();
block16.score();
fill("yellow")
Block1.display();
Block1.score();
Block2.display();
Block2.score();
Block3.display();
Block3.score();
Block4.display();
Block4.score();
Block5.display();
Block5.score();
fill("blue");
Block6.display();
Block6.score();
Block7.display();
Block7.score();
Block8.display();
Block8.score();
fill("pink");
Block9.display();
Block9.score();
slingshot.display();











imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
if (keyCode === 32){
  slingshot.attach(this.polygon)
}

}

async function getTime(){
  var time = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var timetype = await time.json()
  var dt = timetype.datetime
  var hour = dt.slice(11,13)
  if(hour>=6&&hour<=18){
background("green")
  }else{
    background("black")
  }
}