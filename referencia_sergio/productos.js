// ============================================================
// ð¡ ARCHIVO DE DATOS - EDITALO PARA AGREGAR / CAMBIAR ARTICULOS
// ============================================================
// Cada articulo necesita:
//   nombre    : como se muestra en el catalogo
//   categoria : "productos"  o  "pileta"
//   descripcion : texto breve que explica el producto/servicio
//   etiqueta  : etiqueta opcional que aparece arriba de la tarjeta
//               (ej: "Mas pedido", "Nuevo") - dejalo vacio "" si no queres
//   imagen    : ruta de la imagen (subila a la carpeta /img)
//               PODES DEJAR "" para usar la imagen generica
//   mensaje   : (OPCIONAL) el texto que se manda por WhatsApp al tocar
//               "Consultar" en esa tarjeta. Si no lo cargas, se arma
//               uno automatico: "Hola! Queria consultar por: <nombre>"
// ============================================================
// ð LAS FOTOS DEL CLIENTE se guardan en la carpeta /img con los
//    nombres que figuran abajo en "imagen" (garrafa-10.jpg, etc.)
// ============================================================

const PRODUCTOS = [
  // ---------- PRODUCTOS (GAS EN GARRAFA) ----------
  // Solo venden garrafas ya cargadas (sin servicio de recarga)
  {
    nombre: "Garrafa de gas 10 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 10 kg de gas licuado, ideal para cocina y uso hogareÃ±o.",
    etiqueta: "Mas pedido",
    imagen: "img/garrafa-10.jpg",
    mensaje: "Hola! QuerÃ­a consultar por una garrafa de gas de 10 kg."
  },
  {
    nombre: "Garrafa de gas 15 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 15 kg, la opcion mas utilizada para uso residencial.",
    etiqueta: "",
    imagen: "img/garrafa-15.jpg",
    mensaje: "Hola! QuerÃ­a consultar por una garrafa de gas de 15 kg."
  },
  {
    nombre: "Garrafa de gas 45 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 45 kg para comercios, restaurantes y grandes consumos.",
    etiqueta: "",
    imagen: "img/garrafa-45.jpg",
    mensaje: "Hola! QuerÃ­a consultar por una garrafa de gas de 45 kg."
  },

  // ---------- SERVICIOS (MANTENIMIENTO DE PILETAS) ----------
  {
    nombre: "Mantenimiento general de pileta",
    categoria: "pileta",
    descripcion: "Limpieza, aspirado y balance del agua para que tu pileta este siempre lista para usar.",
    etiqueta: "",
    imagen: "img/pileta-mto-1.jpg",
    mensaje: "Hola! QuerÃ­a consultar por el mantenimiento general de mi pileta."
  },
  {
    nombre: "Puesta en marcha de temporada",
    categoria: "pileta",
    descripcion: "Preparamos tu pileta para el verano: filtrado, cloro y equilibrio quimico completo.",
    etiqueta: "Mas pedido",
    imagen: "img/pileta-mto-2.jpg",
    mensaje: "Hola! QuerÃ­a consultar por la puesta en marcha de mi pileta para esta temporada."
  },
  {
    nombre: "Reparacion de bombas y filtros",
    categoria: "pileta",
    descripcion: "Diagnostico y reparacion de bombas y filtros, incluyendo cambio de manija de multivalvulas.",
    etiqueta: "",
    imagen: "img/reparacion.jpg",
    mensaje: "Hola! QuerÃ­a consultar por la reparaciÃ³n de una bomba/filtro de mi pileta."
  },
  {
    nombre: "Cambio de cuarzo",
    categoria: "pileta",
    descripcion: "Renovamos la arena de cuarzo de tu filtro para que vuelva a filtrar como el primer dia.",
    etiqueta: "",
    imagen: "img/cambio_cuarzo.jpg",
    mensaje: "Hola! QuerÃ­a consultar por el cambio de cuarzo de mi filtro."
  },
  {
    nombre: "Productos marca Vulcano",
    categoria: "pileta",
    descripcion: "Venta de filtros, bombas y accesorios Vulcano. Te asesoramos para elegir el equipo ideal segun los metros de tu pileta.",
    etiqueta: "Nuevo",
    imagen: "img/kit.jpg",
    mensaje: "Hola! QuerÃ­a consultar por productos Vulcano para mi pileta."
  },
  {
    nombre: "Analisis y tratamiento de agua",
    categoria: "pileta",
    descripcion: "Control de pH, cloro y parametros del agua con tratamiento personalizado.",
    etiqueta: "",
    imagen: "img/pileta-mto-4.jpg",
    mensaje: "Hola! QuerÃ­a consultar por un anÃ¡lisis y tratamiento del agua de mi pileta."
  },
  {
    nombre: "Pintura de piletas",
    categoria: "pileta",
    descripcion: "Reparacion de revoque y pintura especial para piletas. Renovamos tu pileta con materiales de calidad.",
    etiqueta: "",
    imagen: "img/pileta-mto-2.jpg",
    mensaje: "Hola! QuerÃ­a consultar por la pintura de mi pileta."
  }
];
