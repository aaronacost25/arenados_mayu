// âââââââââââââââââââââââââââââââââââââââââââ
// ð¥ï¸ LÃGICA DEL SITIO - no hace falta editarlo
// âââââââââââââââââââââââââââââââââââââââââââ

// ââ MenÃº mobile (hamburguesa) ââ
const btnMenu = document.getElementById("btn-menu");
const menuMovil = document.getElementById("menu-movil");

if (btnMenu && menuMovil) {
  btnMenu.addEventListener("click", () => {
    const abierto = menuMovil.classList.toggle("header__nav--abierto");
    btnMenu.classList.toggle("header__burger--abierto", abierto);
    btnMenu.setAttribute("aria-expanded", String(abierto));
  });

  menuMovil.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menuMovil.classList.remove("header__nav--abierto");
      btnMenu.classList.remove("header__burger--abierto");
      btnMenu.setAttribute("aria-expanded", "false");
    });
  });
}

// ââ Nombre del negocio (se define en index.html) ââ
const marca = document.querySelector(".brand");
const nombreNegocio = marca ? marca.dataset.nombre : "Sergio Piletas y Gas";
document.getElementById("logo-texto").textContent = nombreNegocio;

// ââ CatÃ¡logo ââ
const contenedor = document.getElementById("catalogo");
const mensajeVacio = document.getElementById("vacio");
const botonesFiltro = document.querySelectorAll(".filtro");

const NOMBRE_GRUPO = {
  productos: "Gas en garrafa",
  pileta: "Mantenimiento de piletas",
};

// Mismo numero que usa el resto del sitio (header, hero, flotante)
const NUMERO_WSP = "543541610122";

const ICONO_WSP = `<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.08-1.33A10 10 0 1 0 12 2zm0 18.3c-1.55 0-3.06-.42-4.38-1.22l-.31-.18-3.02.8.8-2.94-.2-.31a8.33 8.33 0 1 1 7.11 3.85z"/></svg>`;

// Si el articulo no trae "mensaje" propio en productos.js, se arma uno generico
function linkWhatsapp(articulo) {
  const texto =
    articulo.mensaje ||
    `Hola! QuerÃ­a consultar por: ${articulo.nombre}`;
  return `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(texto)}`;
}

function imagenGeneral(articulo) {
  return articulo.categoria === "productos"
    ? "img/producto-generico.svg"
    : "img/servicio-generico.svg";
}

function tarjetaHTML(a) {
  const img = a.imagen || imagenGeneral(a);
  const etiqueta = a.etiqueta
    ? `<span class="tarjeta__etiqueta">${a.etiqueta}</span>`
    : "";
  return `
    <article class="tarjeta" data-categoria="${a.categoria}">
      ${etiqueta}
      <img class="tarjeta__img" src="${img}" alt="${a.nombre}">
      <div class="tarjeta__cuerpo">
        <h3 class="tarjeta__titulo">${a.nombre}</h3>
        <p class="tarjeta__descripcion">${a.descripcion}</p>
        <a class="tarjeta__cta" href="${linkWhatsapp(a)}" target="_blank" rel="noopener">
          ${ICONO_WSP} Consultar
        </a>
      </div>
    </article>`;
}

function grupoHTML(categoria, articulos) {
  if (!articulos.length) return "";
  return `
    <h3 class="catalogo__grupo-titulo catalogo__grupo-titulo--${categoria}">
      ${NOMBRE_GRUPO[categoria]}
    </h3>
    ${articulos.map(tarjetaHTML).join("")}`;
}

function renderizar(filtro) {
  const articulos = PRODUCTOS.filter(
    (a) => filtro === "todos" || a.categoria === filtro
  );

  if (filtro === "todos") {
    const productos = articulos.filter((a) => a.categoria === "productos");
    const pileta = articulos.filter((a) => a.categoria === "pileta");
    contenedor.innerHTML =
      grupoHTML("productos", productos) + grupoHTML("pileta", pileta);
  } else {
    contenedor.innerHTML = articulos.map(tarjetaHTML).join("");
  }

  mensajeVacio.style.display = articulos.length ? "none" : "block";
}

function activarFiltro(boton) {
  botonesFiltro.forEach((b) => b.classList.remove("filtro--activo"));
  boton.classList.add("filtro--activo");
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    activarFiltro(boton);
    renderizar(boton.dataset.filtro);
  });
});

renderizar("todos");

// ââ Botones "Compartir catÃ¡logo" (cabecera y catÃ¡logo) ââ
const botonesCompartir = document.querySelectorAll(".js-compartir");
const URL_CATALOGO = "https://sergio-piletas-y-gas.onrender.com/";
const TEXTO_COMPARTIR =
  "MirÃ¡ el catÃ¡logo de Sergio Piletas y Gas: piletas, gas en garrafa y productos Vulcano ð";

function mostrarAviso(texto) {
  const aviso = document.createElement("div");
  aviso.className = "aviso";
  aviso.textContent = texto;
  document.body.appendChild(aviso);
  requestAnimationFrame(() => aviso.classList.add("aviso--visible"));
  setTimeout(() => {
    aviso.classList.remove("aviso--visible");
    setTimeout(() => aviso.remove(), 300);
  }, 2600);
}

async function compartirCatalogo() {
  // En celulares: abre la hoja de compartir nativa (WhatsApp, Instagram, etc.)
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Sergio Piletas y Gas â CatÃ¡logo digital",
        text: TEXTO_COMPARTIR,
        url: URL_CATALOGO,
      });
      return;
    } catch (e) {
      if (e.name === "AbortError") return; // la persona cancelÃ³
    }
  }

  // En escritorio: copiar el link
  try {
    await navigator.clipboard.writeText(URL_CATALOGO);
    mostrarAviso("ð Link copiado. Â¡PegÃ¡lo en WhatsApp o donde quieras!");
  } catch (e) {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(TEXTO_COMPARTIR + " " + URL_CATALOGO)}`,
      "_blank"
    );
  }
}

botonesCompartir.forEach((boton) => {
  boton.addEventListener("click", compartirCatalogo);
});

// ââ FAQ: cerrar una pregunta al abrir otra ââ
const itemsFaq = document.querySelectorAll(".faq__item");
itemsFaq.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      itemsFaq.forEach((otro) => {
        if (otro !== item) otro.open = false;
      });
    }
  });
});

// ââ AÃ±o del pie de pÃ¡gina ââ
const anio = document.getElementById("footer-anio");
if (anio) anio.textContent = new Date().getFullYear();

// ââ Antes y despuÃ©s (comparador deslizante) ââ
// Los datos se editan en js/antes-despues.js
const contenedorComparador = document.getElementById("comparador");
const navComparador = document.getElementById("comparador-nav");
const trabajosCargados =
  typeof ANTES_DESPUES !== "undefined" ? ANTES_DESPUES : [];

// Solo se muestran los trabajos que ya tienen sus dos fotos:
// asÃ­ se puede publicar antes de tener todas las imÃ¡genes listas
function fotoExiste(src) {
  return new Promise((resolver) => {
    if (!src) return resolver(false);
    const img = new Image();
    img.onload = () => resolver(true);
    img.onerror = () => resolver(false);
    img.src = src;
  });
}

async function trabajosConFotos() {
  const estados = await Promise.all(
    trabajosCargados.map(async (t) => {
      const [okAntes, okDespues] = await Promise.all([
        fotoExiste(t.antes),
        fotoExiste(t.despues),
      ]);
      return okAntes && okDespues;
    })
  );
  return trabajosCargados.filter((_, i) => estados[i]);
}

trabajosConFotos().then((trabajos) => {
  if (!contenedorComparador) return;

  if (!trabajos.length) {
    // NingÃºn trabajo tiene fotos todavÃ­a: ocultar el bloque completo
    const bloque = contenedorComparador.closest(".antes-despues");
    if (bloque) bloque.style.display = "none";
    return;
  }

  let indiceTrabajo = 0;

  const ICONO_MANIJA = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6 4 12l5 6"/><path d="m15 6 5 6-5 6"/></svg>`;
  const ICONO_PREV = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 6 8 12l6 6"/></svg>`;
  const ICONO_SIG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg>`;

  function fijarPct(slider, manija, pct) {
    pct = Math.min(100, Math.max(0, pct));
    slider.style.setProperty("--pos", `${pct}%`);
    manija.setAttribute("aria-valuenow", String(Math.round(pct)));
  }

  function fijarPosicion(slider, manija, clientX) {
    const rect = slider.getBoundingClientRect();
    fijarPct(slider, manija, ((clientX - rect.left) / rect.width) * 100);
  }

  function activarSlider(slider) {
    const manija = slider.querySelector(".comparador__manija");
    let arrastrando = false;

    // Mouse y dedo (pointer events cubre ambos)
    slider.addEventListener("pointerdown", (e) => {
      arrastrando = true;
      slider.classList.remove("comparador__slider--demo");
      slider.setPointerCapture(e.pointerId);
      fijarPosicion(slider, manija, e.clientX);
    });
    slider.addEventListener("pointermove", (e) => {
      if (arrastrando) fijarPosicion(slider, manija, e.clientX);
    });
    const soltar = () => {
      arrastrando = false;
    };
    slider.addEventListener("pointerup", soltar);
    slider.addEventListener("pointercancel", soltar);

    // Teclado (accesibilidad): flechas mueven la barra
    manija.addEventListener("keydown", (e) => {
      const paso = e.shiftKey ? 10 : 5;
      const actual =
        parseFloat(getComputedStyle(slider).getPropertyValue("--pos")) || 50;
      let nueva;
      if (e.key === "ArrowLeft") nueva = actual - paso;
      else if (e.key === "ArrowRight") nueva = actual + paso;
      else if (e.key === "Home") nueva = 0;
      else if (e.key === "End") nueva = 100;
      else return;
      e.preventDefault();
      slider.classList.remove("comparador__slider--demo");
      fijarPct(slider, manija, nueva);
    });
  }

  function trabajoHTML(t) {
    return `
      <figure class="comparador__figura">
        <div class="comparador__slider comparador__slider--demo">
          <img class="comparador__img" src="${t.despues}" alt="DespuÃ©s: ${t.titulo}" draggable="false">
          <img class="comparador__img comparador__img--antes" src="${t.antes}" alt="Antes: ${t.titulo}" draggable="false">
          <span class="comparador__etiqueta comparador__etiqueta--antes">Antes</span>
          <span class="comparador__etiqueta comparador__etiqueta--despues">DespuÃ©s</span>
          <div class="comparador__linea" aria-hidden="true"></div>
          <div class="comparador__manija" role="slider" tabindex="0"
               aria-label="Comparar antes y despuÃ©s: ${t.titulo}"
               aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
            ${ICONO_MANIJA}
          </div>
        </div>
        <figcaption class="comparador__leyenda">
          <strong>${t.titulo}</strong>
          ${t.descripcion ? `<span>${t.descripcion}</span>` : ""}
        </figcaption>
      </figure>`;
  }

  function renderNav() {
    if (!navComparador) return;
    if (trabajos.length < 2) {
      navComparador.hidden = true;
      return;
    }
    navComparador.hidden = false;
    navComparador.innerHTML = `
      <button class="comparador__flecha" id="comp-prev" type="button" aria-label="Trabajo anterior">${ICONO_PREV}</button>
      <div class="comparador__puntos">
        ${trabajos
          .map(
            (_, i) =>
              `<button class="comparador__punto${i === indiceTrabajo ? " comparador__punto--activo" : ""}" type="button" data-i="${i}" aria-label="Ver trabajo ${i + 1}"></button>`
          )
          .join("")}
      </div>
      <button class="comparador__flecha" id="comp-next" type="button" aria-label="Trabajo siguiente">${ICONO_SIG}</button>`;

    navComparador
      .querySelector("#comp-prev")
      .addEventListener("click", () => {
        indiceTrabajo = (indiceTrabajo - 1 + trabajos.length) % trabajos.length;
        renderComparador();
      });
    navComparador
      .querySelector("#comp-next")
      .addEventListener("click", () => {
        indiceTrabajo = (indiceTrabajo + 1) % trabajos.length;
        renderComparador();
      });
    navComparador.querySelectorAll(".comparador__punto").forEach((punto) => {
      punto.addEventListener("click", () => {
        indiceTrabajo = Number(punto.dataset.i);
        renderComparador();
      });
    });
  }

  function renderComparador() {
    contenedorComparador.innerHTML = trabajoHTML(trabajos[indiceTrabajo]);
    activarSlider(
      contenedorComparador.querySelector(".comparador__slider")
    );
    renderNav();
  }

  renderComparador();
});
