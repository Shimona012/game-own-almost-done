function level2(){

console.log("level 2");

    background(bg1);

   // bb.addAnimation("empty",bb);
   if(frameCount%20===0){
    bb.changeAnimation("empty",bb);
   }
    text(""+SCore,745,373);
    textSize(25);
    fill("Magenta");
    stroke("Magenta");
    strokeWeight(1);
    text(" Collect Red colour Flowers!",200,390);
    text("Time: "+time2,300,50);
    text("level 2",100,390);

    text("Score: "+score,650,50);
    text("Bitten: "+bitten,500,50);

    var rand=Math.round(random(1,4));
    if(frameCount%30===0){
      time2=time2-1;
    }
    if(time2===0){
      gameState="end";
    }
    if(frameCount%30===0){
      if(rand===1){
        pinkf();
      }
      else if(rand===2){
      redf();
      }
      else if(rand===3){
      bluef();
      }
      else{
      yellowf();
      }
    }

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

if(bb2.isTouching(Minu)||bb3.isTouching(Minu)||bbees.isTouching(Minu)){
  bitten=bitten+1;
}

if(frameCount%20===0 && bitten>=1){
bitten=bitten-1;
}

if(redG.isTouching(Minu)){
    score=score+10;
  SCore=SCore+1;

    redG.destroyEach();

    text("Good! Continue",400,50);
    right.play();
    textSize(160);
    text("✅",width/2,height/2);
    //yes.visible=true;
  }

  if(pinkG.isTouching(Minu)||blueG.isTouching(Minu)||yellowG.isTouching(Minu)){
    score=score-1;
    SCore=SCore-1;

    pinkG.destroyEach();
    blueG.destroyEach();
    yellowG.destroyEach();
    text("oops...",400,50);

    textSize(100);
    fill("red");
    text("X",width/2,height/2);

    wrong.play();
  }

    if(bitten>20){
      gameState="end";
      byee.stop();
    }

 
    if(SCore>=20 || score>=20 && time2>0){
        gameState="level3";
        
        score=0;
        SCore=0;
        bitten=0;

        bb.addAnimation("full",bbb);
        bb.changeAnimation("full",bbb);
    
      //  bb.addAnimation(bbb);
    }
  }

