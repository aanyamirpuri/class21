var f,m
var a,b
var go1,go2,go3,go4
function setup() {
  createCanvas(1200,800);
 f=createSprite(200, 200, 50, 80);
 m=createSprite(400,200,80,30)
 f.shapeColor="green"
 m.shapeColor="green"
 f.debug=true
 m.debug=true

 go1=createSprite(100,100,50,50)
 go1.shapeColor="green"
 go2=createSprite(200,100,50,50)
 go2.shapeColor="green"
 go3=createSprite(300,100,50,50)
 go3.shapeColor="green"
 go4=createSprite(400,100,50,50)
 go4.shapeColor="green"
}

function draw() {
  background(0);  
  m.x=World.mouseX
  m.y=World.mouseY
  
  if(isTouching(m,go4)){
    return true
  }
  drawSprites();
}
