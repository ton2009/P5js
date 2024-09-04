let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

 let posicaoHorizontal2; // x
 let posicaoVertical2; // y

function setup() {
  
  createCanvas(600, 600);// width x height
   background(color(100,0,0));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = random(height);
  posiçãoHorizontal2 = 0;
 posiçãoVertical2 = random(height);


}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50);
 
  posiçãoHorizontal+= random(0, 3);
  posiçãoVertical += random(-3, 3);
  posiçãpHorizontal2+= random(0, 3);
  posiçãoVertical2+= random(-3, 3);
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}

