/* menu.js — Kia Craft: menú hamburguesa (mobile) + submenú "Productos" por tap */

document.addEventListener('DOMContentLoaded', function () {

    var botonMenu = document.getElementById('menu-boton');
    var menuNav = document.querySelector('nav > ul');
  
    if (botonMenu && menuNav) {
      botonMenu.addEventListener('click', function () {
        menuNav.classList.toggle('menu-abierto');
      });
    }
  
    // Submenú "Productos": en mobile se abre con un tap en vez de con hover.
    var toggleProductos = document.querySelector('.nav-dropdown > a');
    var itemProductos = document.querySelector('.nav-dropdown');
  
    if (toggleProductos && itemProductos) {
      toggleProductos.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          itemProductos.classList.toggle('submenu-abierto');
        }
      });
    }
  });