import { useState } from "react";
import { precio } from "../data/productos";

export default function Carrito({
  items,
  cambiarCantidad,
  quitar,
  ir,
  usuario,
  abrirLogin,
}) {
  const [aviso, setAviso] = useState(false);

  const subtotal = items.reduce(
    (s, i) => s + i.precio * i.cantidad,
    0
  );

  // Sin sesión, "Continuar compra" abre el login
  const continuar = () => {
    if (!usuario) {
      abrirLogin();
      return;
    }

    setAviso(true);
  };

  // Carrito vacío
  if (items.length === 0) {
    return (
      <section className="seccion">

        <div className="pagina-cabeza">
          <div>
            <p className="sutil">TU SELECCIÓN</p>
            <h1>Tu carrito</h1>
          </div>
        </div>

        <div className="vacio">
          <h3>Tu carrito está vacío</h3>

          <p>
            Aún no has agregado productos a tu selección.
          </p>

          <button
            className="boton"
            onClick={() => ir({ v: "tienda" })}
          >
            Explorar la tienda
          </button>
        </div>

      </section>
    );
  }

  return (
    <section className="seccion">

      {/* Encabezado */}
      <div className="pagina-cabeza">
        <div>
          <p className="sutil">TU SELECCIÓN</p>
          <h1>Tu carrito</h1>
        </div>

        <p className="sutil">
          {items.length}{" "}
          {items.length === 1
            ? "artículo"
            : "artículos"}
        </p>
      </div>

      <div className="carrito">

        {/* Productos */}
        <div className="carrito-items">

          {items.map((i) => (
            <div
              className="linea"
              key={i.key}
            >

              <img
                src={i.img}
                alt={i.nombre}
              />

              <div className="linea-info">

                <h3>{i.nombre}</h3>

                <p className="sutil">
                  Talla {i.talla} · {i.color}
                </p>

                <button
                  className="enlace"
                  onClick={() => quitar(i.key)}
                >
                  Quitar
                </button>

              </div>

              {/* Cantidad */}
              <div className="cantidad">

                <button
                  onClick={() =>
                    cambiarCantidad(i.key, -1)
                  }
                  aria-label="Quitar una pieza"
                >
                  −
                </button>

                <span>{i.cantidad}</span>

                <button
                  onClick={() =>
                    cambiarCantidad(i.key, 1)
                  }
                  aria-label="Agregar una pieza"
                >
                  +
                </button>

              </div>

              {/* Precio */}
              <p className="precio">
                {precio(
                  i.precio * i.cantidad
                )}
              </p>

            </div>
          ))}

        </div>

        {/* Resumen */}
        <aside className="resumen">

          <p className="sutil">
            RESUMEN DE COMPRA
          </p>

          <h2>Tu pedido</h2>

          <p className="resumen-linea">
            <span>Subtotal</span>
            <strong>
              {precio(subtotal)}
            </strong>
          </p>

          <p className="resumen-linea">
            <span>Envío</span>
            <span>
              Se calcula en tienda
            </span>
          </p>

          <button
            className="boton boton-ancho"
            onClick={continuar}
          >
            Continuar compra
          </button>

          {!usuario && (
            <p className="nota">
              Inicia sesión para continuar
              con tu pedido.
            </p>
          )}

          {aviso && (
            <p className="confirmacion">
              Gracias,{" "}
              {usuario.nombre.split(" ")[0]}.
              El pago en línea estará disponible
              próximamente. Por ahora puedes
              apartar tu pedido al
              449 978 8078.
            </p>
          )}

          <p className="nota">
            Carrito de demostración: nada se
            cobra ni se envía.
          </p>

        </aside>

      </div>

    </section>
  );
}