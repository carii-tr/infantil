import { precio } from "../data/productos";

export default function TarjetaProducto({ producto, ir }) {
  return (
    <article className="tarjeta">
      <button
        className="tarjeta-foto"
        onClick={() => ir({ v: "producto", id: producto.id })}
        aria-label={`Ver ${producto.nombre}`}
      >
        <img src={producto.img} alt={producto.nombre} loading="lazy" />
      </button>
      <div className="tarjeta-texto">
        <h3>{producto.nombre}</h3>
        <p className="precio">{precio(producto.precio)}</p>
        <button className="enlace" onClick={() => ir({ v: "producto", id: producto.id })}>
          Ver producto
        </button>
      </div>
    </article>
  );
}
