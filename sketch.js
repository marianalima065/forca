var tela = 0

var x = 120;
var y = 170;
var l = 150;
var h = 40;
var gallows;
var gallows2;
var caderno;
var logo;
var foto;
var forca;
var palavra;
var letras = [];
var acertos = [];
var chute, copiaChute;
var chance;
var pontuar;


function setup() {
  createCanvas(450,500);
  gallows = loadImage("assets/gallows.png");
  gallows2 = loadImage("assets/gallows2.png");
  caderno = loadImage("assets/caderno.png");
  logo = loadImage("assets/logo.png");
  foto = loadImage("assets/foto.png");
  forca = loadImage("assets/forca.png");
}



function draw() {
     
  if(tela == 0){
    tela0();
  }    
  if(tela == menu){
    menu();
  }    
  if(tela == 1){
    tela1();
    function draw() {
 
  
  desenharQuadrados();
  
  hud();
  
  verificarLetras();
  
  
}
    
  } 
  if(tela == 2){
    tela2();
  }
  if(tela == 3){
    tela3();
  }
}
