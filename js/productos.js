// ============================================================
// 🗂️ CATÁLOGO DE SERVICIOS DE ARENADO - EDITALO PARA AGREGAR / CAMBIAR
// ============================================================
// Cada servicio/pieza necesita:
//   nombre      : cómo se muestra en la tarjeta
//   categoria   : "pieza" | "estructura" | "vehiculo"
//   descripcion : texto breve sobre el arenado de esa pieza
//   etiqueta    : etiqueta opcional arriba de la tarjeta (ej: "Más pedido")
//   imagen      : ruta de la imagen (en la carpeta /img)
//   mensaje     : (OPCIONAL) mensaje automático de WhatsApp para esa pieza
// ============================================================
// 💡 Como el precio depende del producto que traigas a arenar,
//    no se muestra precio fijo: cada tarjeta dice "Consultá precio".

const PRODUCTOS = [
  // ────────── PIEZAS SUELTAS ──────────
  {
    nombre: "Herramientas y maquinaria",
    categoria: "pieza",
    descripcion: "Herramientas, máquinas y equipos antiguos. Desoxidado y limpieza profunda para restaurarlos o prepararlos para pintar.",
    etiqueta: "",
    imagen: "img/pieza-herramienta.svg",
    mensaje: "Hola! Quería consultar por el arenado de una herramienta / máquina."
  },
  {
    nombre: "Piezas industriales y repuestos",
    categoria: "pieza",
    descripcion: "Repuestos, engranajes y piezas sueltas de maquinaria. Las limpiamos y desoxidamos para que queden como nuevas.",
    etiqueta: "",
    imagen: "img/pieza-industrial.svg",
    mensaje: "Hola! Quería consultar por el arenado de una pieza industrial."
  },
  {
    nombre: "Artículos y objetos varios",
    categoria: "pieza",
    descripcion: "Objetos de metal que quieras recuperar: portavelas, adornos, marcos y todo lo que se pueda arenar. Consultanos!",
    etiqueta: "",
    imagen: "img/pieza-objeto.svg",
    mensaje: "Hola! Quería consultar por el arenado de un objeto."
  },

  // ────────── ESTRUCTURAS Y HERRERÍA ──────────
  {
    nombre: "Rejas y portones",
    categoria: "estructura",
    descripcion: "Arenado de rejas, portones y barandas. Sacamos el óxido y la pintura saltada para que vuelvan a lucir como nuevas.",
    etiqueta: "Más pedido",
    imagen: "img/pieza-reja.svg",
    mensaje: "Hola! Quería consultar por el arenado de una reja / portón."
  },
  {
    nombre: "Muebles de hierro",
    categoria: "estructura",
    descripcion: "Mesas, sillas y bancos de hierro y forja. Limpiamos el óxido y preparamos la superficie para pintura o restauración.",
    etiqueta: "",
    imagen: "img/pieza-mueble.svg",
    mensaje: "Hola! Quería consultar por el arenado de un mueble de hierro."
  },
  {
    nombre: "Estructuras y herrería",
    categoria: "estructura",
    descripcion: "Vigas, columnas, escaleras y estructuras metálicas. Arenado a medida para piezas grandes que traés al taller.",
    etiqueta: "",
    imagen: "img/pieza-estructura.svg",
    mensaje: "Hola! Quería consultar por el arenado de una estructura metálica."
  },

  // ────────── VEHÍCULOS ──────────
  {
    nombre: "Chasis y carrocería",
    categoria: "vehiculo",
    descripcion: "Arenado completo de chasis, carrocería y piezas de autos: sacamos el óxido y la pintura vieja para dejarlo listo para pintar.",
    etiqueta: "Más pedido",
    imagen: "img/pieza-chasis.svg",
    mensaje: "Hola! Quería consultar por el arenado de un chasis / pieza de auto."
  },
  {
    nombre: "Llantas y aros",
    categoria: "vehiculo",
    descripcion: "Desoxidamos llantas y aros de aleación para que queden impecables y listos para pintura o reacondicionamiento.",
    etiqueta: "",
    imagen: "img/pieza-llanta.svg",
    mensaje: "Hola! Quería consultar por el arenado de llantas / aros."
  },
  {
    nombre: "Piezas de moto y bicicleta",
    categoria: "vehiculo",
    descripcion: "Chasis, llantas y repuestos de motos y bicicletas. Las dejamos sin óxido y listas para que las vuelvas a armar.",
    etiqueta: "",
    imagen: "img/pieza-moto.svg",
    mensaje: "Hola! Quería consultar por el arenado de piezas de moto / bici."
  },
];