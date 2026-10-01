// ============================================================
// 💡 ANTES Y DESPUÉS - EDITALO PARA MOSTRAR TUS TRABAJOS
// ============================================================
// Cada trabajo necesita:
//   titulo      : frase corta que aparece debajo de la foto
//   descripcion : (OPCIONAL) texto extra sobre el trabajo
//   antes       : ruta de la foto del ANTES  (guardala en /img)
//   despues     : ruta de la foto del DESPUÉS (guardala en /img)
//
// 👉 CONSEJO: sacá las dos fotos desde el mismo lugar y ángulo,
//    así la comparación con la barra deslizante impacta más.
// ============================================================

const ANTES_DESPUES = [
  {
    titulo: "Estufa restaurada",
    descripcion: "Arenado de esta estufa: sacamos la pintura vieja y todo el óxido. Quedó limpia y lista para volver a pintar.",
    antes: "img/estufa_antes.jpg",
    despues: "img/estufa_despues.jpg",
    // 💡 ALINEACIÓN VERTICAL: la foto del "antes" se sacó un poco más arriba
    //    que la del "después". Este valor la baja para que ambas coincidan.
    //    Menor a 50% = baja el ANTES / Mayor a 50% = lo sube.
    posAntes: "45.5%"
  },
  {
    titulo: "Llantas arenadas",
    descripcion: "Arenado de estas llantas de auto: sacamos la pintura vieja y todo el óxido. Quedaron limpias y listas para pintar.",
    antes: "img/llanta-antes.jpg",
    despues: "img/llanta-despues.jpg"
    // Sin posAntes: estas dos fotos se sacaron desde el mismo lugar,
    // así que ya coinciden (desvío medido: 0 px).
  }

  // 👉 Para sumar otro trabajo real, copiá el bloque de arriba y cambialo:
  //
  // {
  //   titulo: "Reja recuperada",
  //   descripcion: "Arenado de reja y portón: quedó impecable y lista para pintar.",
  //   antes: "img/reja_antes.jpg",
  //   despues: "img/reja_despues.jpg"
  // },
];
