var bg1,bg2,bg3,bg4,bg5,bg7,bg9,bg11,bg15,bg19, jetImg1,player;
var gameState=0;
var spaceImg,fighterImg, space,fighter, titleImg;

function preload(){
  titleImg=loadImage("Images/Title.jfif");
  spaceImg=loadImage("Images/Space.jfif");
  fighterImg=loadImage("Images/Fighter1.png");
  bg1=loadImage("Images/Background-1.jpg");
  bg2=loadImage("Images/Background-2.jpg");
  bg3=loadImage("Images/Background-3.jpg");
  bg4=loadImage("Images/Background-4.jpg");
  bg5=loadImage("Images/Background-5.jpg");
  bg7=loadImage("Images/Background-7.jfif");
  bg9=loadImage("Images/Background-9.jfif");
  jetImg1=loadImage("Images/fighter-plane.png");
  bg11=loadImage("Images/Background-11.jfif");
  bg15=loadImage("Images/Background-15.jpg");
  bg19=loadImage("Images/Background-19.jfif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg15);

  if(gameState===0){
    fill("red");
    //var title=createSprite(windowWidth/2,250,20,20);
    //title.addImage(titleImg);
    //title.scale=1.2;
    //space=createSprite(windowWidth/2,50,20,20);
    //space.addImage(spaceImg);
    //fighter=createSprite(windowWidth/2,170,20,20);
    //fighter.addImage(fighterImg);
    //fighter.scale=0.5;
    //text("Space Fighter",windowWidth/2-100,50,textSize(50));
    text("Press 's' to know the story.",windowWidth/2-200,450,textSize(40));
    text("Use arrow keys to move and space to shoot",windowWidth/2-460,400,textSize(50));
    //player=createSprite(750,400,20,20);
    //player.addImage(jetImg1);
    //player.scale=0.1;
    if(keyDown("s")){
      background(0);
      title.visible=false;
      text("Somewhere on the moon, you are testing out the first Space Jet built for a war in space or as one must say with ALIENS.",50,50);
      text("Suddenly, out of nowhere a portal appears and an alien army emerges making its way towards Earth.",20,20);
      text("As the High Commander and the only one with a Space Jet, it is your job to stop the invasion.",100,100);
    }
    if(keyDown("space")){
      gameState=1;
    }   
  }

    if(gameState===1){
    player=createSprite(700,500,20,20);
    player.addImage(jetImg1);
    player.scale=0.2;
    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      player.x=player.x-5;
    }
  }

  drawSprites();
}