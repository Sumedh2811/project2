var wall,thickness;


var bullet,speed,weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)
    thickness=random(22,83)

	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1200,200,thickness,height/2);
  	wall.shapeColor=color(80,80,80)
}

functionhasCollided(Lbullet,Lwall)
{
 bulletRightEdge-lbullet.x+ lbullet.width;
 wallleftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
	 return true
 }
 return false;
}

function draw() {
  background(0);

  if(hasCollided(bullet,wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}
