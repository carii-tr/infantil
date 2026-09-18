import { useState } from "react";
import { productos, precio, categorias } from "../data/productos";
import TarjetaProducto from "../components/TarjetaProducto";

export default function Producto({ id, ir, agregar }) {
  const p = productos.find((x) => x.id === id);
  const [talla, setTalla] = useState(p ? p.tallas[0] : null);
  const [listo, setListo] = useState(false);

  if (!p) return <section className="seccion"><p>Producto no encontrado.</p></section>;

  const cat = categorias.find((c) => c.id === p.categoria);
  const similares = productos.filter((x) => x.categoria === p.categoria && x.id !== p.id).slice(0, 4);

  const alCarrito = () => {
    agregar(p, talla);
    setListo(true);
    setTimeout(() => setListo(false), 2500);
  };

  return (
    <section className="seccion">
      <button className="enlace volver" onClick={() => ir({ v: "tienda", cat: p.categoria })}>
        Volver a {cat.nombre}
      </button>

      <div className="detalle">
        <div className="detalle-foto">
          <img src={p.img} alt={p.nombre} />
        </div>

        <div className="detalle-info">
          <h1>{p.nombre}</h1>
          <p className="precio grande">{precio(p.precio)}</p>

          <p className="campo"><span>Talla</span></p>
          <div className="tallas">
            {p.tallas.map((t) => (
              <button
                key={t}
                className={talla === t ? "talla activa" : "talla"}
                onClick={() => setTalla(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="campo"><span>Color</span> {p.color}</p>
          <p className="descripcion">{p.descripcion}</p>

          <button className="boton" onClick={alCarrito}>Agregar al carrito</button>
          {listo && <p className="confirmacion">Agregado al carrito.</p>}

          <p className="nota">
            Disponibilidad sujeta a existencia en tienda. Llámanos al 449 978 8078 para apartar.
          </p>
        </div>
      </div>

      {similares.length > 0 && (
        <>
          <h2>También te puede interesar</h2>
          <div className="rejilla">
            {similares.map((s) => (
              <TarjetaProducto key={s.id} producto={s} ir={ir} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
