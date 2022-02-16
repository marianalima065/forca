function tela3(){
 
  background(caderno, 70);
  
  
  image(logo, 43, 90, 190, 80);
  image(foto, 43,246);
  
  fill(0,0,139);
  textSize(18);
  textAlign(CENTER);
  textFont('Georgia');
  textStyle(ITALIC);
  text("Universidade Federal do Rio Grande do Norte", 225, 30);
  text("Escola de Ciências e Tecnologia", 225, 57);
  
  textAlign(LEFT);
  textSize(16);
  text("Lógica de Programação",230, 110);
  text("Rummenigge Dantas", 230, 138);
  text("Projeto 2 - Início do Jogo", 230, 165);
  
  text("Mariana é graduanda no", 210, 257);
  text("Bacharelado em Ciências e", 210, 285);
  text("Tecnologia na ECT – UFRN.", 210, 311);
  text("E, como aprendiz de", 210, 337);
  text("progamção, está desenvol-", 210, 365);
  text("vendo um programa para o", 210, 392);
  text("jogo forca educacional com", 210, 417);
  text("o auxílio do p5js.", 210, 443);
  
  
  textAlign(CENTER);
  textSize(16);
  text("Jogo Forca: Aprendendo as palavras com diversão!", 225, 192);
  text("Autora: Mariana Lima de Oliveira – T02C", 225, 217);
  
    
  fill(154,205,50);
  rect(x+200, y+280, l-30, h);
  
  fill (0,0,139);
  textFont('Georgia');
  textSize(25);
  textStyle(ITALIC);
  text("Voltar", x+260, y+310);
}