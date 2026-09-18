import { useState } from "react";
import { precio } from "../data/productos";

export default function Carrito({ items, cambiarCantidad, quitar, ir }) {
  const [aviso, setAviso] = useState(false);
  const subtotal = items.reduce((s, i) => s + i.precio * i.cantidad, 0);

  if (items.length === 0) {
    return (
      <section className="seccion">
        <h1>Tu carrito</h1>
        <p className="vacio">
          Aún no has agregado productos.{" "}
          <button className="enlace" onClick={() => ir({ v: "tienda" })}>Ir a la tienda</button>
        </p>
      </section>
    );
  }

  return (
    <section className="seccion">
      <h1>Tu carrito</h1>

      <div className="carrito">
        <div className="carrito-items">
          {items.map((i) => (
            <div className="linea" key={i.key}>
              <img src={i.img} alt={i.nombre} />
              <div className="linea-info">
                <h3>{i.nombre}</h3>
                <p className="sutil">Talla {i.talla} · {i.color}</p>
                <button className="enlace" onClick={() => quitar(i.key)}>Quitar</button>
              </div>
              <div className="cantidad">
                <button onClick={() => cambiarCantidad(i.key, -1)} aria-label="Quitar una pieza">−</button>
                <span>{i.cantidad}</span>
                <button onClick={() => cambiarCantidad(i.key, 1)} aria-label="Agregar una pieza">+</button>
              </div>
              <p className="precio">{precio(i.precio * i.cantidad)}</p>
            </div>
          ))}
        </div>

        <aside className="resumen">
          <h2>Resumen</h2>
          <p className="resumen-linea"><span>Subtotal</span> <strong>{precio(subtotal)}</strong></p>
          <p className="resumen-linea"><span>Envío</span> <span>Se calcula en tienda</span></p>
          <button className="boton" onClick={() => setAviso(true)}>Continuar compra</button>
          {aviso && (
            <p className="confirmacion">
              El pago en línea estará disponible próximamente. Por ahora puedes apartar tu pedido
              al 449 978 8078.
            </p>
          )}
          <p className="nota">Carrito de demostración: nada se cobra ni se envía.</p>
        </aside>
      </div>
    </section>
  );
}
