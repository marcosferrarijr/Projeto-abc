const menu = document.querySelector('.menu');
const botaoMenu = document.querySelector('.icone');

botaoMenu.addEventListener("click", function(event){
    event.preventDefault();
    console.log("ok!");
    menu.classList.toggle('aberto');
});