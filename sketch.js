const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new Log(1000,200,200,20)

    box1 = new Box(1000,100,50,50)
    box2 = new Box(1000,150,50,50)
    box3 = new Box(1000,200,50,50)
    box4 = new Box(1000,250,50,50)
    box5 = new Box(1000,300,50,50)
    box6 = new Box(950,125,50,50)
    box7 = new Box(950,175,50,50)
    box8 = new Box(950,225,50,50)
    box9 = new Box(950,275,50,50)
    box10 = new Box(900,155,50,50)
    box11 = new Box(900,205,50,50)
    box12 = new Box(900,255,50,50)
    box13 = new Box(850,175,50,50)
    box15 = new Box(850,225,50,50)
    box16 = new Box(800,205,50,50)

    hitter1 = new hitter(900,100,50,50)

    function draw(){
      log1 = display();

    box1 = display();
    box2 = display();
    box3 = display();
    box4 = display();
    box5 = display();
    box6 = display();
    box7 = display();
    box8 = display();
    box9 = display();
    box10 = display();
    box11 = display();
    box12 = display();
    box13 = display();
    box15 = display();
    box16 = display();

    hitter1 = display();
    }