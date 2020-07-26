var circle1;
var circle2;
var circle3;
var circle4;
var circle5;
var circle6;
var circle7;
var a,b,c,d;
var ans;
var ans_img, circle_img,cir2,cr,cr2;


function preload(){
  ans_img=loadImage("Images/ans.png");
   circle_img=loadImage("Images/Circle1.png");
   cir2=loadImage("Images/Circle2.png");
   cr=loadImage("Images/C1.png");
cr2=loadImage("Images/C2.png");
  }

function setup() {
  createCanvas(1200,800);
  circle1 = createSprite(200,200,20,20);
  circle1.addImage(circle_img);
  /*a= createSprite(200,200,5,5);
  a.x=circle1.x;
  a.y=circle1.y;*/
  circle2 = createSprite(1000,300,20,20);
  circle2.addImage(circle_img);
 /* b= createSprite(200,200,5,5);
  b.x=circle2.x;
  b.y=circle2.y;*/
  circle3 = createSprite(100,400,20,20);
  circle3.addImage(cir2);
  /*c= createSprite(200,200,5,5);
  c.x=circle3.x;
  c.y=circle3.y;*/
  circle4 = createSprite(600,700,20,20);
  circle4.addImage(cir2);
  /*d= createSprite(200,200,5,5);
  d.x=circle4.x;
  d.y=circle4.y;*/
  
  ans= createSprite(380,200,20,20);
  ans.addImage(ans_img);
  ans.scale=1.5;
  ans.visible=false;
}

function draw() {
  background(200,200,200); 
  
  text("Arrange the pieces of the circle in the form of a rectangle and once done click enter",200,100);
  



  drawSprites();
}

function mouseDragged(){
  if(mouseX>circle1.x-50 && mouseX<circle1.x+50){
  circle1.x=mouseX;
  circle1.y=mouseY;
  }

  if(mouseX>circle2.x-50 && mouseX<circle2.x+50){
    circle2.x=mouseX;
    circle2.y=mouseY;
    }

   

      if(mouseX>circle4.x-50 && mouseX<circle4.x+50){
        circle4.x=mouseX;
        circle4.y=mouseY;
        }

}

function mouseReleased(){
  
}

function keyPressed(){
  if(keyCode===13){
    ans.visible=true;
    circle1.visible=false;
    circle2.visible=false;
    circle3.visible=false;
    circle4.visible=false;
    circle5.visible=false;
   
  }
}