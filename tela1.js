

function tela1(){
 
  background(caderno, 70);
  
   
    textSize(25);
  fill(255,0,0);
  text("Tela do Jogo", 125, 30);
  
  fill(72,209,204);
  rect(x+200, y+280, l-30, h);
  
  fill (128,0,0);
  textFont('Georgia');
  textSize(25);
  textStyle(ITALIC);
  text("Voltar", x+260, y+310);

   function setup() {
  createCanvas(400, 400);
  palavra = "fogo";
  for(i=0;i<palavra.length;i++){
    letras[i] = palavra.charAt(i);
    acertos[i] = "";
  }
  chute="";
  copiaChute="";
  chance = 10;
  pontuar = false;
}



function hud(){
  //desenho da letra no topo da tela
  fill('black');
  textSize(36);
  text(copiaChute,200,30);
  
  //desenho do score
  fill('black');
  textSize(20);
  text("Chances: "+chance,30,30);
}

function verificarLetras(){
 
  
  //desenha as letras achadas
  for(i=0;i<palavra.length;i++){
        textSize(46);
        fill('black')
        text(acertos[i],50+(95*i),340);
  }
  
  if(pontuar==true){
    pontuar = false;
    chute=" ";
  }
  
}

function desenharQuadrados(){
  //desenho dos quadrados
  for(i=0;i<palavra.length;i++){
    fill('white')
    square(45+(90*i),300,50);
    //textSize(46);
    //fill('black')
    //text(letras[i],40+(85*i),240);
  }
}


function keyTyped(){
  chute = key;
  copiaChute = key;
  
  //encontra a letra e guarda no vetor de acerto;
  for(i=0;i<palavra.length;i++){
    if(letras[i]==chute){
        acertos[i] = chute;
        pontuar = true;
    }
    
  }
  if(pontuar ==false){
    chance=chance-1;
  }
  
}  
}
