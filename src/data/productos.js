// Datos de demostración. Cuando exista backend, esto se reemplaza por una API.
const img = (n) => `/img/${n}`;

export const categorias = [
  { id: "vestidos", nombre: "Vestidos", desc: "Primera Comunión, presentación y tres años." },
  { id: "trajes", nombre: "Trajes para niño", desc: "Trajes, camisas, chalecos y corbatas." },
  { id: "accesorios", nombre: "Accesorios", desc: "Tocados, guantes, moños y complementos." },
  { id: "ceremonia", nombre: "Velas y Biblias", desc: "Artículos para acompañar la ceremonia." },
  { id: "calzado", nombre: "Calzado", desc: "Zapatos para niña y niño." },
];

export const productos = [
  {
    id: 1, nombre: "Vestido de Primera Comunión", precio: 2350, categoria: "vestidos",
    img: img("vestidocomunion1.png"), tallas: [4, 6, 8, 10], color: "Blanco", destacado: true,
    descripcion: "Vestido de manga larga en encaje con falda amplia de tul y cinturón de flores. Forro interior suave para todo el día.",
  },
  {
    id: 2, nombre: "Vestido de Comunión bordado", precio: 2680, categoria: "vestidos",
    img: img("vestidocomunion2.png"), tallas: [6, 8, 10, 12], color: "Blanco", destacado: true,
    descripcion: "Corte princesa con bordado floral en el corpiño y lazo posterior. Ideal para ceremonias de mañana.",
  },
  {
    id: 3, nombre: "Vestido de tres años", precio: 1950, categoria: "vestidos",
    img: img("tresanos1.png"), tallas: [2, 3, 4], color: "Lila", destacado: true,
    descripcion: "Vestido de presentación en tono lila con capas de tul y detalles brillantes en la cintura.",
  },
  {
    id: 4, nombre: "Vestido de presentación", precio: 1780, categoria: "vestidos",
    img: img("tresanos2.png"), tallas: [2, 3, 4], color: "Blanco perla",
    descripcion: "Vestido corto con mangas abullonadas y moño lateral. Incluye enagua.",
  },
  {
    id: 5, nombre: "Ropón de bautizo", precio: 2100, categoria: "ceremonia",
    img: img("ropon1.png"), tallas: ["0-3 m", "3-6 m", "6-12 m"], color: "Marfil",
    descripcion: "Ropón largo en tela delicada con encaje y cruz bordada. Incluye gorrito.",
  },
  {
    id: 6, nombre: "Traje de Primera Comunión", precio: 2450, categoria: "trajes",
    img: img("traje1.png"), tallas: [6, 8, 10, 12], color: "Blanco", destacado: true,
    descripcion: "Traje de tres piezas con saco, pantalón y chaleco. Se vende con corbata a juego.",
  },
  {
    id: 7, nombre: "Traje formal de niño", precio: 2190, categoria: "trajes",
    img: img("traje2.png"), tallas: [4, 6, 8, 10], color: "Azul marino",
    descripcion: "Traje entallado de corte clásico, ideal para ceremonias y eventos formales.",
  },
  {
    id: 8, nombre: "Traje con chaleco", precio: 1990, categoria: "trajes",
    img: img("traje3.png"), tallas: [4, 6, 8], color: "Gris",
    descripcion: "Chaleco, camisa y pantalón. Combina con moño o corbata de la sección de accesorios.",
  },
  {
    id: 9, nombre: "Camisa de vestir", precio: 620, categoria: "trajes",
    img: img("ropanino1.png"), tallas: [4, 6, 8, 10], color: "Blanco",
    descripcion: "Camisa de algodón de manga larga, cuello clásico.",
  },
  {
    id: 10, nombre: "Conjunto de niño", precio: 1350, categoria: "trajes",
    img: img("ropanino2.png"), tallas: [2, 4, 6], color: "Beige",
    descripcion: "Conjunto de dos piezas para presentaciones y bautizos.",
  },
  {
    id: 11, nombre: "Pantalón de vestir", precio: 780, categoria: "trajes",
    img: img("ropanino3.png"), tallas: [4, 6, 8, 10], color: "Negro",
    descripcion: "Pantalón de corte recto con pretina ajustable.",
  },
  {
    id: 12, nombre: "Biblia infantil blanca", precio: 480, categoria: "ceremonia",
    img: img("biblia1.png"), tallas: ["Única"], color: "Blanco", destacado: true,
    descripcion: "Biblia de pasta blanca con canto dorado, presentada en estuche.",
  },
  {
    id: 13, nombre: "Biblia con cruz", precio: 540, categoria: "ceremonia",
    img: img("biblia2.png"), tallas: ["Única"], color: "Blanco",
    descripcion: "Biblia con cruz al frente y hojas doradas. Se puede grabar el nombre.",
  },
  {
    id: 14, nombre: "Biblia de Primera Comunión", precio: 590, categoria: "ceremonia",
    img: img("biblia3.png"), tallas: ["Única"], color: "Marfil",
    descripcion: "Edición para niños con ilustraciones a color y listón separador.",
  },
  {
    id: 15, nombre: "Biblia con rosario", precio: 690, categoria: "ceremonia",
    img: img("biblia4.png"), tallas: ["Única"], color: "Blanco",
    descripcion: "Set de Biblia y rosario en caja de regalo.",
  },
  {
    id: 16, nombre: "Tocado de flores", precio: 450, categoria: "accesorios",
    img: img("tocado1.png"), tallas: ["Única"], color: "Blanco", destacado: true,
    descripcion: "Diadema con flores de tela y perlas, cómoda para uso prolongado.",
  },
  {
    id: 17, nombre: "Tocado con velo", precio: 620, categoria: "accesorios",
    img: img("tocado2.png"), tallas: ["Única"], color: "Blanco",
    descripcion: "Tocado con velo corto de tul, sujeción con peineta.",
  },
  {
    id: 18, nombre: "Guantes de encaje", precio: 290, categoria: "accesorios",
    img: img("guantes1.png"), tallas: ["Chica", "Mediana"], color: "Blanco",
    descripcion: "Guantes cortos de encaje, acabado suave.",
  },
  {
    id: 19, nombre: "Guantes largos", precio: 340, categoria: "accesorios",
    img: img("guantes2.png"), tallas: ["Chica", "Mediana"], color: "Marfil",
    descripcion: "Guantes largos lisos para ceremonia.",
  },
  {
    id: 20, nombre: "Zapatos de niña", precio: 890, categoria: "calzado",
    img: img("zapatos1.png"), tallas: [18, 20, 22, 24], color: "Blanco", destacado: true,
    descripcion: "Zapato cerrado con moño y correa ajustable, suela antiderrapante.",
  },
  {
    id: 21, nombre: "Zapatos de niño", precio: 950, categoria: "calzado",
    img: img("zapatos2.png"), tallas: [20, 22, 24, 26], color: "Negro",
    descripcion: "Zapato formal de piel sintética con agujeta.",
  },
];

export const precio = (n) =>
  n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
