var snow2img;
var snow = [];

function preload(){
  snow1img = loadImage("snow1.jpg");
  snow2img = loadImage("snow2.jpg");
  snow3img = loadImage("snow3.jpg");
  snow4img = loadImage("snow4.webp");
  snow5img = loadImage("snow5.webp");
}


function setup() {
  createCanvas(1000,500);

engine = Matter.Engine.create();
world = engine.world;

// //create snow Objects;
//   for (var j = 40; j <width; j=j+50)
//   {
//     snow4img.push(new Snow(j,75));
//   }
//   for (var j = 15; j <width-10; j=j+50)
//   {
//     snow5img.push(new Snow(j,175));

ground = Matter.Bodies.rectangle(width/2, height, width, 20, {isStatic:true});
Matter.World.add(world, ground);

}

function draw() {
  background(snow2img);  

  Matter.Engine.update(engine);

  if(frameCount%5===0){
    snow.push(new Snow(random(0,width), 10, 10 ));
  }

  for (var h = 0; h < snow.length; h++) {
    snow[h].display();
  }

  drawSprites();

}



  