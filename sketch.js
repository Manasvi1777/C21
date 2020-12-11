var bullet,wall,thickness;
var bullet_image;
var speed,weight;
var wall_image1,wall_image2,wall_image3;

function preload() 
{
 bullet_image= loadImage("bullet(1).png");
  
 wall_image1= loadAnimation("wall1.jpg");
 wall_image2= loadAnimation("wall2.png");
 wall_image3= loadAnimation("wall3.jpg");
}

function setup() {
  createCanvas(1600,400);

  background("lightblue");
  bullet=createSprite(0, 200, 50, 50);
  bullet.addImage(bullet_image);
  bullet.debug=true;
  bullet.setCollider("rectangle",0,0,120,50);
 
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=random(22,83)

  wall=createSprite(1200,200, 50, 80);
  wall.addAnimation("wall1",wall_image1);
  wall.addAnimation("wall2",wall_image2);
  wall.addAnimation("wall3",wall_image3);
  //wall.scale=thickness;
  wall.debug=true;

  bullet.velocityX=speed;
}

function draw() {
  background("lightblue");  

  if (isTouching (bullet,wall))
  {
    bullet.velocityX=0;
    bullet.x=1100;
    var damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));
    textSize(40);
    text("damage:"+damage,width/2.9,height/3);

    if(damage>=10)
    {
      wall.changeAnimation("wall2",wall_image2);
      text("Bad",width/2.5,height/2);
      textSize(80);
    }
    if(damage<10)
    {
      wall.changeAnimation("wall3",wall_image3);
      text("Good",width/2.5,height/2);
      textSize(80);
    }
    
  }
  drawSprites();
}