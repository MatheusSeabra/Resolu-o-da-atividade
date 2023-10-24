const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let px = 100;//pixel x
let py = 100;//pixel y
let anim ;// animar
let largrent = 100;//largura retangulo
let comprent = 20;//comprimento retangulo
let l_canvas = 800;//largura canvas
let r_canvas = 500;//comprimento canvas
let dx = 1;
let dy = 1;
let angle = 0;
function mover(){
    
    px+=dx;
    
    if((px + largrent>= l_canvas)||(px <= 0)){
        dx*=-1;
      }

}

function trans() {
    mover();
   ctx.clearRect(0,0,l_canvas,r_canvas);
    //Desenha forma na posisão inicial (50,50)
    ctx.fillStyle = "#5A6990";
    ctx.fillRect(px, py, largrent,comprent);
    // Modifica a cordenada para 100 pixel
    ctx.translate(0,0);
    // Desenhando na nova pisição
    ctx.fillStyle = "#5A6990";
    ctx.fillRect(20, 200, largrent, comprent);
    anim = requestAnimationFrame(trans);
}   
function rota(){
    ctx.clearRect(0,0,l_canvas,r_canvas);
    ctx.fillStyle = "#d90000";
    // Rota o contexto de desenho em 45 graus
    ctx.rotate(angle);
   
    //criando retangulo
    ctx.fillRect(px*2, py*2, largrent, comprent);
    angle += -0.5 * Math.PI / 180;
    anim = requestAnimationFrame(rota);
}
function esca() {
    canvas.width = 500;
    canvas.height = 300;
    ctx.strokeRect(5, 5, 100, 50);
    // Escala o contexto de desenho horizontalmente em 2 vezes e verticalmente em 2 vezes
    ctx.scale(2, 2);    
    ctx.strokeRect(5, 5, 100, 50);

    ctx.strokeRect(5, 5, 100, 50);
    // Escalando o contexto novamente
    ctx.scale(2, 2);    
    ctx.strokeRect(5, 5, 100, 50);
}
function tran(){
    canvas.width = 500;
    canvas.height = 300;
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 250, 100)
// Realiza uma transformação que escala o contexto de desenho por 1 vezes, e transla para (30, 10)
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 250, 100);
//  Mesmo codigo cor diferente
    ctx.transform(1, 0.5, -0.5, 1, 30, 10);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 250, 100);
}
function clip(){
    // Cria um novo caminho e desenha um retângulo
    ctx.fillStyle = "pink"
    ctx.beginPath();
    ctx.fillRect(50, 50, 150, 150);
    ctx.translate(40,50);    

// Desenha um círculo, mas só a parte que se encontra dentro do retângulo
    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.arc(85, 75, 50, 0, 2 * Math.PI);
    ctx.fill();     
    ctx.clip();
}   
function limp() {
// Limpa canva
    canvas.width = 500;
    canvas.height = 300;
}


