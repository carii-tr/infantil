import { categorias, productos } from "../data/productos";
import TarjetaProducto from "../components/TarjetaProducto";
import hero from "../assets/hero.png";

export default function Inicio({ ir }) {
  const destacados = productos.filter((p) => p.destacado);

  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <h1>Momentos especiales,<br />recuerdos para toda la vida</h1>
          <p>
            Vestidos, trajes y accesorios para acompañar a tus pequeños en su Primera Comunión,
            presentación o bautizo.
          </p>
          <button className="boton" onClick={() => ir({ v: "tienda" })}>Ver colección</button>
        </div>
        <div className="hero-foto">
          <img src={hero} alt="Vestido de ceremonia infantil" />
        </div>
      </section>

      <section className="seccion">
        <h2>Encuentra lo que necesitas</h2>
        <div className="categorias">
          {categorias.map((c) => (
            <button key={c.id} className="cat-card" onClick={() => ir({ v: "tienda", cat: c.id })}>
              <h3>{c.nombre}</h3>
              <p>{c.desc}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="seccion">
        <div className="seccion-cabeza">
          <h2>Productos destacados</h2>
          <button className="enlace" onClick={() => ir({ v: "tienda" })}>Ver toda la tienda</button>
        </div>
        <div className="rejilla">
          {destacados.map((p) => (
            <TarjetaProducto key={p.id} producto={p} ir={ir} />
          ))}
        </div>
      </section>

      <section className="franja">
        <h2>Todo para un día especial</h2>
        <p>
          Te ayudamos a reunir el vestido, el calzado, el tocado y los artículos de la ceremonia
          en una sola visita.
        </p>
        <div className="franja-links">
          <button className="enlace" onClick={() => ir({ v: "tienda", cat: "vestidos" })}>Primera Comunión</button>
          <button className="enlace" onClick={() => ir({ v: "tienda", cat: "vestidos" })}>Presentación</button>
          <button className="enlace" onClick={() => ir({ v: "tienda", cat: "ceremonia" })}>Bautizo</button>
          <button className="enlace" onClick={() => ir({ v: "tienda", cat: "accesorios" })}>Accesorios</button>
        </div>
      </section>
    </>
  );
}
