function level4(){
console.log("Level 4!");

background(bg2);


 
if(frameCount%30===0){
  comb();
}
bb.visible=true;
bb.addAnimation("emptyh",nfullh);
bb.changeAnimation("emptyh",nfullh);
redG.destroyEach();
pinkG.destroyEach();
blueG.destroyEach();
yellowG.destroyEach();

textSize(25);
fill("Magenta");
stroke("Magenta");
strokeWeight(1);
text("Honey: "+score,650,50);
text("Bitten: "+bitten,500,50);

if(frameCount%20===0&&bitten>=1){
bitten=bitten-1;
}

if(bb2.isTouching(Minu)||bb3.isTouching(Minu)||bbees.isTouching(Minu)){
  bitten=bitten+1;
}

if(combG.isTouching(Minu)){
  score=score+10;
  SCore=SCore+10;

  combG.destroyEach();

  text("Good! Continue",100,50);
  right.play(); 
  textSize(160);
  text("✅",width/2,height/2);
}

bb2.addAnimation("good bee",gbi);
bb2.changeAnimation("good bee",gbi);
bb3.addAnimation("good bee",gbi);
bb3.changeAnimation("good bee",gbi);
bbees.addAnimation("good bee",gbi);
bbees.changeAnimation("good bee",gbi);
if(keyDown("RIGHT_ARROW")){
  Minu.x=Minu.x+5;
}

if(keyDown("LEFT_ARROW")){
  Minu.x=Minu.x-5;
}

if(keyDown("UP_ARROW")){
  Minu.y=Minu.y-5;
}

if(keyDown("DOWN_ARROW")){
  Minu.y=Minu.y+5;
}
if(bitten>20){
  gameState="end";
}

if(score>=10){
  gameState="level5";
  
  score=0;
  SCore=0;
  bitten=0;
  bb.addAnimation("fullh",fullh);
  bb.changeAnimation("fullh",fullh);
}
  /*if(Minu.isTouching(bbees,bb2,bb3)){
          sirensound.play();  
      
      }
      else{
          sirensound.stop();
      }
      */
      text("Shift to move faster",100,380);
      text("Lvl 4",300,380);
}

function keyPressed(){
    if(keyCode===16){
        if(keyDown("RIGHT_ARROW")){
            Minu.x=Minu.x+15;
          }
      
          if(keyDown("LEFT_ARROW")){
            Minu.x=Minu.x-15;
          }
      
          if(keyDown("UP_ARROW")){
            Minu.y=Minu.y-15;
          }
      
          if(keyDown("DOWN_ARROW")){
            Minu.y=Minu.y+15;
          }
    }
}

