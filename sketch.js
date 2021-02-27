const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

var bg = "white"

function preload() {
//getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stage = new Ground(800,200,300,20);
    stage1 = new Ground(400,300,300,20);
    fill("lightblue")
    block1 = new Box(300,250,50,50);
    block2 = new Box(350,250,50,50);
    block3 = new Box(400,250,50,50);
    block4 = new Box(450,250,50,50);
    block5 = new Box(500,250,50,50);
    block6 = new Box(450,150,50,50);
    block7 = new Box(400,150,50,50);
    block8 = new Box(350,150,50,50);
    block9 = new Box(400,200,50,50);
    block10 = new Box(700,100,50,50);
    block11 = new Box(750,100,50,50);
    block12 = new Box(800,100,50,50);
    block13 = new Box(850,100,50,50);
    block14= new Box(900,100,50,50);
    block15= new Box(850,100,50,50);
    block16= new Box(800,100,50,50);
    block17= new Box(750,100,50,50);
    block18= new Box(800,100,50,50);
    polygon = new Polygon(200,250,50,50)

    slingshot = new SlingShot(polygon.body,{x:200, y:50});

}

function draw(){
background(bg)
    ground.display();
    stage.display();
    polygon.displaypolygon();
    stage1.display();
    block1.display();
    block2.display();
    block1.display();
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
    slingshot.display();

    Engine.update(engine);
    //strokeWeight(4);

    text("SCORE : "+score,750,40);

    block1.score()
    block2.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
}

function mouseDragged(){
   
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "red";
    }
    else{
        bg = "blue";
    }

}
