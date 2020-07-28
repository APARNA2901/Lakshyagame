

var bg, ground, bground;
var form;

var music;

var cosmo, play, start;

var playerAnime, player;

var font1;

var screw, screwdriver, fuel, oxygen, wings, thruster, stand;
var screwImg, driverImg, fuelImg, oxygenImg, wingsImg, thrusterImg,standImg;
var  screwGroup, screwdriverGroup, fuelGroup, oxygenGroup, wingsGroup, thrusterGroup, standGroup;
var gameState = 0;

var score_count = 0;

function preload() {
  playerAnime = loadAnimation("./anime/30.png", "./anime/31.png", "./anime/32.png", "./anime/33.png", "./anime/34.png",
   "./anime/35.png", "./anime/36.png", "./anime/37.png", "./anime/38.png", "./anime/39.png", "./anime/40.png",
    "./anime/41.png", "./anime/42.png");

  bg = loadImage("./images/ground.png");
  
  bground = loadImage("./images/backgro.jpg");

  cosmoImg = loadImage("./images/start12.png");
  play = loadImage("./images/play3.png");

  font1 = loadFont("./Abril.ttf");

  music = loadSound("./sounds/skyline.mp3");

  screwImg = loadImage("./images/screw.png");
  driverImg = loadImage("./images/screwdriver.png");
  fuelImg = loadImage("./images/fuel.png");
  oxygenImg = loadImage("./images/oxygen.png");
  wingsImg = loadImage("./images/wings.png");
  thrusterImg = loadImage("./images/thruster.png");
  standImg = loadImage("./images/stand.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  
  ground = createSprite(windowWidth/2,windowHeight/2 + 100, windowWidth, windowHeight);

  cosmo = createSprite(windowWidth/2-90, 100, 1, 2);

  player = createSprite(windowWidth/2-300, windowHeight/2+90, 30, 60);
  player.addAnimation("playerImage", playerAnime);
  player.scale = 0.7;
  screwGroup = new Group ();
   screwdriverGroup  = new Group ();
   fuelGroup  = new Group ();
   oxygenGroup = new Group ();
   wingsGroup  = new Group ();
   thrusterGroup = new Group ();
   standGroup = new Group ();

  form = new Form();

}
function draw() {
  background(bground);
  
  //music.play();
 
  if(gameState === 0){
    form.display();
    cosmo.addImage("start", cosmoImg);
  }

  if(gameState === 1){
    form.hide();
    cosmo.visibility = false;
    spawnParts();
    ground.addImage("ground",bg);
    ground.velocityX = -15;

  if(ground.x < 10) {
    ground.x = ground.width/2;
  }

  score_count = score_count + Math.round(frameRate/60);

  
  }

  drawSprites();
  textSize(20);
  fill("white");
  text("Score: " + score_count, windowWidth/2+730, 29);
}

function createScrewdriver() {
  screwdriver = createSprite(10,20, 50, 50);
  screwdriver.x = Math.round(random(0, windowWidth));
  screwdriver.y = Math.round(random(100, windowHeight - 70));
  screwdriver.addImage("screwdriver", driverImg);
  screwdriver.velocityX = -5;
screwdriverGroup.add(screwdriver);
if(screwdriverGroup.isTouching(player)){
    screwdriverGroup.destroyEach();
  }
  
}

function createScrew() {
  screw = createSprite(windowWidth/2+100, windowHeight/7+450, 50, 50);
  screw.x = Math.round(random(0, windowWidth));
  screw.y = Math.round(random(100, windowHeight - 70));
  screw.addImage("screw", screwImg);
  screwGroup.add(screw);

  if(screwGroup.isTouching(player)){
    screwGroup.destroyEach();
  }
}


function createFuel() {

  fuel = createSprite(windowWidth/2+100, windowHeight/7+450, 50, 50);
  fuel.addImage("fuel", fuelImg);
   fuel.x = Math.round(random(0, windowWidth));
  fuel.y = Math.round(random(100, windowHeight - 70));
  fuelGroup.add(fuel);

  if(fuelGroup.isTouching(player)){
    fuelGroup.destroyEach();
  }
 
}

function createOxygen() {

  oxygen = createSprite(windowWidth/2+100, windowHeight/7+450, 50, 50);
  oxygen.addImage("oxygen", oxygenImg);
  oxygen.x = Math.round(random(0, windowWidth));
  oxygen.y = Math.round(random(100, windowHeight - 70));
  oxygenGroup.add(oxygen);

  if(oxygenGroup.isTouching(player)){
    oxygenGroup.destroyEach();
  }
 }


function createWings() {
  
  wings = createSprite(windowWidth/2+100, windowHeight/7+450, 50, 50);
  wings.addImage("wings", wingsImg);
  wings.x = Math.round(random(0, windowWidth));
 wings.y = Math.round(random(100, windowHeight - 70));
 wingsGroup.add(wings);

  if(wingsGroup.isTouching(player)){
    wingsGroup.destroyEach();
  }
 }


function createThruster() {

  thruster = createSprite(windowWidth/2+100, windowHeight/7+450, 50, 50);
  thruster.addImage("thruster", thrusterImg);
  thruster.x = Math.round(random(0, windowWidth));
  thruster.y = Math.round(random(100, windowHeight - 70));
  
  thrusterGroup.add(thruster);

  if(thrusterGroup.isTouching(player)){
    thrusterGroup.destroyEach();
  }
 
}

function createStand() {
  stand = createSprite(windowWidth/2+100, windowHeight/7+450, 50, 50);
  stand.addImage("stand", standImg);
 stand.x = Math.round(random(0, windowWidth));
stand.y = Math.round(random(100, windowHeight - 70));

  if(standGroup.isTouching(player)){
    standGroup.destroyEach();
   
  }
}
function spawnParts() {
  if(frameCount % 50 === 0){
     var rand = Math.round(random(1, 7));
     switch(rand){
       case 1: createScrewdriver();
               break;
       case 2: createScrew();
               break;
       case 3: createFuel();
               break;
       case 4: createOxygen();
               break;
       case 5: createWings();
               break;
       case 6: createThruster();
               break;
       case 7:createStand();
       default: break;
     }
  }
  }