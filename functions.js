let menu = document.getElementById("button-menu");
menu.addEventListener('click',()=>{
let list = document.getElementById("menu-list");
    list.classList.toggle('mostrar');
    menu.classList.toggle('cambio');
});