/* tienda.js — Kia Craft: lógica de carrito + visor de galería */

// ===== UTILIDADES =====
function formatearPrecio(v) {
  return '$' + Number(v).toLocaleString('es-AR');
}

function escaparHTML(texto) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(texto || ''));
  return div.innerHTML;
}

// ===== CARRITO =====
// Se guarda en localStorage para que sobreviva a cambios de página.
var carrito = cargarCarrito();

function cargarCarrito() {
  try {
    var guardado = localStorage.getItem('carritoKia');
    return guardado ? JSON.parse(guardado) : [];
  } catch (e) {
    return [];
  }
}

function guardarCarrito() {
  localStorage.setItem('carritoKia', JSON.stringify(carrito));
}

function agregarAlCarrito(producto) {
  var item = carrito.find(function (i) { return i.producto.id === producto.id; });
  item ? item.cantidad++ : carrito.push({ producto: producto, cantidad: 1 });
  guardarCarrito();
  actualizarCarrito();
  mostrarToast(producto.nombre + ' agregado al carrito');
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(function (i) { return i.producto.id !== id; });
  guardarCarrito();
  actualizarCarrito();
}

function actualizarCarrito() {
  var totalItems = carrito.reduce(function (s, i) { return s + i.cantidad; }, 0);
  var cantidadEl = document.getElementById('carrito-cantidad');
  if (cantidadEl) cantidadEl.textContent = totalItems;

  var panel = document.getElementById('carrito-items');
  if (!panel) return; // esta página no tiene panel de carrito en el DOM

  if (carrito.length === 0) {
    panel.innerHTML = '<div class="carrito__vacio"><div class="carrito__vacio-icono">🛒</div><p>Tu carrito está vacío</p></div>';
  } else {
    panel.innerHTML = '';
    carrito.forEach(function (item) {
      var div = document.createElement('div');
      div.className = 'carrito__item';
      div.innerHTML =
        '<img class="carrito__item-img" src="' + escaparHTML(item.producto.imagen) + '" alt="' + escaparHTML(item.producto.nombre) + '">' +
        '<div class="carrito__item-detalle">' +
          '<p class="carrito__item-nombre">' + escaparHTML(item.producto.nombre) + '</p>' +
          '<p class="carrito__item-precio">' + formatearPrecio(item.producto.precio) + ' × ' + item.cantidad + '</p>' +
        '</div>' +
        '<button class="carrito__item-quitar" data-id="' + item.producto.id + '">✕</button>';
      panel.appendChild(div);
    });
    panel.querySelectorAll('.carrito__item-quitar').forEach(function (b) {
      b.addEventListener('click', function () { eliminarDelCarrito(b.dataset.id); });
    });
  }

  var total = carrito.reduce(function (s, i) {
    return s + i.producto.precio * i.cantidad;
  }, 0);
  var totalEl = document.getElementById('carrito-total');
  if (totalEl) totalEl.textContent = formatearPrecio(total);
}

function configurarCarrito() {
  var overlay = document.getElementById('carrito-overlay');
  var panel = document.getElementById('carrito-panel');
  var boton = document.getElementById('carrito-boton');
  var cerrarBtn = document.getElementById('carrito-cerrar');
  var checkoutBtn = document.getElementById('btn-checkout');

  if (!overlay || !panel || !boton) return; // esta página no tiene carrito en el DOM

  boton.addEventListener('click', function () {
    overlay.classList.add('carrito-overlay--activo');
    panel.classList.add('carrito-panel--activo');
  });
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function () {
      window.location.href = 'checkout.html';
    });
  }
  if (cerrarBtn) cerrarBtn.addEventListener('click', cerrar);
  overlay.addEventListener('click', cerrar);
  function cerrar() {
    overlay.classList.remove('carrito-overlay--activo');
    panel.classList.remove('carrito-panel--activo');
  }
}

// Conecta el botón "Agregar al carrito" de cada tarjeta de producto.
// Lee los datos desde los atributos data-* de la tarjeta (.producto-card).
function configurarBotonesAgregar() {
  document.querySelectorAll('.producto-card [data-agregar]').forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      e.stopPropagation(); // evita que el click abra la galería si la tarjeta tiene una
      var card = boton.closest('.producto-card');
      var producto = {
        id: card.dataset.id,
        nombre: card.dataset.nombre,
        precio: Number(card.dataset.precio),
        imagen: card.dataset.imagen
      };
      agregarAlCarrito(producto);
    });
  });
}

// ===== TOAST =====
function mostrarToast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('toast--activo');
  setTimeout(function () { t.classList.remove('toast--activo'); }, 2000);
}

// ===== GALERÍA / VISOR (página Personalizados) =====
var fotosActuales = [];
var indiceActual = 0;
var productoActualVisor = null;

function abrirGaleria(elemento) {
  var imagenesStr = elemento.getAttribute('data-imagenes');
  if (!imagenesStr) return;

  fotosActuales = imagenesStr.split(',');
  indiceActual = 0;

  var tituloEl = document.getElementById('visorTitulo');
  var descEl = document.getElementById('visorDescripcion');
  if (tituloEl) tituloEl.textContent = elemento.getAttribute('data-titulo') || '';
  if (descEl) descEl.textContent = elemento.getAttribute('data-descripcion') || '';

  // Guarda los datos del producto (desde la tarjeta) para el botón "Agregar al carrito" del visor
  var card = elemento.closest('.producto-card');
  productoActualVisor = card ? {
    id: card.dataset.id,
    nombre: card.dataset.nombre,
    precio: Number(card.dataset.precio),
    imagen: card.dataset.imagen
  } : null;

  mostrarImagen(indiceActual);
  var modal = document.getElementById('miGaleriaFlotante');
  if (modal) modal.style.display = 'flex';
}

function mostrarImagen(indice) {
  var imgPrincipal = document.getElementById('imagenPrincipalVisor');
  var contenedorMiniaturas = document.getElementById('contenedorMiniaturas');
  if (!imgPrincipal || !contenedorMiniaturas) return;

  imgPrincipal.src = fotosActuales[indice];
  contenedorMiniaturas.innerHTML = '';

  fotosActuales.forEach(function (url, index) {
    var mini = document.createElement('img');
    mini.src = url;
    mini.classList.add('miniatura');
    if (index === indice) mini.classList.add('activa');

    mini.onclick = function () {
      indiceActual = index;
      mostrarImagen(indiceActual);
    };
    contenedorMiniaturas.appendChild(mini);
  });
}

function cambiarFoto(direccion) {
  if (fotosActuales.length === 0) return;
  indiceActual += direccion;
  if (indiceActual >= fotosActuales.length) indiceActual = 0;
  if (indiceActual < 0) indiceActual = fotosActuales.length - 1;
  mostrarImagen(indiceActual);
}

function cerrarGaleria() {
  var modal = document.getElementById('miGaleriaFlotante');
  if (modal) modal.style.display = 'none';
}

function cerrarGaleriaFuera(event) {
  if (event.target.id === 'miGaleriaFlotante') {
    cerrarGaleria();
  }
}

function configurarBotonAgregarVisor() {
  var boton = document.getElementById('visorAgregarBtn');
  if (!boton) return;
  boton.addEventListener('click', function () {
    if (productoActualVisor) agregarAlCarrito(productoActualVisor);
  });
}

// ===== INICIO =====
document.addEventListener('DOMContentLoaded', function () {
  renderizarProductos();       // ← nuevo, primero
  configurarCarrito();
  configurarBotonesAgregar();
  configurarBotonAgregarVisor();
  actualizarCarrito();

  // ===== RENDER AUTOMÁTICO DE PRODUCTOS (página Productos) =====
function renderizarProductos() {
var contenedor = document.getElementById('grid-productos');
if (!contenedor || typeof productos === 'undefined') return; // esta página no usa este render

// Si el contenedor tiene data-categoria, mostramos solo los productos de esa categoría.
// Si no tiene ese atributo, se muestran todos (por si en algún momento querés una página con todo junto).
var categoriaFiltro = contenedor.dataset.categoria;
var listaProductos = categoriaFiltro
  ? productos.filter(function (p) { return p.categoria === categoriaFiltro; })
  : productos;

contenedor.innerHTML = '';

listaProductos.forEach(function (p) {
  var div = document.createElement('div');
  div.className = 'producto-card';
  div.dataset.id = p.id;
  div.dataset.nombre = p.nombre;
  div.dataset.precio = p.precio;
  div.dataset.imagen = p.imagenes[0];

  div.innerHTML =
    '<div class="producto-imagen" onclick="abrirGaleria(this)" ' +
      'data-imagenes="' + p.imagenes.join(',') + '" ' +
      'data-titulo="' + escaparHTML(p.nombre) + '" ' +
      'data-descripcion="' + escaparHTML(p.descripcion) + '">' +
      '<img src="' + p.imagenes[0] + '" alt="' + escaparHTML(p.nombre) + '">' +
    '</div>' +
    '<div class="producto-info">' +
      '<span class="producto-categoria">' + escaparHTML(p.categoria) + '</span>' +
      '<h4 class="producto-titulo">' + escaparHTML(p.nombre) + '</h4>' +
      '<p class="producto-precio">' + formatearPrecio(p.precio) + '</p>' +
      '<button class="producto-boton" data-agregar>Agregar al carrito</button>' +
    '</div>';

  contenedor.appendChild(div);
});
}
});