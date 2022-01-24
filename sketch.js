const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var background_img;

function preload(){
  background_img = loadImage("./assets/background.gif");
}


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
 
  tower = new Tower(150,350,160,310)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  image(background_img,0,0,width,height);

  tower.show()
 
}

