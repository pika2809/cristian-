const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState = 0;
var form, player, game;

var med1;
var table;
function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world= engine.world;

  // game = new Game();
  // game.start();

  med1 = new Medicine(150,260);
  med2 = new Medicine(280,260);
  med3 = new Medicine(150,300);
  med4 = new Medicine(280,300);

  table = new Table(50,250);

  doctor = new Doctor(150,50);
}

function draw() {
  background("#F6F6F6");  
  Engine.update(engine);
  
  doctor.display();
  table.display();

  med1.display();
  med2.display();
  med3.display();
  med4.display();

}