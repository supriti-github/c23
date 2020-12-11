
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground ;
var ball, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    // var ground_options ={
    //     isStatic: true
    // }

    ground = new Ground(200,380,400,20);
    // World.add(myWorld,ground);

    //console.log(ground);
    
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,80);

    // var ball_options ={
    //     restitution: 1.0
    // }

    // ball = Bodies.circle(200,100,20, ball_options);
    // World.add(myWorld,ball);
    // console.log(ball);
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
   
    rectMode(CENTER);
    //rect(200,200,400,20);
    //rect(ground.position.x,ground.position.y,400,20);
    ground.display();
    box1.display();
    box2.display();
    //  ellipseMode(RADIUS);
    //  // ellipse(200, 100, 20, 20);
    //  ellipse(ball.position.x, ball.position.y, 20, 20);
}
