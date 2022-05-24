var canvas = document.getElementById("space-game");
var ctx = canvas.getContext("2d");

//dados do quadrado vermelho
var x_vermelho = 0;
var y_vermelho = 50;
var largura_vermelho = 20;
var altura_vermelho = 20;

//dados do quadrado azul
var ship_x = 260;
var ship_y = 50;
var largura_azul = 15;
var altura_azul = 15;

requestAnimationFrame(gameloop);



function detectarColisao() 
{
    if ( ( (x_vermelho + largura_vermelho) > ship_x && x_vermelho < (ship_x + largura_azul) ) &&
         ( (y_vermelho + altura_vermelho)  > ship_y && y_vermelho < (ship_y + altura_azul)  ) ) 
         
        {
        //interrompe o game loop parando a movimentação
        clearTimeout();
        }
    else {
        //chama novamente a animação
        requestAnimationFrame(gameloop);
    }
}

function gameloop() 
{
    desenharQuadrado(x_vermelho, y_vermelho);
    detectarColisao();
   
}




function desenharQuadrado() 
{
    //limpa todo o canvas
    ctx.clearRect(0, 0, 800, 400);

    //definindo cor vermelha
    ctx.fillStyle = "rgb(255,0,0)";
    y_vermelho = Math.floor(Math.random() *400)+1;
    x_vermelho = Math.floor(Math.random() *300)+1;

    
    //desenha o quadrado vermelho
    ctx.fillRect(x_vermelho, y_vermelho, largura_vermelho, altura_vermelho);

    //definindo cor ship_y
    ctx.fillStyle = "rgb(0,0,255)";

    //desenha o quadrado azul
    ctx.fillRect(ship_x, ship_y, largura_azul, altura_azul);

    //movimenta o quadrado vermelho
    x_vermelho = x_vermelho + 0.5;
}

window.onkeydown = pressionaTecla;


function pressionaTecla(tecla) {
    if (tecla.keyCode == 39) {
        ship_x = ship_x + 5; //aumentar o x tem o efeito de ir para a direita     
    }
    if (tecla.keyCode == 37) {
        ship_x = ship_x - 5; //diminuir o x tem o efeito de ir para a esquerda
    }
    if (tecla.keyCode == 38) {
        ship_y = ship_y - 5;
    }
    if (tecla.keyCode == 40) {
        ship_y = ship_y + 5;
    }
}