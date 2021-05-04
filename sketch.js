
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catrestingImg = loadAnimation("images/cat1.png");
    catrunningImg = loadAnimation("images/cat3.png","images/cat2.png");
    catsittingImg = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse4.png");
    mouseteasingImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    mousegiftingImg = loadAnimation("images/mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    ground = createSprite(500,400,10,10);
    ground.addImage("groundImg",gardenImg);
    cat = createSprite(850,650);
    cat.addAnimation("catresting",catrestingImg);
    
    
    cat.scale = 0.2
    mouse = createSprite(150,650);
    mouse.addAnimation("mouseImg1",mouseImg1);
    
    
    mouse.scale = 0.12;
}

function draw() {

    background(255);
    var a = cat.x - mouse.x;
    var b = cat.width - mouse.width
    //Write condition here to evalute if tom and jerry collide
    console.log(cat.x - mouse.x);
    console.log(cat.width - mouse.width);
    text(a,100,50);
    fill("black");
    text(b,200,50);
    fill("black");
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catsitting",catsittingImg);
        cat.changeAnimation("catsitting");
        cat.x = 270;
        mouse.addAnimation("mousegifting",mousegiftingImg);
        mouse.changeAnimation("mousegifting");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -4;
      cat.addAnimation("catrunning",catrunningImg);
      cat.changeAnimation("catrunning");
      mouse.addAnimation("mouseteasing",mouseteasingImg);
      mouse.changeAnimation("mouseteasing");
  }


}
