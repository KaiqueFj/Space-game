var canvas = document.getElementById('space-game');
var ctx = canvas.getContext('2d');
//definir o inicio do quadrado
var x = 55;
var x_largura = 40;
var y = 280;
var y_largura = 40;
var dx = 5;
var dy = 5;

requestAnimationFrame(gameloop);

function detectarColisao() {
    if ((x + x_largura) > (950, 0)) {
        //interrompe o game loop parando a movimentação dos quadrados
        clearTimeout();
    }
    else {
        //chama novamente o ciclo da animação
        requestAnimationFrame(gameloop);
    }
}

function gameloop() {
    desenharQuadrado(x, y);
    detectarColisao();
}


function desenharQuadrado(x, y) {
    ctx.clearRect(0, 0, 0, 0); //antes de fazer o desenho é preciso limpar o canvas
    ctx.fillStyle = '#00F';
    ctx.fillRect(x, y, x_largura, y_largura);
}

function gameloop() {
    desenharQuadrado(x, y);
    //chama novamente o ciclo da animação
    requestAnimationFrame(gameloop);
}

window.onkeydown = pressionaTecla;

var velocidade = 2;

function pressionaTecla(tecla) {
    if (tecla.keyCode == 39) {
        x = x + 5; //aumentar o x tem o efeito de ir para a direita     
    }
    if (tecla.keyCode == 37) {
        x = x - 5; //diminuir o x tem o efeito de ir para a esquerda
    }
    if (tecla.keyCode == 38) {
        y = y - 5;
    }
    if (tecla.keyCode == 40) {
        y = y + 5;
    }
}

