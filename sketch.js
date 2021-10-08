var snow2img;
var particles = [];

function preload(){
  snow1img = loadImage("snow1.jpg");
  snow2img = loadImage("snow2.jpg");
  snow3img = loadImage("snow3.jpg");
  snow4img = loadImage("snow4.webp");
  snow5img = loadImage("snow5.webp");
}


function setup() {
  createCanvas(1000,500);
  createSprite(400, 200, 50, 50);

}

//create snow Objects;
  for (var j = 40; j <width; j=j+50)
  {
    snow4img.push(new Plinko(j,75));
  }
  for (var j = 15; j <width-10; j=j+50)
  {
    snow5img.push(new Plinko(j,175));
  }


function draw() {
  background(snow2img);  

  if(frameCount%60===0){
    snow.push(new snow(random(width/2-10, width/2+10), 10, 10 ));
  }

  for (var h = 0; h < snow.length; h++) {
    particles[h].display();
  }

  drawSprites();

}



  