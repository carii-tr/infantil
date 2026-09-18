import { useState, useEffect } from "react";
import { categorias, productos, precio } from "../data/productos";
import TarjetaProducto from "../components/TarjetaProducto";

export default function Tienda({ ir, catInicial }) {
  const [cat, setCat] = useState(catInicial || "todos");
  const [max, setMax] = useState(3000);
  const [orden, setOrden] = useState("relevancia");

  useEffect(() => setCat(catInicial || "todos"), [catInicial]);

  let lista = productos.filter(
    (p) => (cat === "todos" || p.categoria === cat) && p.precio <= max
  );
  if (orden === "menor") lista = [...lista].sort((a, b) => a.precio - b.precio);
  if (orden === "mayor") lista = [...lista].sort((a, b) => b.precio - a.precio);

  return (
    <section className="seccion tienda">
      <h1>Tienda</h1>

      <div className="filtros-linea">
        <div className="chips">
          <button className={cat === "todos" ? "chip activo" : "chip"} onClick={() => setCat("todos")}>
            Todos
          </button>
          {categorias.map((c) => (
            <button
              key={c.id}
              className={cat === c.id ? "chip activo" : "chip"}
              onClick={() => setCat(c.id)}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        <label className="orden">
          Ordenar por
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="relevancia">Relevancia</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
          </select>
        </label>
      </div>

      <div className="rango">
        <label htmlFor="rango">Precio máximo: {precio(max)}</label>
        <input
          id="rango"
          type="range"
          min="200"
          max="3000"
          step="50"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />
      </div>

      {lista.length === 0 ? (
        <p className="vacio">No hay productos en ese rango. Sube el precio máximo o elige otra categoría.</p>
      ) : (
        <div className="rejilla">
          {lista.map((p) => (
            <TarjetaProducto key={p.id} producto={p} ir={ir} />
          ))}
        </div>
      )}
    </section>
  );
}
