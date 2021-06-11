var iss,issImage;
var spacebg,spacebgImage;
var space1,space1Image;
var space2,space2Image;
var space3,space3Image;
var space4,space4Image;
var hasDocked=false;
var spacecraft;


function preload(){
spacebgImage=loadImage("images/spacebg.jpg");
issImage=loadImage("images/iss.png");
space1Image=loadImage("images/spacecraft1.png");
space2Image=loadImage("images/spacecraft2.png");
space3Image=loadImage("images/spacecraft3.png");
space4Image=loadImage("images/spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 160, 50, 50);
  iss.addImage(issImage);
  iss.scale=1;
  spacecraft=createSprite(600,280,50,50);
  spacecraft.addImage(space1Image);
  spacecraft.scale=0.2;
}

function draw() {
  background(spacebgImage); 
  if(!hasDocked){
  console.log(mouseX);
spacecraft.x=spacecraft.x+random(-2,2);
if(keyDown(UP_ARROW)){
spacecraft.y-=2;
}
if(keyDown(DOWN_ARROW)){
  spacecraft.addImage(space2Image);
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x=spacecraft.x+2;
    spacecraft.addImage(space4Image);
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-2;
      spacecraft.addImage(space3Image);
      }
      
  } 
  if(spacecraft.y<=iss.y+98&&spacecraft.x<=iss.x-60){
    console.log("docking")
    hasDocked=true;
textSize(45);
fill("yellow");
    text("docking succesfull",200,300);

  }
  drawSprites();
}