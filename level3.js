function level3(){
    console.log("level 3");
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
        text("Lvl 3",300,380);
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
        gameState="level4";
        
        score=0;
        SCore=0;
        bitten=0;
        bb.addAnimation("fullh",fullh);
        bb.changeAnimation("fullh",fullh);
    }
}
  
  
    