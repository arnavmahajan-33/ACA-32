
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  iron = createSprite(450,400,400,10);
  iron.addImage(ironImage);
  iron.scale = 0.3;
  iron.debug = true;
  iron.setCollider("rectangle",100,0,200,400)

  ground =createSprite(200,585,900,10)
  ground.visible=false;

  stoneGroup = new Group()
}

function draw() {
  bg.velocityY=4
  if (bg.y > 500){
    bg.y=bg.width/4;
  }

  if(keyDown("right")){
    iron.velocityX = +4;    
  }

  if(keyDown("left")){
    iron.velocityX = -4;    
  }
 
  if(keyDown("up")){
    iron.velocityY = -9;    
  }

    iron.velocityY = iron.velocityY + 0.5
    iron.collide(ground)

    generateStones();
  for(var i=0 ; i< (stoneGroup).length ;i++){
      var temp = (stoneGroup).get(i);

      if(temp.isTouching(iron)){
          iron.collide(temp);
      }
  }
    
drawSprites();   
}

function generateStones(){
  if(frameCount % 70 === 0){
      var stone = createSprite(1200,120,40,10);
      stone.x = random(50,450);
      stone.addImage(stoneImage);
      stone.scale = 0.8;
      stone.velocityY = +5;

      stone.lifetime = 250;
      stoneGroup.add(stone);
  }
}