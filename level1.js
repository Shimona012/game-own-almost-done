function level1(){

    console.log("Level 1!");

    background(bg1);
    textSize(25);
    fill(0);
    stroke(0);
    text(""+SCore,745,373);

    Minu.visible=true;
    bbees.visible=true;
    bb2.visible=true;
    bb3.visible=true; 
    bb.visible=true; 

      
    var rand=Math.round(random(1,4));
       
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

    if(score>=0&&score<10){
        textSize(25);
        fill("Magenta");
        stroke("Magenta");
        strokeWeight(1);
        text(" Collect Red colour Flowers!",200,390);
    }

    textSize(25);
    fill(0);
    stroke(0);
   // text(""+SCore,745,373)
    fill("Magenta");
    stroke("Magenta");
    strokeWeight(2);
    text("Score: "+score,650,50);
    text("Bitten: "+bitten,500,50);

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
      
  if(frameCount%20===0&&bitten>=1){
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

    if(score>=10){
        gameState="level2";
        
        score=0;
        SCore=0;
        bitten=0;

        bb.addAnimation("full",bbb);
        bb.changeAnimation("full",bbb);
    
    }
}
