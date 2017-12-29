var ventana_modal = document.querySelector('#openlog');

function desplegar_modal(){
  ventana_modal.style.visibility='visible';
  console.log(ventana_modal);
}
function cerrar_modal(){
  ventana_modal.style.visibility='hidden';
  console.log(ventana_modal);
}
const buttom_open = document.querySelector('#link-acces-box');
const buttom_close = document.querySelector('#close-logbox');

buttom_open.addEventListener('click',desplegar_modal);
buttom_close.addEventListener('click',cerrar_modal);
