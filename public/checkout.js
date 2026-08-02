  /* checkout.js — Kia Craft: resumen de pedido + link a WhatsApp */

  document.addEventListener('DOMContentLoaded', function () {
    var carritoGuardado = localStorage.getItem('carritoKia');
    var carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
  
    var contenedor = document.getElementById('checkout-items');
    var totalEl = document.getElementById('checkout-total-monto');
    var btnWhatsapp = document.getElementById('btn-whatsapp');
  
    if (carrito.length === 0) {
      contenedor.innerHTML = '<p style="color:#7a9197;">Tu carrito está vacío.</p>';
      totalEl.textContent = '$0';
      btnWhatsapp.style.display = 'none';
      return;
    }
  
    var total = 0;
    var mensajeItems = '';
  
    carrito.forEach(function (item) {
      var subtotal = item.producto.precio * item.cantidad;
      total += subtotal;
  
      var div = document.createElement('div');
      div.className = 'checkout-item';
      div.innerHTML =
        '<img src="' + item.producto.imagen + '" alt="' + item.producto.nombre + '">' +
        '<div class="checkout-item-info">' +
          '<div class="checkout-item-nombre">' + item.producto.nombre + '</div>' +
          '<div class="checkout-item-detalle">' + item.cantidad + ' x ' + formatearPrecioCheckout(item.producto.precio) + '</div>' +
        '</div>';
      contenedor.appendChild(div);
  
      mensajeItems += '- ' + item.producto.nombre + ' x' + item.cantidad + '\n';
    });
  
    totalEl.textContent = formatearPrecioCheckout(total);
  
    // Arma el mensaje de WhatsApp con el resumen del pedido
    var numeroWhatsapp = '542975167569'; // ← reemplazar por tu número con código de país, sin +
    var mensaje =
      'Hola! Quiero confirmar mi pedido de Kia Craft:\n\n' +
      mensajeItems +
      '\nTotal: ' + formatearPrecioCheckout(total) +
      '\n\nAdjunto el comprobante de la transferencia.';
  
    btnWhatsapp.href = 'https://wa.me/' + numeroWhatsapp + '?text=' + encodeURIComponent(mensaje);
  });
  
  function formatearPrecioCheckout(v) {
    return '$' + Number(v).toLocaleString('es-AR');
  }
  