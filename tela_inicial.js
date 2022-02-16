function menu(){
  background(gallows, 70);
  
  
  fill (144,238,144);
  textSize(50);
  textAlign(CENTER);
  textFont('Georgia');
  textStyle(BOLD);
  text("Menu", x+105, y-30);
  
  fill(46,139,87);
   
  rect(x+30, y+140, l, h);
  rect(x+30, y+190, l, h);
  rect(x+30, y+240, l, h);
  
  
  textSize(25);
  textAlign(CENTER);
  textFont('Georgia');
  textStyle(ITALIC);
  textAlign(CENTER);
  fill(144,238,144);
  text("Jogar",x+105,y+170);
  text("Instruções",x+105,y+220);
  text("Créditos",x+105,y+270);
   
}

