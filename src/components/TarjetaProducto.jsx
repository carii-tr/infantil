import { precio, categorias } from "../data/productos";

export default function TarjetaProducto({ producto, ir }) {
  const cat = categorias.find(
    (c) => c.id === producto.categoria
  );

  const verProducto = () =>
    ir({
      v: "producto",
      id: producto.id,
    });

  return (
    <article className="tarjeta">

      {/* Imagen */}
      <button
        className="tarjeta-foto"
        onClick={verProducto}
        aria-label={`Ver ${producto.nombre}`}
      >
        <img
          src={producto.img}
          alt={producto.nombre}
          loading="lazy"
        />

        {producto.destacado && (
          <span className="etiqueta">
            Destacado
          </span>
        )}
      </button>

      {/* Información */}
      <div className="tarjeta-texto">

        <p className="tarjeta-cat">
          {cat ? cat.nombre : ""}
        </p>

        <h3>
          {producto.nombre}
        </h3>

        <p className="tarjeta-color">
          {producto.color}
        </p>

        {/* Precio y acción */}
        <div className="tarjeta-pie">

          <p className="precio">
            {precio(producto.precio)}
          </p>

          <button
            className="boton-mini"
            onClick={verProducto}
          >
            Ver producto
          </button>

        </div>
      </div>
    </article>
  );
}