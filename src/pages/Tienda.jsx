import { useState, useEffect } from "react";
import { categorias, precio } from "../data/productos";
import TarjetaProducto from "../components/TarjetaProducto";

export default function Tienda({ ir, catInicial, productos }) {
  const [cat, setCat] = useState(catInicial || "todos");
  const [max, setMax] = useState(() => Math.max(3000, ...productos.map(p => Math.ceil(p.precio / 50) * 50)));
  const [orden, setOrden] = useState("relevancia");

  useEffect(() => {
    setCat(catInicial || "todos");
  }, [catInicial]);

  const limite = Math.max(3000, ...productos.map(p => Math.ceil(p.precio / 50) * 50));
  useEffect(() => { setMax(limite); }, [limite]);

  let lista = productos.filter(
    (p) =>
      (cat === "todos" || p.categoria === cat) &&
      p.precio <= max
  );

  if (orden === "menor") {
    lista = [...lista].sort(
      (a, b) => a.precio - b.precio
    );
  }

  if (orden === "mayor") {
    lista = [...lista].sort(
      (a, b) => b.precio - a.precio
    );
  }

  return (
    <section className="seccion tienda">

      {/* Encabezado */}
      <div className="pagina-cabeza">
        <div>
          <p className="sutil">
            NUESTRA COLECCIÓN
          </p>

          <h1>Tienda</h1>

          <p className="parrafo">
            Descubre nuestra selección de vestidos,
            accesorios y artículos para acompañar
            cada ceremonia.
          </p>
        </div>

        <p className="sutil">
          {lista.length}{" "}
          {lista.length === 1
            ? "producto"
            : "productos"}
        </p>
      </div>

      {/* Filtros */}
      <div className="panel-filtros">

        <div className="filtros-linea">

          {/* Categorías */}
          <div className="chips">

            <button
              className={
                cat === "todos"
                  ? "chip activo"
                  : "chip"
              }
              onClick={() => setCat("todos")}
            >
              Todos
            </button>

            {categorias.map((c) => (
              <button
                key={c.id}
                className={
                  cat === c.id
                    ? "chip activo"
                    : "chip"
                }
                onClick={() => setCat(c.id)}
              >
                {c.nombre}
              </button>
            ))}

          </div>

          {/* Orden */}
          <label className="orden">
            Ordenar por

            <select
              value={orden}
              onChange={(e) =>
                setOrden(e.target.value)
              }
            >
              <option value="relevancia">
                Relevancia
              </option>

              <option value="menor">
                Precio: menor a mayor
              </option>

              <option value="mayor">
                Precio: mayor a menor
              </option>
            </select>
          </label>

        </div>

        {/* Precio */}
        <div className="rango">

          <label htmlFor="rango">
            Precio máximo:{" "}
            <strong>{precio(max)}</strong>
          </label>

          <input
            id="rango"
            type="range"
            min="0"
            max={limite}
            step="50"
            value={max}
            onChange={(e) =>
              setMax(Number(e.target.value))
            }
          />

        </div>

      </div>

      {/* Productos */}
      {lista.length === 0 ? (
        <div className="vacio">
          <h3>No encontramos productos</h3>

          <p>
            Intenta aumentar el precio máximo
            o seleccionar otra categoría.
          </p>
        </div>
      ) : (
        <div className="rejilla">
          {lista.map((p) => (
            <TarjetaProducto
              key={p.id}
              producto={p}
              ir={ir}
            />
          ))}
        </div>
      )}

    </section>
  );
}