function mouseClicked(){
  
  if(tela == 0){
  if(mouseX>=(x+30) && mouseX<=(x+30+l) && mouseY>=(y+270) && mouseY<=(y+270+h)){
    tela = menu;
  }}
  // rect(x+30, y+270, l, h)

 if(tela == menu){
 if(mouseX>=(x+30) && mouseX<=(x+30+l) && mouseY>=(y+140) && mouseY<=(y+140+h)){
    tela = 1;
   }}
  //rect(x+30, y+140, l, h);
 
   if(tela == menu){
  if(mouseX>=(x+30) && mouseX<=(x+30+l) && mouseY>=(y+190) && mouseY<=(y+190+h)){
    tela = 2;
  }}
  // rect(x+30, y+190, l, h);
   
   if(tela == menu){
  if(mouseX>=(x+30) && mouseX<=(x+30+l) && mouseY>=(y+240) && mouseY<=(y+240+h)){
    tela = 3;
} }
  // rect(x+30, y+240, l, h);
  
  if(tela == 1 || tela == 2 || tela == 3){ 
  if(mouseX>=(x+200) && mouseX<=(x+200+l) && mouseY>= (y+280) && mouseY<=(y+280+h)){
    tela = menu
    
    //rect(x+200, y+280, l-30, h)
    }
  }
}
