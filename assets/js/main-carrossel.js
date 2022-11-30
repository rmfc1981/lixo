//acessar a janela (browser)
//pegar o html
//pegar o botao
//saber que esta sendo clicado o botao
//peagar a janela
//pegar o html
//pegar o elements
//mover o elements para a direita



const btnRight = document.querySelector('.button-arrow.-right');
const btnleft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;


btnRight.addEventListener('click', function(){
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px)`;

});

btnleft.addEventListener('click', function(){
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px)`;

});