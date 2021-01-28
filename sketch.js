//DEclaration of global variables
var car,wall;
var speed,weight;


function setup() {
  //creating a Canvas of width 1600 and height 400
  createCanvas(1600,400);

  //creating the objects of the game
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

  //Assigning random speed and weight 
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  //Assigning car velocity based on the speed 
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  if(wall.x - car.x < car.width/2+wall.width/2){
       
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor = color(230,230,0);
    }
    else if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
  }
  drawSprites();
}