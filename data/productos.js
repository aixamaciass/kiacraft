/* ==========================================================================
   productos.js — Productos de la tienda.

   Para agregar, modificar o eliminar productos, ver la guía en:
   → data/LEEME.md

   Estructura de cada producto:
     id, nombre, precio, precioOferta (o null), imagen, descripcion
   ========================================================================== */

   var productos = [
    {
      id: 1,
      nombre: "Stickers Selección Argentina",
      precio: 4500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/stickers/stickers1.jpg",
        "./imagenes/stickers/stickers2.jpg",
        "./imagenes/stickers/stickers3.jpg",
        "./imagenes/stickers/stickers4.jpg"
      ],
      descripcion: "Blister de stickers de alta calidad holográficos inspirados en la Selección Argentina. Ideales para decorar lo que quieras."
    },
    {
      id: 2,
      nombre: "Libros bíblicos para colorear",
      precio: 1200,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/librocolorear/colorear1.jpg",
        "./imagenes/librocolorear/colorear2.jpg",
        "./imagenes/librocolorear/colorear3.jpg",
        "./imagenes/librocolorear/colorear4.jpg"
      ],
      descripcion: "Libritos para colorear con historias y dibujos bíblicos, ideales para que los más pequeños aprendan mientras se divierten. Incluyen ilustraciones listas para pintar."
    },
    {
      id: 3,
      nombre: "Goma de borrar con forma de dona",
      precio: 5200,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/gomas/dona1.png",
        "./imagenes/gomas/dona2.png",
        "./imagenes/gomas/dona3.png",
        "./imagenes/gomas/dona4.png",
        "./imagenes/gomas/dona5.png"
      ],
      descripcion: "Goma de borrar de personajes de Sanrio con diseño de dona desarmable. Además de borrar perfectamente, aporta un toque divertido y original a tu cartuchera."
    },
    {
      id: 4,
      nombre: "Goma de borrar con forma de chocolate",
      precio: 1500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/gomas/choco1.png",
        "./imagenes/gomas/choco2.png",
        "./imagenes/gomas/choco3.png",
        "./imagenes/gomas/choco4.png"
      ],
      descripcion: "Goma de borrar con un adorable diseño de barra de chocolate. Ideal para regalar o sumar un detalle diferente a tus útiles."
    },
    {
      id: 5,
      nombre: "Goma retráctil",
      precio: 2700,
      categoria: "Papelería",
      imagenes:[
        "./imagenes/gomas/retra1.png",
        "./imagenes/gomas/retra2.png",
        "./imagenes/gomas/retra3.png",
        "./imagenes/gomas/retra4.png",
        "./imagenes/gomas/retra5.png"
      ],
      descripcion:"Goma de borrar retráctil con mecanismo deslizante que protege la goma y facilita su uso. Con detalle de cupcake/gato adorable en la parte de arriba. Práctica, cómoda y duradera."
    },
    {
      id: 6,
      nombre:"Mini corrector",
      precio: 1500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/corrector/corrector1.png",
        "./imagenes/corrector/corrector2.png",
        "./imagenes/corrector/corrector3.png",
        "./imagenes/corrector/corrector4.png"
      ],
      descripcion: "Corrector líquido de tamaño mini. Su formato compacto lo hace ideal para llevar en cualquier cartuchera y realizar correcciones limpias y rápidas."
    },
    {
      id: 7,
      nombre:"Lapicera 10 en 1",
      precio: 3500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/lapices/multi1.png",
        "./imagenes/lapices/multi2.png",
      ],
      descripcion: "Lapicera multifunción con diseño de pizza o dinosaurio. Trae 10 colores diferentes en un solo cuerpo. Perfecta para estudiar, organizar apuntes o dibujar."
    },
    {
    id: 8,
      nombre: "Sacapuntas animales",
      precio: 3000,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/sacapuntas/sacapunta1.png",
        "./imagenes/sacapuntas/sacapunta2.png",
        "./imagenes/sacapuntas/sacapunta3.png"
      ],
      descripcion: "Sacapuntas con divertidos y tiernos diseños de animalitos. Compacto, práctico y perfecto para darle un toque tierno a tu escritorio"
    },
    {
      id: 9,
      nombre:"Lapiz negro BH n°2 BIC",
      precio: 1500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/lapices/bic1.png",
        "./imagenes/lapices/bic2.png",
        "./imagenes/lapices/bic3.png"
      ],
      descripcion: "Lápiz negro BIC de graduación HB n°2 con forma hexagonal y punta resistente. Ideal para escribir, dibujar y realizar trabajos escolares con excelente calidad."
    },
    {
      id: 10,
      nombre:"Marcador color Rojo",
      precio: 600,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/marcadores/rojo1.png",
        "./imagenes/marcadores/rojo2.png",
        "./imagenes/marcadores/rojo3.png"
      ],
      descripcion: "Marcador permanente de tinta roja con doble punta. Contiene una punta biselada y punta redonda. Ideal para escribir, marcar o realizar trabajos creativos sobre diferentes superficies."
    },
    {
      id: 11,
      nombre:"Marcador color Azul",
      precio: 1500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/marcadores/azul1.png",
        "./imagenes/marcadores/azul2.png",
        "./imagenes/marcadores/azul3.png"
      ],
      descripcion: "Marcador permanente de tinta azul con doble punta. Contiene una punta biselada y punta redonda. Ideal para escribir, marcar o realizar trabajos creativos sobre diferentes superficies."
    },
    {
    id: 12,
      nombre:"Pack mini broches 35mm",
      precio: 1500,
      categoria: "Papelería",
      imagenes: [
        "./imagenes/broches/brochegrande2.png",
        "./imagenes/broches/brochegrande1.png"
      ],
      descripcion: "Pack de 12 unidades de mini broches de madera natural de 35 mm. Ideales para decoración, souvenirs, manualidades y proyectos creativos."
    },
    {
      id: 13,
        nombre:"Pack mini broches 25mm",
        precio: 700,
        categoria: "Papelería",
        imagenes: [
          "./imagenes/broches/brochechico2.png",
          "./imagenes/broches/brochechico1.png"
        ],
        descripcion: "Pack de 12 unidades de mini broches de madera natural de 25 mm. Ideales para decoración, souvenirs, manualidades y proyectos creativos."
      },
    {
      id: 14,
        nombre:"Silicona líquida 250ml",
        precio: 7000,
        categoria: "Papelería",
        imagenes: [
          "./imagenes/silicona/siliconc2.png",
          "./imagenes/silicona/siliconc1.png"
        ],
        descripcion: "Silicona líquida de 250 ml con excelente adherencia. Ideal para manualidades, papelería, goma EVA, cartón, madera y diversos materiales. Brinda un pegado resistente y de secado confiable."
    },
    {
      id: 15,
        nombre:"Silicona líquida 500ml",
        precio: 10600,
        categoria: "Papelería",
        imagenes: [
          "./imagenes/silicona/silicong2.png",
          "./imagenes/silicona/silicong1.png"
        ],
        descripcion: "Silicona líquida de 250 ml con excelente adherencia. Ideal para manualidades, papelería, goma eva, cartón, y diversos materiales. Brinda un pegado resistente y de secado confiable."
    },
    {
      id: 16,
        nombre:"Tijera escolar",
        precio: 2500,
        categoria: "Papelería",
        imagenes: [
          "./imagenes/tijeras/tijera3.png",
          "./imagenes/tijeras/tijera2.png",
          "./imagenes/tijeras/tijera1.png"

        ],
        descripcion: "Tijera escolar con mango de plástico y hojas de acero inoxidable con puntas redondeadas para mayor seguridad. Ideal para uso escolar, manualidades y proyectos creativos."
    },
    ];