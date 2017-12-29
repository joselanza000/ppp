var menu_nav = document.querySelector('nav');

function desplegar_nav(){
  menu_nav.style.visibility='visible';
  menu_nav.style.height='92px';
  console.log(menu_nav);
}
function cerrar_nav(){
  menu_nav.style.visibility='hidden';
  menu_nav.style.height='0px';
  console.log(menu_nav);
}
const buttom_open_nav = document.querySelector('#button-menu-nav');
const buttom_close_nav = document.querySelector('#close-logbox-nav');

buttom_open_nav.addEventListener('click',desplegar_nav);
buttom_close_nav.addEventListener('click',cerrar_nav);
