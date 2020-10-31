const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(80,300,50,50);
    box2 = new Box(120,100,50,100);
    box3 = new Box(300,300,50,50);
    box4 = new Box(340,100,50,110);

    ground = new Ground(200,380,400,10);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
}