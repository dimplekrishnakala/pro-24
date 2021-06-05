const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;

var pearl1,pearl2,pearl3,pearl4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);

    pearl1 = new Pearl(505,450,10);
    pearl2 = new Pearl(510,450,10);
    pearl3 = new Pearl(515,450,10);
    pearl4 = new Pearl(520,450,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    pearl1.display();
    pearl2.display();
    pearl3.display();
    pearl4.display();
}